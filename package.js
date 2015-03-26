Package.describe({
    summary: 'Collections with helpers on document, prototyping own classes of doc. Users with helpers. Saving doc',
    name: 'vazco:universe-collection',
    version: '1.0.1',
    git: 'https://github.com/vazco/meteor-universe-collection'
});

Package.on_use(function (api) {
    api.versionsFrom(['METEOR@1.0.4']);
    api.use(['templating', 'ui', 'blaze'], 'client');
    api.use([
        'underscore',
        'accounts-base',
        'mongo',
        'vazco:universe-utilities@1.0.1'
    ], ['client', 'server']);

    api.use(['matb33:collection-hooks@0.7.11'], ['client', 'server'], {weak: true});


    api.add_files([
        'lib/UniCollection.js',
        'lib/UniDoc.js',
        'lib/UniUsers.js',
        'lib/BasicSchema.js',
        'lib/UniSecure.js'
    ]);

    api.export([
        'UniCollection',
        'UniUsers'
    ]);
});
