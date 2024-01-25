FROM ubuntu:20.04

LABEL maintainer="m24te28"

RUN apt-get update && \
    apt-get install -y curl nginx

WORKDIR /usr/share/nginx/html

ADD index.html /usr/share/nginx/html

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
