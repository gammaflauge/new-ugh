"""The Python implementation of the GRPC echo server."""

from concurrent import futures
import time
import logging

import grpc

import ugh_pb2
import ugh_pb2_grpc

from server_resource import db, init_local_db

_ONE_DAY_IN_SECONDS = 60 * 60 * 24


class Ugh(ugh_pb2_grpc.UghServicer):

    def GetAllIssues(self, request, context):
        print(f"working on GetAllIssues (stream)...")
        for issue in [i for i in db if i['deleted'] != '1']:
            yield ugh_pb2.Issue(
                issue_id=int(issue['record_id']),
                message=issue['incident_description']
            )


def serve():
    init_local_db(db)

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
