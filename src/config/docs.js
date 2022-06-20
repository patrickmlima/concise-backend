const path = require('path');
const YAML = require('yamljs');

const config = require('./env');

const docIndexFile = path.resolve(process.cwd(), 'api-docs', 'index.yaml');
console.log(`doc index file path: ${docIndexFile}`);

const docsFile = YAML.load(docIndexFile);

let serverUrl = docsFile.servers[0].url.replace('HOST_IP', config.app.ip)
serverUrl = serverUrl.replace('HOST_PORT', config.app.port);

docsFile.servers[0].url = serverUrl;

module.exports = docsFile;
