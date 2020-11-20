from rest_framework import serializers
from .models import TipoCanchaModel

class TipoCanchaSerializer(serializers.ModelSerializer):
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