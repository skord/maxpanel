# Maxpanel-ember

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Just want to look at it?

There's a demo environment you can try yourself if you have docker-compose installed. Just clone this repo: https://github.com/skord/box and docker-compose up.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

In production mode, Maxpanel expects a few things:

* Maxpanel runs at the site root.
* API Requests to MaxInfo are prefixed with /api on the same host as Maxpanel
* CORS headers are added to the API responses.  

[An example nginx config](https://github.com/skord/box/blob/master/maxpanel/default.conf) is provided in the Box repo. In that config, Maxpanel lives in /app and the /api/ location proxy passes to MaxInfo and adds the CORS headers. 


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
