
var fs = require('fs');
var output = [];

fs.readFileSync( process.argv[2] )
	.toString()
	.split( '\n' )
	.forEach( function( line ) {
		if ( line === '' ) return;
		var args = line.split(',');

		output.push( args[0] - (parseInt(args[0] / args[1]) * args[1]) );
	});

console.log( output.join( '\n' ) );
