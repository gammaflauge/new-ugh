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
          variant="info"
          href="https://rstudio-connect.chop.edu/content/384/"
          target="_"
        >ETL Activity Monitor</b-btn>
        <b-btn
          v-b-popover.hover="'Ask Matt -- (devinem4@email.chop.edu)'"
          title="Need Access?"
          variant="danger"
          href="https://redcap.chop.edu/redcap_v9.0.3/ProjectSetup/index.php?pid=22810"
          target="_"
        >Redcap Issues DB</b-btn>
      </div>
      <p>
        <br>If you need to update or delete an incident, please do so via the
        <a
          href="https://redcap.chop.edu/redcap_v9.0.3/ProjectSetup/index.php?pid=22810"
          target="_"
        >Redcap Issues DB Admin Mode</a>.
      </p>
      <b-btn variant="success" href="https://redcap.chop.edu/surveys/?s=Y7JKW3JWDX" target="_">
        <b>+ Add a New Incident +</b>
      </b-btn>
      <br>(you'll need to refresh this page to see it)
    </b-jumbotron>
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
