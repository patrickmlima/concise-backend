const path = require('path');
const YAML = require('yamljs');
const { resolveRefs } = require('json-refs');

const { environment } = require('./env');

const readSwaggerFileAndLoadRefs = (mainYamlFileLocation) => {
  const mainYamlFileContent = YAML.load(mainYamlFileLocation);
  const options = {
    location: mainYamlFileLocation,
    loaderOptions: {
      processContent: (res, callback) => {
        callback(undefined, YAML.parse(res.text));
      },
    },
  };

  return resolveRefs(mainYamlFileContent, options).then(
    (results) => results.resolved,
    (err) => {
      logger.error(err.stack);
    },
  );
};

module.exports = {
  loadAPIDocs: async () => {
    const docIndexFile = path.resolve(process.cwd(), 'api-docs', 'index.yaml');
    console.log(`doc index file path: ${docIndexFile}`);

    const docsFile = await readSwaggerFileAndLoadRefs(docIndexFile);

    const serverUrl = docsFile.servers[0].url
      .replace('HOST_IP', environment.app.host)
      .replace('HOST_PORT', environment.app.port);

    docsFile.servers[0].url = serverUrl;
    return docsFile;
  },
};
