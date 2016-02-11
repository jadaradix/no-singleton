# no-singleton

This demo shows that CommonJS' dependency resolution - present in Browserify as well - prevents duplicate "copies" using require(). Problems arise when you do require("...")() - there are really very few cases when that is necessary (and a singleton would be needed as a result - not because singletons are necessary, but because of ()).

Try it like this:

  	node index.js

Try it on the frontend:

  	cd frontend;
  	. browserify.sh;
  	open index.html
