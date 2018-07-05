from accounts.serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse

from django.views.decorators.csrf import csrf_exempt


@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)


@csrf_exempt
def test(request):
    print(request.POST)
    return HttpResponse()
