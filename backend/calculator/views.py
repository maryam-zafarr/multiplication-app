from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Multiplication

@csrf_exempt
def multiplication_api(request):
    if request.method == "GET":
        # Fetch all multiplication results from the database
        results = list(Multiplication.objects.values())
        return JsonResponse(results, safe=False)

    elif request.method == "POST":
        try:
            data = json.loads(request.body)
            num1 = int(data.get("number1"))
            num2 = int(data.get("number2"))

            # Perform multiplication
            result = num1 * num2

            # Save to database
            multiplication = Multiplication(number1=num1, number2=num2, result=result)
            multiplication.save()

            # Return the saved result
            return JsonResponse({
                "id": multiplication.id,
                "number1": multiplication.number1,
                "number2": multiplication.number2,
                "result": multiplication.result,
                "created_at": multiplication.created_at
            }, status=201)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)
