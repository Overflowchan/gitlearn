FROM nginx:1.25-alpine


COPY index.html /usr/share/nginx/html



ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

