var sword = "true"

var player = {
	name          :"",
	life          :100,
	damage        :0, //attack points
	hasSniperRifle:true,
	rank          : ["General", "Knight", "Spartan"],


	Challenge : function(){
		console.log("Welcome player")
	},

	Fiteme : function(){
		console.log("Fight me "+ this.name+ "?");
	},

	attack  : function(target){
		console.log(this.name + " attacks " + target.name + " for " + this.damage);

		target.life -= this.damage;
	},

	Pickupsword  :  function(){
		console.log(this.name + " Picks up Sword ")
		
	},

	UseSwordAttack  :  function(target){
		console.log(this.name + " Uses sword on " + target.name + " doing " + this.damage + " Damage.")

		target.life -= this.swordDamage;
	}
};



var saul = Object.create(player);
saul.name="saul";
saul.life= 120;
saul.damage= 20;
console.log(saul.name);
console.log(saul.hasSniperRifle=false);


var Chris = Object.create(player);
Chris.name="Chris";
Chris.life=40;
Chris.damage=30;
Chris.defense=20;
Chris.swordDamage=40;
	console.log(Chris.name);
	console.log(Chris.life);
	console.log(Chris.damage);
	console.log(Chris.defense);
	console.log(Chris.swordDamage);

Chris.Challenge();
Chris.Fiteme();
Chris.attack(saul);
Chris.Pickupsword();
Chris.UseSwordAttack(saul);






