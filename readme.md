# Pattern Library Template

This template gets you set up with everything you need to get started on your own pattern library.

## Set up
In order to run this pattern library genrator correctly you'll need to follow a couple of steps first.

1. `$ gem install jekyll` — If you don't already have jekyll on your machine.
2. `$ npm install` — To get all the dependencies for grunt.
3. `$ bower install` — To get all the dependencies for bower.

## Running the project
Run `grunt` or `grunt serve` on the command line and the project will build itself, set up a server, open the index page, and wait for you to make changes.

## Building the project
Once you're happy with everything, run `grunt build` and it will compile everything ready for production. All the built files will go into the `web` directory, just point your server here and you're good to go.

Optionally, you can set your pattern library up on GitHub pages. I'll pull together a more tailored walkthrough but for now you can get the basic jist [here](https://help.github.com/articles/creating-project-pages-manually).

## What's included
We've included some basic stuff to get you started but feel free to rip anything out you don't need and add anything you do.

* Grunt
	* Autoprefixer
	* Clean
	* Connect
	* Copy
	* Htmlmin
	* Requirejs
	* Sass
	* Watch
	* Jekyll
	* Processhtml
	* Svgstore
	* Jit-grunt
	* Load-grunt-config

* Bower
	* Require.js
	* Modernizr
	* Jquery

* Jekyll

## Issues

If you come across any bugs or would like a feature implimented, [log an issue](https://github.com/sambeckham/pattern-library-template/issues/new); or—better yet—fix it and submit a pull request.