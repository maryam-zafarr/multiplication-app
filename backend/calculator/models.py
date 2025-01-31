from django.db import models

# Model to store multiplication results
class Multiplication(models.Model):
    number1 = models.IntegerField()  # First number in multiplication
    number2 = models.IntegerField()  # Second number in multiplication
    result = models.IntegerField()   # Computed result
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.number1} x {self.number2} = {self.result}"
