<template>
  <div id="app">
    <HelloWorld msg="Hello from the UGH tool"/>
    <h3>issues</h3>
    <ul>
      <li
        v-for="issue in issues"
        v-bind:key="issue.issue_id"
      >{{ issue.issue_id }} - {{ issue.message }}</li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Empty, Issue } from "ugh_pb";
import { UghClient } from "ugh_grpc_web_pb";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data: function() {
    return {
      inputField: "",
      issues: []
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
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
