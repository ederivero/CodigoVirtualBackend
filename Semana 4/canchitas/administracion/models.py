from django.db import models

# Create your models here.
class LocalModel(models.Model):
    # Definir todos los atributos de nuestra tabla
    # Si no definimos la PK, django automaticamente va a crear una columna llamada ID y obviamente va a ser un integer, auto_increment, not_null, primary_key
    localId = models.AutoField(db_column='local_id',primary_key=True, null=False, unique=True)
    localNomb = models.CharField(db_column='local_nomb', max_length=50)
    localDir = models.CharField(db_column='local_dir', null=False, unique=True, max_length=100)
    # Campos para auditoria
    createdAt = models.DateTimeField(db_column='created_at', auto_now_add=True)
    updatedAt = models.DateTimeField(db_column='updated_at', auto_now=True)
    class Meta:
        db_table = 't_local'