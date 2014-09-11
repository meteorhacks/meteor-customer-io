Package.describe({
  "summary": "Customer.io Integration for Meteor",
  "version": "1.0.1",
  "git": "https://github.com/meteorhacks/meteor-customer.io.git",
  "name": "meteorhacks:customer.io"
});

Npm.depends({
  "request": "2.42.0"
});

Package.on_use(function(api) {
  configurePackage(api);
  api.export(['_cio'], 'client');
  api.export(['CustomerIo']);
});

Package.on_test(function(api) {
  configurePackage(api);
  api.use('tinytest');
  api.add_files('test/server.js');
});

function configurePackage(api) {
  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.0');
  }

  api.use(['underscore'], ['server', 'client']);

  api.add_files(['lib/server.js'], 'server');
  api.add_files(['lib/client.js'], 'client')
}
