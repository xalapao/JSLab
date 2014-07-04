var steps = require( './steps'), phone = require( './phone'), pee = require( './pee');

steps.make_cup_noodles( function() {
	steps.eat_noodles( function() {
		console.log('we are here');
		steps.throw_to_trash();
		console.log('we are done');
	});
});
phone.ring( steps.answer_call );
pee.explode( steps.go_to_toilet );
