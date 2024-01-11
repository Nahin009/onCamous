import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();
app.use(express.json())

const port = process.env.PORT2 || 3031;

const member = {
    "id": "string",
    "name": "string",
    "image": "string",
    "description": "string",
    "joined": "string",
    "role": "string",
    "achievements": [achievement],
    "clubs": [singleClub],      // not necessary though
}

const achievement = {
    "id": "string",
    "name": "string",
    "description": "string",
    "date": "string",
    "club": "string",
    "members": [member],
    "images": ["string"],
}

const singleClub = {
    "id": "string",
    "name": "string",
    "description": "string",
    "members": [member],
    // "events": ["string"],  // ??? 
    "achievements": [achievement],
}

   app.get('/clubs', (req, res) => {
        res.status(200).json([singleClub]);
   });

    app.get('/clubs/:id', (req, res) => {
        res.status(200).json(singleClub);
    });

    // app.get('/clubs/:id/members', (req, res) => {
    //     res.status(200).json([member]);
    // });
    
    // app.get('/clubs/:id/achievements', (req, res) => {
    //     res.status(200).json([achievement]);
    // });

    app.post('/clubs/:id/regestration', (req, res) => {
        const member = req.body.member;
        const TXID = req.body.TXID;
        console.log(member);
        console.log(TXID);
        res.status(200).json(
            {
                status: 'success',
                message: 'Member registered successfully',
            }
        );
    });


    



    app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    }
);

