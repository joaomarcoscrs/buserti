# Generated by Django 3.1.6 on 2021-02-12 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20210212_1438'),
    ]

    operations = [
        migrations.AddField(
            model_name='computer',
            name='ssd',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
