const axios = require('axios'),
  { ORCHESTRATOR_URL } = require('./config');

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
      return res.json({ success: true });
    })
    .catch((err) => {
      console.log(err);

      return res.json({ success: false });
    })
  },

  getAll: (req, res) => {
    axios.get(`${ORCHESTRATOR_URL}/team/${req.session.team}`)
    .then((response) => {
      return res.json(response.data);
    })
    .catch((err) => {
      console.log(err);

      return res.json({ success: false });
    })
  },

  provision: (req, res) => {
    console.log(req.body);
    axios.post(`${ORCHESTRATOR_URL}/team/${req.session.team}/environment`, {
      envName: req.body.envName,
      user: req.body.user
    })
    .then((response) => {
      return res.json({ success: true, details: response.data.environment });
    })
    .catch((err) => {
      console.log(err);

      return res.json({ success: false });
    })
  }
}