 ![Node.js CI](https://github.com/nodeshift-starters/nodejs-rest-http-ts/workflows/ci/badge.svg)
 [![Coverage Status](https://coveralls.io/repos/github/nodeshift-starters/nodejs-rest-http-ts/badge.svg?branch=main)](https://coveralls.io/github/nodeshift-starters/nodejs-rest-http-ts?branch=main)

## Running The Example

You can run this example as node processes on your localhost, as pods on a local
[code-ready-containers](https://developers.redhat.com/products/codeready-containers/overview) installation.

### Localhost

To run the basic application on your local machine, just run the commands bellow:

```
$ npm install
$ npm start
```

If you want debug information, you can set `DEBUG` environment variable and start the application:

```
$ DEBUG=* npm start
```

This will launch the application on port 8080.

### CodeReady Containers

CRC should be started, and you should be logged in with a currently
active project. Then run the `npm run openshift` command.

```sh
$ crc setup # Set-up the hypervisor
$ crc start # Initialize the openshift cluster
$ oc login -u developer # Login
$ oc new-project my-example-project # Create a project to deploy to
$ npm run openshift # Deploys the example app
```