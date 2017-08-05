const pkg = require('./package.json');

const Metalsmith = require("metalsmith");
const collections = require("metalsmith-collections");
const layouts = require("metalsmith-layouts");
const markdown = require("metalsmith-markdown");
const permalinks = require("metalsmith-permalinks");
const browsersync = require("metalsmith-browser-sync");

const dir = {

    base:   __dirname + "/",
    lib:    __dirname + "/lib/",
    source: "./src/",
    dest:   "./build/"
};

const templateConfig = {

    engine: "handlebars",
    pattern: "**/*.html",
    directory: dir.source + "template/",
    partials: dir.source + "partials/",
    default: "page.html"
};

Metalsmith(__dirname)

    .metadata({

        sitename: "My Static Site & Blog",
        siteurl: "http://example.com/",
        description: "It's about saying »Hello« to the world.",
        generatorname: "Metalsmith",
        generatorurl: "http://metalsmith.io/"
    })

    .source(dir.source + "/html")

    .destination(dir.dest)

    .clean(true)

    .use(markdown())

    .use(permalinks())

    .use(layouts(templateConfig))

    .use(browsersync({

        server: dir.dest,
        files: [dir.source + '**/*']
    }))

    .build(function(err) {

        if (err) throw new Error(err);
    }
);