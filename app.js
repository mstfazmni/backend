// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cors({
    origin: ['*', 'https://mstfazmni.github.io']
  }));

app.options('*', cors());

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/register', (req, res) => {
    const { firstName, lastName, userId, address, status } = req.body;
    
    let fee;
    switch (status) {
        case 'student':
            fee = 10;
            break;
        case 'staff':
            fee = 50;
            break;
        case 'volunteer':
            fee = 0;
            break;
        default:
            fee = 0;
    }
    
    const response = {
        firstName: firstName,
        lastName: lastName,
        userId: userId,
        address: address,
        status: status,
        fee: fee
    };
    
    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
