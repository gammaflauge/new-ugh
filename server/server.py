"""The Python implementation of the GRPC echo server."""

from concurrent import futures
import time
import logging

import grpc

import ugh_pb2
import ugh_pb2_grpc

from server_resource import pull_rc_data

_ONE_DAY_IN_SECONDS = 60 * 60 * 24


class Ugh(ugh_pb2_grpc.UghServicer):

    def GetAllIssues(self, request, context):
        print(f"working on GetAllIssues (stream)...")
        db = pull_rc_data()
        for issue in reversed([r for r in db if r['deleted'] != '1']):
            yield ugh_pb2.Issue(
                record_id=int(issue['record_id']),
                incident_type=issue['incident_type'],
                incident_datetime=issue['incident_datetime'],
                incident_description=issue['incident_description'],
                cnxn=issue['cnxn'],
                workflow=issue['workflow'],
                worklet=issue['worklet'],
                session=issue['session'],
                folder=issue['folder'],
                resolver_name=issue['resolver_name'],
                time_to_resolve=issue['time_to_resolve'],
                resolution_details=issue['resolution_details']
            )


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
