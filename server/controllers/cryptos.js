var mongoose=require('mongoose');
var Crypto=mongoose.model('Crypto');
var User=mongoose.model('User');
var bcrypt = require('bcrypt-as-promised');


module.exports={
    showall:function(req,res){
        Crypto.find({},function(err, cryptofromDB){
        if(err){
            console.log('you fail');
            res.send(err);
        }else{
            res.json({crypto:cryptofromDB})
        }
        })
    },
    addNew:function(req,res){
        console.log('hit server for adding coin')
        console.log(req.body);
            var newCoin=new Crypto(req.body);
            newCoin.save(function(err){
                if(err){
                    console.log('something failed')
                    console.log(err);
                }else{
                    res.json(newCoin)
                }
            })
        },

    addNewTrade:function(req,res){

        Crypto.findOne({_id:req.body.coinid}, function(err, foundCrypto){
			if(foundCrypto!= null){
				console.log("found crypto in DB", foundCrypto);
                foundCrypto.pricethen=req.body.singlevalue;
                foundCrypto.totalthen=req.body.totalvalue;
                foundCrypto.owner=req.session.userId
                foundCrypto.save(function(err){
                    if(err){
                        console.log('cant save updates to crypto')
                        console.log(err)
                    }else{
                        console.log('crypto updated', foundCrypto)
                        console.log('now updating user')
                        User.findOne({_id:req.session.userId}, function(err, foundUser){
                            if(foundUser!=null){
                                console.log('found user in DB to update crypto on', foundUser);
                                foundUser.crypto.push(req.body.coinid);
                                foundUser.save(function(err){
                                    if(err){
                                        console.log('cant push crypto to user', err)
                                    }
                                    else{
                                        console.log('user updated with crypto', foundUser)
                                    }
                                })
                            }
                            else{
                                console.log('user not found', err)
                            }
                        })
                    }
                })
			}
            else{
                console.log('cant find crypto', err)
                res.json(err)
            }
		})
    },

    getPort:function(req,res){
        Crypto.find({owner:req.session.userId}, function(err, foundCryptos){
            if(foundCryptos!=null){
                console.log('foun cryptos for user', foundCryptos)
                res.json(foundCryptos)
            }else{
                console.log('cant find cryptos for user', err)
                res.json(err)
            }
        })
    },
    //USER FUNCTIONS

    register:function(req,res){
    console.log('hit server to register user');
        if(req.body.password!=req.body.passwordConfirm){
            res.json(0);
        }
        else{
            var newUser=new User(req.body);
            newUser.save(function(err){
                if(err){
                    console.log('something failed')
                    console.log(err);
                    res.json(1);
                }
                else{
                    console.log('successfully saved user')
                    req.session.userId=newUser._id;
                    res.json(newUser);
                }
            })
        }


    },
    login:function(req,res){
		console.log("hit Users.login in cryptos.js");
		User.findOne({email:req.body.email}, function(err, foundUser){
			if(foundUser != null){
				console.log("found user in DB");
				// Verify the passwords using bcrypt
				bcrypt.compare(req.body.password, foundUser.password)
				.then(function(data){
					console.log("passwords match");
					req.session.userId = foundUser._id;
                    res.json(foundUser)
					// Once logged in, add the user to session and redirect
				})
				.catch(function(error){
					console.log("passwords don't match");
					res.json(1);
				})
			}
            else{
                res.json(0)
            }
		})
    },
    logOff: function(req,res){
        console.log("id to destroy is", req.session_id)
        req.session.destroy(function(){
        console.log('request session destroyed, redirecting');
        res.json(true)
         });
    },
    getCurrent: function(req,res){
        User.findOne({_id: req.session.userId}).exec(function(err, foundUser){
                console.log('found user in session', foundUser)
                res.json(foundUser);
            })
        },

}