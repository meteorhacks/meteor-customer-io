var request = Npm.require('request');

CustomerIo = function (siteId, apiToken) {
  this.siteId = siteId;
  this.apiToken = apiToken;
  this.endPoint = 'https://track.customer.io/api/v1/customers';
}

CustomerIo.prototype.identify = function(id, email, properties, callback) {
  properties = (properties)? _.clone(properties) : {};
  properties.email = email;
  var url = this.endPoint + "/" + id;
  request.put(url, {
    auth: this._getAuth(),
    headers: this._getHeaders(),
    json: properties
  }, callback);
};

CustomerIo.prototype.track = function(id, name, data, callback) {
  var payload = {
    name: name,
    data: data
  };
  var url = this.endPoint + "/" + id + "/events";
  request.post(url, {
    auth: this._getAuth(),
    headers: this._getHeaders(),
    json: payload
  }, callback);
};

CustomerIo.prototype._getAuth = function() {
  return {
    user: this.siteId,
    pass: this.apiToken
  };
};

CustomerIo.prototype._getHeaders = function() {
  return {
    'Content-Type': "application/json"
  };
};

CustomerIo.init = function(siteId, apiToken) {
  var cio = new CustomerIo(siteId, apiToken);
  return cio;
};

