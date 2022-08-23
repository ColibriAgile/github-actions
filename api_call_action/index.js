const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');
const {getInput} = require("@actions/core");

try {
   const secretsInput = getInput('secrets', { required: true });
   console.log(secretsInput)

} catch (error) {
  core.setFailed(error.message);
}