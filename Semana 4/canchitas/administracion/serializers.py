from rest_framework import serializers
from .models import TipoCanchaModel, CanchaModel, LocalModel


class LocalSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocalModel
        fields = '__all__'


class CanchaSerializer(serializers.ModelSerializer):
    local = LocalSerializer(source='localId', read_only=True)
    class Meta:
        model = CanchaModel
        fields = '__all__'
        # exclude=['localId']

class TipoCanchaSerializer(serializers.ModelSerializer):
    canchas = CanchaSerializer(source='canchasTipoCancha',many=True, read_only=True)
    class Meta:
        model = TipoCanchaModel
        # se usa o el atributo fields o el atributo exclude
        # los campos detallados (ya sea para el fields o el exclude) se usa el nombre de los atributos del modelo mas no el nombre de la columna en la bd (db_column)
        fields = '__all__'
        # exclude = ['createdAt']
    def update(self):
        # print(self.instance.tipoCanchaDesc)
        # print(self.validated_data)
        self.instance.tipoCanchaDesc = self.validated_data.get('tipoCanchaDesc', self.instance.tipoCanchaDesc)
        self.instance.save()
        return self.instance
    def delete(self):
        # hacer el comportamiento para que al llamar al metodo delete su estado de la instancia cambie a false
        self.instance.estado = False
        self.instance.save()
        return self.instance


    
