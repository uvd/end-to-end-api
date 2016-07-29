import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as firebase from 'firebase';

const app = express();
const firebaseApp = firebase.initializeApp({
    apiKey: process.env.E2E_FIREBASE_API_KEY,
    authDomain: "end-to-end-fm.firebaseapp.com",
    databaseURL: "https://end-to-end-fm.firebaseio.com",
    storageBucket: "end-to-end-fm.appspot.com",
});

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.get('/episodes', (req, res, next) => {

    firebase.database().ref('episodes').once('value').then(function(snapshot) {
        let episodes = snapshot.val();
        res.send(episodes);
    });
});


app.listen(8087);
