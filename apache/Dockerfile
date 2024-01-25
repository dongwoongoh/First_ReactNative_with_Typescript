FROM ubuntu:20.04

LABEL maintainer "mad <integral5137@gmail.com>"
LABEL version="0.1"
WORKDIR /var/www/html
RUN apt-get update
RUN apt-get install apache2 -y

ADD apache2.html /var/www/html/
RUN ["/bin/bash","-c","echo init html content > new_apache.html"]

EXPOSE 80/tcp
CMD apachectl -DEFOREGROUND