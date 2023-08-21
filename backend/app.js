import express from 'express'
// import cors from 'cors'

const app = express();

// app.use(cors({
//     origin: "http://localhost:3000",
//     credentials: true,
// }));

app.get('/api/users', (req, res, next) => {
    console.log('getdd');
    res.send('hi');
});

app.get('/', (req, res, next) => {
    console.log('getdd');
    res.send('hi');
});




app.listen(8080);