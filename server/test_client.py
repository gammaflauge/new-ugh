from __future__ import print_function

import random

import grpc

import ugh_pb2
import ugh_pb2_grpc


def run_unary():
    with grpc.insecure_channel('localhost:9090') as channel:
        stub = ugh_pb2_grpc.UghStub(channel)
        response = stub.GetAllIssues(ugh_pb2.Empty())
        print(
            f"received: { response.incident_datetime }, id = { response.record_id }")


def run_streaming():
    with grpc.insecure_channel('localhost:9090') as channel:
        stub = ugh_pb2_grpc.UghStub(channel)
        for response in stub.GetAllIssues(ugh_pb2.Empty()):
            print(
                f"received: { response.incident_datetime }, id = { response.record_id }")


if __name__ == '__main__':
    run_streaming()
