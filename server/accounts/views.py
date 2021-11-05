from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings
from django.core.mail import send_mail
from .serializers import UserSerializer


def listToString(s):
    str1 = " "
    return (str1.join(s))


class user_signup(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({"status": 403, "errors": serializer.errors, "message": "Something went wrong"})
        serializer.save()
        user_obj = User.objects.get(email=serializer.data['email'])
        refresh = RefreshToken.for_user(user_obj)
        text = []
        text.append("Hello ")
        text.append(serializer.data['first_name'])
        text.append("")
        text.append(serializer.data['last_name'])
        text.append(",\n Work on DATA, leave the CODING to Us")
        Subject = "Wellcome to MLset"
        Main_Text = listToString(text)
        From_mail = settings.EMAIL_HOST_USER
        To_mail = [serializer.data['email']]
        send_mail(Subject, Main_Text, From_mail, To_mail, fail_silently=False)

        return Response({"status": 200,
                         "payload": serializer.data,
                         "refresh": str(refresh),
                         "access": str(refresh.access_token),
                         "message": "succesfully added and welcome email sent"})


class user_api(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            if request.GET.get('email'):
                user_obj = User.objects.get(email=request.GET.get('email'))
                serializer = UserSerializer(user_obj)
                return Response({"status": 200, "payload": serializer.data})
            elif (request.GET.get('email')) != "":
                user_obj = User.objects.all()
                serializer = UserSerializer(user_obj, many=True)
                return Response({"status": 200, "payload": serializer.data})
        except Exception as e:
            return Response({'status': 403, "message": str(e)})

    def patch(self, request):
        try:
            user_obj = User.objects.get(email=request.GET.get('email'))
            serializer = UserSerializer(user_obj, data=request.data, partial=True)
            if not serializer.is_valid():
                return Response({"status": 403, "errors": serializer.errors, "message": "Something went wrong"})
            serializer.save()
            return Response({"status": 200, "payload": serializer.data, "message": "succesfully updated"})
        except Exception as e:
            return Response({'status': 403, "message": str(e)})

    def delete(self, request):
        try:
            user_obj = User.objects.get(email=request.GET.get('email'))
            user_obj.delete()
            return Response({"status": 200, "message": "succesfully deleted"})
        except Exception as e:
            return Response({'status': 403, "message": str(e)})
