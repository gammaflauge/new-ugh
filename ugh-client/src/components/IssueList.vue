<template>
  <b-container fluid>
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
        <!-- <pre> almooost works... -->
        {{ row.item.resolution_details }}
      </template>
      <template slot="infa_details" slot-scope="row">
        <div v-if="row.item.incident_type === 'Informatica'">
          <b-row>{{ row.item.workflow }}</b-row>
          <b-row>{{ row.item.worklet }}</b-row>
          <b-row>{{ row.item.session }}</b-row>
          <b-row>{{ row.item.folder }}</b-row>
        </div>
        <div v-else>n/a</div>
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
import { Empty, Issue } from "ugh_pb";
import { UghClient } from "ugh_grpc_web_pb";

export default {
  name: "IssueList",
  data: function() {
    return {
      issues: [],
      fields: [
        {
          key: "issue_id",
          label: "Redcap ID",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "message", label: "Incident Description" }
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
      stream.on("data", function(response) {
        console.log(
          "received " + response.getIssueId() + " : " + response.getMessage()
        );
        issueList.push({
          issue_id: response.getIssueId(),
          message: response.getMessage()
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