FROM python:3.8
ENV PYTHONUNBUFFERED 1
WORKDIR /django
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
# RUN flake8 --ignore=E501 > flake8_report.txt
# RUN cat flake8_report.txt
# RUN pip install coverage
# RUN coverage run manage.py test & coverage report
# RUN ls -l

# RUN coverage report
# RUN python manage.py test
CMD [ "coverage", "run", "manage.py", "test", "&", "coverage", "report" ]

# COPY ./entrypoint.sh /
# ENTRYPOINT ["sh", "/entrypoint.sh"]