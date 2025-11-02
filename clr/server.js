const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = {
    secret: 'mysupersecretstring',
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));

app.get('/register', (req, res) => {
    let { name = 'anonymous'} = req.query;
    req.session.name = name;
    console.log(req.session);
    res.send(name);
});

app.get('/hello', (req, res) => {
    res.send(`Hello, ${req.session.name}`);;
})



// app.get('/sessionCount', (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`Session count is ${req.session.count} times`);
// })

app.listen(3001, ()=> {
    console.log("listening");
})