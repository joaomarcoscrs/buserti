from core.models import User
from django.test.client import Client
from django.test.testcases import TestCase
from core.tests import fixtures
import json


class TestAuthApi(TestCase):
    @classmethod
    def setUpTestData(cls):
        fixtures.user_jon()

    
