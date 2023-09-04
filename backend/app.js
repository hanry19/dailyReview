import express from 'express';
import pg from 'pg';
const {Client} = pg;


const app = express();


const client = new Client({
    user: 'talk',
    host: 'localhost',
    database: 'laundrytalk',
    password: '1111',
    port: 5432
})


client.connect(err => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('success!')
    }
});

const a = await client.query('select * from test')
console.log(a)



app.get('/api/users', (req, res, next) => {
    console.log('getdd');
    res.send('hi');
});

app.get('/', (req, res, next) => {
    console.log('getdd');
    res.send('hi');
});


app.listen(8080);