# Customer.Io integration for Meteor

This is an isopack!

(Which means, both client and server has the same API)

## Installation

    // for meteor 0.9
    meteor add meteorhacks:customer.io

    // for < meteor 0.9
    mrt add customer.io

## Usage

    // initialization

    var siteId = 'site_id';
    var token = 'the_token'; // only on the server
    var cio = CustomerIo.init(siteId, token);

    // identifing

    var userId = 'user_id';
    var email = 'user@email.com';
    var properties = {name: "My Name"};
    cio.identify(userId, email, properties, function(err, res, body) {
      // callback is only available on the server
    });

    // track

    var userId = 'user_id';
    var event = 'the_event';
    var properties = {name: "My Name"};
    cio.identify(userId, event, properties, function(err, res, body) {
      // callback is only available on the server
    });
