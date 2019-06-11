<template>
  <div id="app">
    <b-jumbotron header="Ultimate Glitch History" lead="The A&R On-Call Incident Tracker">
      <span>Handy Resources:</span>
      <div class="btn-group" role="group" aria-label="Basic example">
        <b-btn
          variant="primary"
          href="https://wiki.chop.edu/display/DA/Enterprise+Analytics+and+Reporting+Operations+Guide "
          target="_"
        >Ops Guide</b-btn>
        <b-btn
          variant="secondary"
          href="https://at.chop.edu/is/service-desk/Blog/default.aspx"
          target="_"
        >Planned Downtimes</b-btn>
        <b-btn
          variant="warning"
          href="https://wiki.chop.edu/display/DA/On+Call+101+Guide "
          target="_"
        >On Call 101</b-btn>
        <b-btn
          variant="danger"
          href="https://rstudio-connect.chop.edu/content/384/"
          target="_"
        >ETL Activity Monitor</b-btn>
      </div>
    </b-jumbotron>
    <div>
      <b-alert show variant="warning">
        <h4>
          Alert! The UGH tool is having some difficulty communicating with REDCap. Please add new issues
          <a
            href="https://redcap.chop.edu/surveys/?s=Y7JKW3JWDX"
            target="_"
          >here</a> while we debug. You'll need to refresh this page to see them show up.
        </h4>
      </b-alert>
    </div>
    <IssueList/>
  </div>
</template>

<script>
import IssueList from "./components/IssueList.vue";

export default {
  name: "app",
  components: {
    IssueList
  }
};
</script>

<style>
</style>
