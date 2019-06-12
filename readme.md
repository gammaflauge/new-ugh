# new-ugh
New repo for tracking ugh -- the ultimate glitch history

## quick start
start python and envoy server with docker-compose:
```
docker-compose up --build
```

start client from `ugh-client`:
```
yarn serve --open  --port 8081
```
http://localhost:8081

## local dev
python setup
```
python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

If you make changes to `./common/ugh.proto`, you'll need to re-generate your grpc files:
```
cd server
python -m grpc_tools.protoc \
  -I.. --python_out=. \
  --grpc_python_out=. ../ugh.proto
```


## ugh-client notes
[This](https://medium.com/@aravindhanjay/a-todo-app-using-grpc-web-and-vue-js-4e0c18461a3e) article was very helpful in putting this together.

I used this [docker](https://github.research.chop.edu/gist/devinem4/eba2c71a5d311f0ec021475cc0d428c7) file to generate `ugh_pb.js` and `ugh_grpc_web_pb.js` (b/c I didnt want to install protoc on my local machine).

## about envoy
Need to use envoy server as middle man between js client to python server.
