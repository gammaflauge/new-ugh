"""The Python implementation of the GRPC echo server."""

from concurrent import futures
import time
import logging

import grpc

import ugh_pb2
import ugh_pb2_grpc

_ONE_DAY_IN_SECONDS = 60 * 60 * 24


class Ugh(ugh_pb2_grpc.UghServicer):

    def GetAllIssues(self, request, context):
        print(f"working on GetAllIssues (stream)...")
        for i in range(1, 5):
            yield ugh_pb2.Issue(
                issue_id=i,
                message=f"im #{ i }"
            )
            time.sleep(.1)
            print(f"sent something for { i }")


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    ugh_pb2_grpc.add_UghServicer_to_server(Ugh(), server)
    server.add_insecure_port('[::]:9090')
    server.start()
    print("server started listening on port 9090")
    try:
        while True:
            time.sleep(_ONE_DAY_IN_SECONDS)
    except KeyboardInterrupt:
        server.stop(0)


if __name__ == '__main__':
    logging.basicConfig()
    serve()
