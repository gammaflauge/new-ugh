<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-alert :show="loadErrors.length > 0" variant="warning">
          <h4>Trouble connecting to REDCap. Is it down?</h4>
        </b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search"/>
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <!-- Main table element -->
    <b-table
      show-empty
      striped
      outlined
      stacked="md"
      :items="issues"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >
      <template slot="resolution_details" slot-scope="row">
        <pre>{{ row.item.resolution_details }}</pre>
        <pre v-if="row.item.folder">folder = {{ row.item.folder }}</pre>
        <pre v-if="row.item.workflow">workflow = {{ row.item.workflow }}</pre>
        <pre v-if="row.item.worklet">worklet = {{ row.item.worklet }}</pre>
        <pre v-if="row.item.session">session = {{ row.item.session }}</pre>
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows="issues.length"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0"
        />
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import { Empty, Issue } from "../ugh_pb.js";
import { UghClient } from "../ugh_grpc_web_pb.js";

const incidentTypeDict = {
  "1": "Informatica",
  "2": "SQL Server - Step 1",
  "3": "SQL Server - Step 2",
  "4": "Qlikview",
  "5": "Long Running Query",
  "7": "Bad Data",
  "8": "File Missing",
  "6": "Other",
  "9": "SQL Server - Other",
  "10": "Netezza Bounce"
};

export default {
  name: "IssueList",
  data: function() {
    return {
      issues: [],
      loadErrors: [],
      fields: [
        {
          key: "record_id",
          label: "Redcap ID",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "incident_datetime", label: "Incident Date" },
        { key: "resolver_name", label: "Resolver" },
        { key: "cnxn", label: "Cnxn?" },
        { key: "incident_type", label: "Type" },
        { key: "resolution_details", label: "Resolution Details" }
      ],
      currentPage: 1,
      perPage: 25,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null
    };
  },
  created: function() {
    this.client = new UghClient("http://localhost:8080", null, null);
    this.getIssues();
  },
  methods: {
    getIssues: function() {
      let emptyRequest = new Empty();
      var stream = this.client.getAllIssues(emptyRequest, {});
      var issueList = this.issues;
      var errorList = this.loadErrors;
      stream.on("data", function(response) {
        issueList.push({
          record_id: response.getRecordId(),
          incident_type: incidentTypeDict[response.getIncidentType()],
          incident_datetime: response.getIncidentDatetime(),
          incident_description: response.getIncidentDescription(),
          cnxn: response.getCnxn() === "1" ? "Y" : "N",
          workflow: response.getWorkflow(),
          worklet: response.getWorklet(),
          sessions: response.getSession(),
          folder: response.getFolder(),
          resolver_name: response.getResolverName(),
          time_to_resolve: response.getTimeToResolve(),
          resolution_details: response.getResolutionDetails()
        });
      });
      stream.on("status", function(status) {
        if (status.metadata) {
          console.log("Received metadata");
          console.log(status.metadata);
        }
      });
      stream.on("error", function(err) {
        console.log("Error code: " + err.code + ' "' + err.message + '"');
        errorList.push(err);
      });
      stream.on("end", function() {
        console.log("stream end signal received");
      });
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<style>
pre {
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
</style>