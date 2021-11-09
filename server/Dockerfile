FROM python:3.8
ENV PYTHONUNBUFFERED 1
WORKDIR /django
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
RUN flake8 --ignore=E501 > flake8_report.txt
RUN cat flake8_report.txt
RUN coverage run --omit=*/venv/*,*/migrations/*,*/MLsetenv/*,*/manage.py/* manage.py test & coverage report > coverage_report.txt
RUN cat coverage_report.txt

COPY ./entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]