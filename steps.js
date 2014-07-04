module.exports = {
	
	cup_noodles: 'This is frozen cup noodles',

	make_cup_noodles: function( callback) {
		var self = this;
		console.log( 'start making noodles');

		setTimeout( function() {
			self.cup_noodles = self.cup_noodles === 'This is frozen cup noodles' ? 'Noodle ready' : self.cup_noodles;

			console.log( self.cup_noodles);
			callback && callback.call(this);
		}, 3000);
	},

	answer_call: function() {
		var action = this.ringing == 'Ringing...' ? 'I answered the call' : 'I missed the call';

		console.log( action );
	},

	go_to_toilet: function() {
		this.pants = 'off';
	},

	eat_noodles: function( callback){
		var self = this;

		setTimeout( function(){
			self.cup_noodles = self.cup_noodles === 'Noodle ready' ? 'I finished' : 'I ate nothing...';

			console.log(self.cup_noodles);
			callback && callback.call(this);
		}, 5000);
	},

	throw_to_trash: function(){
		var self = this;

		setTimeout( function(){
			self.cup_noodles = self.cup_noodles === 'I finished' ? 'Done in trash' : 'Wasted';
			console.log( self.cup_noodles);
		}, 30);
	}
};