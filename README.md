### Steps to test the web-site on local host.

1. Clone the git repo.
2. Pull the docker apache2 image:
```sudo docker pull ubuntu/apache2:2.4-22.04_beta```
3. Run the docker container, creating the docker volume pointing to the <site> folder of the clonned repo:
```sudo docker run -d --name apache2-container \
            -e TZ=UTC \
            -p 8080:80 \
            -v /home/aomelchenko/proj/site:/var/www/html \
            ubuntu/apache2:2.4-22.04_beta```
4. Try to acces the index.html:
```http://localhost:8080/index.html```
