#!/bin/sh

python manage.py makemigrations --no-input
python manage.py migrate --no-input
python manage.py collectstatic --no-input
flake8 --ignore=E501
coverage run manage.py test > coverage_report.txt
coverage report
ls -l
cat coverage_report.txt

# gunicorn server.wsgi:application --bind 0.0.0.0:8000

