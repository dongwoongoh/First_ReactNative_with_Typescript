FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive
WORKDIR /var/www/html

LABEL maintainer="mad"
LABEL version="0.1"
LABEL ubuntu="20.04"
LABEL nginx="latest"

RUN apt-get update \
    && apt-get install -y nginx \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
ADD index.html /var/www/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
