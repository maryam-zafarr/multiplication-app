from rest_framework.test import APITestCase
from rest_framework import status
from .models import Multiplication

# Test case for the Multiplication API.
class MultiplicationAPITest(APITestCase):
    
    # Test Case 1: Ensure we can create a new multiplication record via API.
    def test_create_multiplication(self):
        data = {'number1': 3, 'number2': 4, 'result': 12}
        response = self.client.post('/api/multiplications/', data, format='json')
        
        # Verify response status and database entry
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Multiplication.objects.count(), 1)
    
    # Test Case 2: Ensure we can retrieve stored multiplication records from the database
    def test_get_multiplications(self):
        Multiplication.objects.create(number1=2, number2=5, result=10)
        response = self.client.get('/api/multiplications/')
        
        # Verify response status and data length
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
