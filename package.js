Package.describe({
  "summary": "Customer.io Integration for Meteor",
  "version": "1.0.1",
  "git": "https://github.com/meteorhacks/meteor-customer.io.git",
  "name": "meteorhacks:customer.io"
});

Package.on_use(function(api) {
  configurePackage(api);
  api.export(['_cio'], 'client');
  api.export(['CustomerIo']);
});

function configurePackage(api) {
  if(api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.0');
  }
  
  api.use(['underscore'], ['server', 'client']);

  api.add_files(['server.js'], 'server');
  api.add_files(['client.js'], 'client')
}
