from rest_framework.test import APITestCase
from rest_framework import status


class User_auth_testing(APITestCase):
    def setUp(self):
        self.user = {"username": "test@gmail.com", "first_name": "test", "last_name": "test", "email": "test@gmail.com", "password": "test"}
        self.user2 = {"username": "test@gmail.com", "first_name": "test", "last_name": "test", "email": "", "password": "test"}

    def test_user_signup(self):
        response = self.client.post("/accounts/user_auth/", self.user, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_user_signup_fail(self):
        response = self.client.post("/accounts/user_auth/", format='json')
        self.assertEqual(response.data['status'], status.HTTP_403_FORBIDDEN)

    def test_user_signup_email_fail(self):
        response = self.client.post("/accounts/user_auth/", self.user2, format='json')
        self.assertEqual(response.data['status'], status.HTTP_200_OK)

    def test_can_read_user_list(self):
        response = self.client.get('/accounts/user_auth/', format='json')
        self.assertEqual(response.data['status'], status.HTTP_200_OK)

    def test_can_read_user_detail_fail(self):
        response = self.client.get('/accounts/user_auth/?email=test1@gmail.com', format='json')
        self.assertEqual(response.data['status'], status.HTTP_403_FORBIDDEN)

    def test_can_read_user_detail(self):
        response = self.client.get('/accounts/user_auth/?email=test@gmail.com', format='json')
        print(response)
        self.assertEqual(response.data['status'], status.HTTP_200_OK)


class User_api_testing(APITestCase):
    def setUp(self):
        self.user = {"username": "test@gmail.com", "first_name": "test", "last_name": "test", "email": "test@gmail.com", "password": "test"}
        self.user2 = {"username": "test@gmail.com", "first_name": "tester", "last_name": "test", "email": "test@gmail.com", "password": "test"}
        self.user3 = {"username": "test@gmail.com", "first_name": "test3", "last_name": "test", "email": "test@gmail.com", "password": "test"}
        self.user4 = {"username": "test@gmail.com", "first_name": "test", "last_name": "test4", "email": "test@gmail.com", "password": "test"}
        self.login = {"username": "test@gmail.com", "password": "test"}
        self.usercreatedresp = self.client.post("/accounts/user_auth/", self.user, format='json')
        auth_token = self.usercreatedresp.data['access']
        self.head = {'HTTP_AUTHORIZATION': 'Bearer ' + auth_token}

    def test_can_update_user(self):
        response = self.client.patch('/accounts/user/?email=test@gmail.com', self.user2, **self.head, format='json')
        self.assertEqual(response.data['status'], status.HTTP_200_OK)

    def test_can_update_user_fail(self):
        response = self.client.patch('/accounts/user/?email=test@gmail.com', self.user3, **self.head, format='json')
        self.assertEqual(response.data['status'], status.HTTP_403_FORBIDDEN)

    def test_can_update_user_fail2(self):
        response = self.client.patch('/accounts/user/?email=test@gmail.com', self.user4, **self.head, format='json')
        self.assertEqual(response.data['status'], status.HTTP_403_FORBIDDEN)

    def test_can_update_user_fail3(self):
        response = self.client.patch('/accounts/user/?email=test@gmail.com', **self.head, format='json')
        self.assertEqual(response.data['status'], status.HTTP_403_FORBIDDEN)

    def test_can_delete_user(self):
        response = self.client.delete('/accounts/user/?email=test@gmail.com', **self.head, format='json')
        self.assertEqual(response.data['status'], status.HTTP_200_OK)

    def test_can_delete_user_fail(self):
        response = self.client.delete('/accounts/user/?email=', **self.head, format='json')
        self.assertEqual(response.data['status'], status.HTTP_403_FORBIDDEN)
