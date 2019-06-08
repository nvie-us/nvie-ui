const axios = require('axios'),
  { ORCHESTRATOR_URL }= require('./config');

module.exports = {
  insert: (req, res) => {
    axios.post(`${ORCHESTRATOR_URL}/team/${req.session.team}/blueprint`, {
      envName: req.body.name,
      dockerBlueprint: {
        os: req.body.os,
        binaries: JSON.parse(req.body.binaries)
      },
      ghRepo: req.body.repository,
      dockerPort: req.body.dockerPort
    })
    .then((response) => {
      console.log(response.body);

      return res.json({ success: true });
    })
    .catch((err) => {
      console.log(err);

      return res.json({ success: false });
    })
  }
}