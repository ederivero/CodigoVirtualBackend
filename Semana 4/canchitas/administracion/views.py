from .models import TipoCanchaModel
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import TipoCanchaSerializer
# Create your views here.

class TipoCanchasView(ListCreateAPIView):
    queryset = TipoCanchaModel.objects.all() # SELECT * FROM T_TIPOCANCHA
    serializer_class = TipoCanchaSerializer
    def get(self, request):
        print(self.get_queryset())
        respuesta = self.get_serializer(self.get_queryset(), many=True)
        return Response({
            'ok': True,
            'content':respuesta.data,
            'message': None
        })
    
    def post(self, request):
        # print(request.data)
        respuesta=self.get_serializer(data=request.data)
        # print(respuesta.is_valid(raise_exception=True))
        if respuesta.is_valid(raise_exception=False):
            # con el save se hace el guardado a la base de datos
            respuesta.save()
            return Response({
                'ok':True,
                'content':respuesta.data,
                'message':None
            }, status=status.HTTP_201_CREATED)
        
        else:
            return Response({
                'ok':False,
                'content':None,
                'message':'Hubo un error al crear el Tipo Cancha'
            },status=status.HTTP_400_BAD_REQUEST)

class TipoCanchaView(RetrieveUpdateDestroyAPIView):
    serializer_class = TipoCanchaSerializer
    queryset = TipoCanchaModel.objects.all()
    def get(self, request, tipoCanchaId):
        # el .get() devuelte todas las coincidencias del modelo mediante un filtro que va como parametro indicando el atributo(la columna de la bd) y su valor, tambien se puede usar el metodo filter
        print(self.get_queryset().filter(tipoCanchaId=tipoCanchaId))
        print(self.get_queryset().get(tipoCanchaId=tipoCanchaId))
        respuesta = self.get_serializer(self.get_queryset().get(tipoCanchaId=tipoCanchaId))
        # Una vez que nuestra informacion ya ha sido serializada, simplemente para obtener su informacion en tipo de diccionario llamamos a su atributo data la cual almancena lo necesitado
        return Response({
            'ok':True,
            'content':respuesta.data,
            'message':None
        })
    def put(self, request, tipoCanchaId):
        respuesta = self.serializer_class(self.get_queryset().get(tipoCanchaId=tipoCanchaId),data=request.data)
        if respuesta.is_valid():
            resultado = respuesta.update()
            return Response({
                'ok':True,
                'content':self.serializer_class(resultado).data,
                'message': None
            })