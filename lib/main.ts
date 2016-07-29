import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as firebase from 'firebase';
import * as socketIo from 'socket.io';
import * as http from 'http';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

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
        let episodes: e2e.IEpisode = snapshot.val();
        res.send(episodes);
    });

});



io.on('connection', function(socket) {

    socket.on('episode:played', (data) => {
        let id = data.id || JSON.parse(data).id;
        const playCountRef = firebase.database().ref(`episodes/${id}/play_count`);

        playCountRef.once('value').then((snapshot) => {
            let playCount: number = snapshot.val();
            playCount++;
            playCountRef.set(playCount);
        });

    });

});


app.listen(process.env.PORT || 8087);
io.listen(3000);
