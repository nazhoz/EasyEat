import express from 'express';
import cors from 'cors';
// import bcyrpt from 'bcryptjs';
import { createRequire } from 'module'; // Needed to import JSON files in ES modules
const require = createRequire(import.meta.url); // Create a require function for JSON


const burgers = require('./json/product.json');


const app = express();
const port = 1145;
app.use(cors());
app.use(express.static('public'))

app.get('/burgers', (req, res)=>{
    res.status(200).json(burgers);
})

// const passwords = async ()=>{
//     const password = "Nias@123$";
//     const hashedPassword = await bcyrpt.hash(password, 10)
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcyrpt.compare("Nias@123$", hashedPassword);
//     console.log(isMatch)
// }

// passwords()

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
