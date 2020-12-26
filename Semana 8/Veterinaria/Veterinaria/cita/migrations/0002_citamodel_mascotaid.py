# Generated by Django 3.1.3 on 2020-12-19 18:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0001_initial'),
        ('cita', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='citamodel',
            name='mascotaId',
            field=models.ForeignKey(db_column='mascota_id', default=None, on_delete=django.db.models.deletion.PROTECT, to='clientes.mascotamodel'),
            preserve_default=False,
        ),
    ]