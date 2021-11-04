from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import  IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class home(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def post(self, request):
        return Response({"status" : 200, "payload" : "successfully"})