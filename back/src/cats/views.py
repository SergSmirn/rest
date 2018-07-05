from cats.models import Cat
from cats.serializer import CatsSerializer
from cats.permission import IsOwner
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def cats_list(request):
    if request.method == 'GET':
        cats = request.user.cat_set.all()
        serializer = CatsSerializer(cats, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CatsSerializer(data=request.data, owner=request.user)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def cats_detail(request, pk):
    try:
        cat = Cat.objects.get(pk=pk, owner=request.user)
    except Cat.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CatsSerializer(cat)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CatsSerializer(cat, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        cat.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
# class CatsList(generics.ListCreateAPIView):
#     queryset = Cat.objects.all()
#     serializer_class = CatsSerializer
#     permission_classes = (permissions.IsAuthenticated, IsOwner)
#
#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)
#
#
# class CatsDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Cat.objects.all()
#     serializer_class = CatsSerializer
