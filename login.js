import express from 'express';
const app = express();
const port = process.env.PORT4 || 3033;

const users = [
    { 
        id: "ABH4dkjscnjcnjocndcd",
        email: '1905009@ugrad.cse.buet.ac.bd', 
        password: 'AB132'   //hashed password
    },
];

app.use(express.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);

    if (user && user.password === password) {
        res.status(200).json({
            status: 'success',
            message: 'Login successful',
            token: 'some_generated_token',  // token using JWT
        });
    } else {
        res.status(401).json({
            status: 'failure',
            message: 'Invalid email or password',
        });
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
