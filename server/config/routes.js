var Cryptos=require('../controllers/cryptos.js');
var Users=require('../controllers/cryptos.js');
var Contact=require('../controllers/cryptos.js');
var path=require('path');

module.exports=function(app){

    app.get('/', Cryptos.showall);
    app.post('/addCoin', Cryptos.addNew);
    app.post('/addTrade', Cryptos.addNewTrade);
    app.post('/users', Users.register);
    app.post('/login', Users.login);
    app.get('/logout', Users.logOff);
    app.get('/currentuser',Users.getCurrent);
    app.get('/myport', Users.getPort);
    app.get('/delete/:id', Cryptos.deleteTrade);
    app.post('/messages',Contact.addMessage), 

    app.all("*", (request, response) => { response.sendFile(path.resolve("./public/dist/index.html")) });
    }