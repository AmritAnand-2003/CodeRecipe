# CoderHub

Dokerizing Process:

1. docker image build --platform linux/amd64 -t online_judge:v1 .
2. docker container run -p 8000:8000 --name c1 c948c83e4877


3. docker login registry.e2enetworks.net -u amrit.anand+playwright@e2enetworks.com -p
   (Enter Password)

4. docker tag online_judge:v2 registry.e2enetworks.net/cr-149/online_judge:v2 

5. docker push registry.e2enetworks.net/cr-149/online_judge:v2     

 -----------------------------------------------------------------------------------------------
 On VM:
6. docker pull registry.e2enetworks.net/cr-149/online_judge@sha256:2fb90abc9e62c339b1a2a508c6e1baa3a2098a7b92b52d3c29861822dd2d50e8

7. docker run -p 8000:8000 5670a190e323
    It is image Id.