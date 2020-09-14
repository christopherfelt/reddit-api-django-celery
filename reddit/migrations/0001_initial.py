# Generated by Django 3.1.1 on 2020-09-14 01:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Songs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('youtube_id', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('post_created_string', models.CharField(max_length=255)),
                ('post_score', models.IntegerField()),
                ('upvote_ratio', models.DecimalField(decimal_places=2, max_digits=3)),
            ],
        ),
    ]