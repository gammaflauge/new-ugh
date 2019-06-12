""" helper script for server.py """

import redcap

from settings import REDCAP_TOKEN, REDCAP_URL


def pull_rc_data():
    """ initialize the database with data from redcap """
    db = redcap.Project(REDCAP_URL, REDCAP_TOKEN).export_records()
    return db
