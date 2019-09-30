const core = require('@actions/core');
const execa = require('execa');

(async () => {
  try {
    const path = core.getInput('path');
    const prod = core.getInput('prod');
    const token = core.getInput('token');

    const args = [];

    if (path) {
      args.push(path);
    }

    if (prod) {
      args.push('--prod');
    }

    if (token) {
      args.push(`--token=${token}`);
    }

    // create the process
    const process = execa('now', args);

    // pipe output for live logs
    process.stdout.pipe(process.stdout);

    // wait for command to finish
    const result = await process;

    // exit if not successful
    if (result.exitCode !== -1) {
      core.setFailed(`Command failed with: ${result.stderr}`);
      return;
    }

    // extract URL from output
    const match = result.stdout.match(/Deployed to (http(?:s?):\/\/[\S]*)/);
    if (!match) {
      core.setFailed(`URL not found in stdout: ${result.stdout}`);
      return;
    }

    core.setOutput('url', match[1]);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
