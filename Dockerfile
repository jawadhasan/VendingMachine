# escape=`
FROM nginx:alpine
LABEL author="Jawad Hasan"

## Copy our default nginx config
COPY ./config/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*


## copy over the artifacts in dist folder to default nginx public folder
COPY /dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]


#VOLUME /var/cache/nginx 
# docker build -t vmachine .
# docker run -p 8080:80 vmachine
#docker push hexquote/vmachine