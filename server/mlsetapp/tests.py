from rest_framework.test import APITestCase
from rest_framework import status


class User_signup_testing(APITestCase):
    def setUp(self):
        self.user = {"username": "test@gmail.com", "first_name": "test", "last_name": "test", "email": "test@gmail.com", "password": "test"}
        self.usercreatedresp = self.client.post("/accounts/user_auth/", self.user, format='json')
        auth_token = self.usercreatedresp.data['access']
        self.hed = {'HTTP_AUTHORIZATION': 'Bearer ' + auth_token}

    def test_can_create_user(self):
        response = self.client.post("/", **self.hed, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
