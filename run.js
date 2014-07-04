var reader = require( './read');
var writer = require( './write');

reader.read( './source.txt', function(data) {
	// call back
	var changed = data.replace( 'I am', 'You are');
	reader.print( data);
	writer.write( './changed.txt', changed);
});