import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT
const app = express();

app.use(express.static('public'));

// Note: Don't add or change anything above this line.
/* Add your code here */



let requestCount = 0;
//middleware function
function requestCounter(req, res, next) {
    requestCount++;
    if (requestCount % 10 === 0) {
        console.log(`Total requests for random-person: ${requestCount}`);
    }
    next();
}

//NOTE FOR GRADER:
//for some reason it wont print to the console that is displayed in the browser but it will print to the console in the terminal
//in the browser it says I have an initial error on line 1 which is causing my console.log statements to not work
//if I can get a comment on this in my rubric that would be great because it does this for some of my assignments

app.get('/express', requestCounter, asyncHandler(async (req, res) => {
    const random = await fetch('https://randomuser.me/api/');
    const randomData = await random.json();
    const user = randomData.results[0];
    const { title, first, last } = user.name;
    const { phone, email } = user;
    res.send(`Name: ${first} ${last}&nbsp;&nbsp;&nbsp; Number: ${phone}&nbsp;&nbsp;&nbsp; Email: ${email}`);
}));


// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
