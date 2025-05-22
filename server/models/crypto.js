var mongoose=require('mongoose');
var bcrypt = require('bcrypt-as-promised');
var Schema=mongoose.Schema
'test
var CryptoSchema=new mongoose.Schema({
    name:String,
    date:String,
    time:String,
    amount:String,
    pricethen:String,
    totalthen:String,
    owner:{type:Schema.Types.ObjectId,ref: 'User'}
}, {timestamps:true})

var UserSchema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:{type: String, unique:true},
    password: {type: String},
    passwordConfirm:{type:String},
    crypto:[{type:Schema.Types.ObjectId, ref: 'Crypto'}]
},{timestamps:true});

UserSchema.pre('save', function(next){
	var user = this;
	bcrypt.hash(user.password, 10)
	.then(function(hashed_pw){
		user.password = hashed_pw;
		next();
	})
	.catch(function(error){
		console.log(error);
	})
})

var ContactSchema=new mongoose.Schema({
    email:String,
    message:String,
}, {timestamps:true});

var Crypto=mongoose.model('Crypto', CryptoSchema)
var User=mongoose.model('User', UserSchema)
var Contact=mongoose.model('Contact',ContactSchema)
