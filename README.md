# no-singleton

This demo shows that CommonJS' dependency resolution - present in Browserify as well - prevents duplicate "copies" using require(). Problems arise when you do require("...")() - there are extremely few cases when that is necessary (and you would need a singleton as a result - not because singletons are necessary, but because you're doing that).

Try it like this:

  	node index.js

Try it on the frontend:

  	cd frontend;
  	. browserify.sh;
  	open index.html