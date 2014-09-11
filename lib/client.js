_cio = _cio || [];
var a,b,c;a=function(f){return function(){_cio.push([f].
    concat(Array.prototype.slice.call(arguments,0)))}};b=["identify",
    "track"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
    var t = document.createElement('script'),
        s = document.getElementsByTagName('script')[0];

CustomerIo = function() {

}

CustomerIo.prototype.identify = function(id, email, properties) {
  properties = (properties)? _.clone(properties) : {};
  properties.id = id;
  properties.email = email;

  return window._cio.identify(properties);
};

CustomerIo.prototype.track = function(id, event, properties) {
  return window._cio.track(event, properties);
};

CustomerIo.init = _.once(function(siteId) {
  Meteor.startup(function() {
    var t = document.createElement('script'),
        s = document.getElementsByTagName('script')[0];
    t.async = true;
    t.id    = 'cio-tracker';
    t.setAttribute('data-site-id', siteId);
    t.src = 'https://assets.customer.io/assets/track.js';
    s.parentNode.insertBefore(t, s);
  });
  return new CustomerIo(_cio);
});