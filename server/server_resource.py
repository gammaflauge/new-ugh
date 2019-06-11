""" helper script for server.py """

from tinydb import TinyDB, Query
import redcap

from settings import REDCAP_TOKEN, REDCAP_URL

db = TinyDB('db.json')


def init_local_db(db):
    """ initialize the database with data from redcap """
    print("initializing db")
    db.purge()
    project = redcap.Project(REDCAP_URL, REDCAP_TOKEN)
    db.insert_multiple(project.export_records())
