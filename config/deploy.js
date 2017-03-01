/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    redis: {
      allowOverwrite: true,
      keyPrefix: 'react-deployer:index'
    },
    s3: {
      prefix: 'stampy-club'
    }
  };

  // turn off ember-cli-deploy-build which runs an ember build
  // the ember-cli-deploy-create-react-app dependency will run a create-react-app
  // build instead
  ENV.pipeline = {
    disabled: {
      build: true,
      redis: true
    }
  };

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3.accessKeyId = process.env.STAMPY_CLUB_AWS_KEY;
    ENV.s3.secretAccessKey = process.env.STAMPY_CLUB_AWS_SECRET;
    ENV.s3.bucket = 'stampyclub';
    ENV.s3.region = 'us-east-1';

    ENV['fastly-edge-dictionary'] = {
      dictionaryName: 'htmlstore', // id 3rJAYNgCrr0PkLHPyJZ2vk
      fastlyAPIKey: process.env.STAMPY_CLUB_FASTLY_API_TOKEN,
      serviceId: process.env.STAMPY_CLUB_FASTLY_SERVICE_ID
    };

    ENV['create-react-app'] = {
      publicURL: 'https://s3.amazonaws.com/stampyclub/stampy-club/'
    }
  }

  // if (deployTarget === 'production') {
  //   ENV.redis.url = process.env.REACT_DEPLOYER_REDIS_TOGO_URL;
  // }

  return ENV;
}
