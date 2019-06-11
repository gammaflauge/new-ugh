# new-ugh
New repo for tracking ugh -- the ultimate glitch history

## quick start
```
docker-compose up --build
```

http://localhost:8081/echotest.html

## local dev
python setup
```
python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

If you make changes to `./common/ugh.proto`, you'll need to re-generate your grpc files.

```
cd server
python -m grpc_tools.protoc \
  -I../common --python_out=. \
  --grpc_python_out=. ../common/ugh.proto
```

### run docker container with server
(if not using docker-compose)
```
docker build -t grpcmatt/python-server .
docker run -p 9090:9090 grpcmatt/python-server
```


## js client notes
All the js code for this comes straight from here: https://github.com/grpc/grpc-web  

## envoy
Need to use envoy server as middle man between js client to python server.
