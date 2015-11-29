Package.describe({
    name: "deeeed:recaptcha",
    summary: "(timeout + configurable callbacks) Implementation of Google reCAPTCHA V2 for Meteor",
    git: "https://github.com/deeeed/Meteor-reCAPTCHA.git",
    version: "2.0.7",
    license: "MIT"
});

Package.onUse(function(api) {

    api.versionsFrom('1.0.2');

    api.use([
        'templating',
        'handlebars',
    ], 'client');
    api.use([
        'http',
    ], 'server');

    api.addFiles(['server/server.js'], 'server');
    api.addFiles(['client/client.html', 'client/client.js'], 'client');
    api.export && api.export('reCAPTCHA', ['client', 'server']);
});
