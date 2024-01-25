FROM ubuntu:18.04

LABEL maintainer="m24te28"
WORKDIR /var/www/html

RUN apt-get update && \
    apt-get install -y -q curl gnupg2
RUN curl http://nginx.org/keys/nginx_signing.key | apt-key add -

RUN apt-get update && \
    apt-get install -y -q nginx

ADD apache.html /var/www/html/

EXPOSE 443 80

CMD ["nginx", "-g", "daemon off;"]