import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();
app.use(express.json())

const port = process.env.PORT3 || 3032;

const event = {
    "id": "string",
    "title": "string",
    "description": "string",
    "start-date": "string",
    "end-date": "string",
    "location": "string",
    "posted-by": "string",
    "resources": ["string"],
    "type": "string", // online or offline
    "club-tag": "string", // can be null
    "forum-tag": "string", // can be null
    // two tag cause any event can be from ieee club and for cse-dept-forum at the same time
}

    app.get('/events', (req, res) => {
        res.status(200).json([event]);
    });

    app.get('/events/:id', (req, res) => {
        res.status(200).json(event);
    });

    app.post('/createEvent', (req, res) => {
        const event = req.body;
        console.log(event);
        res.status(200).json(
            {
                status: 'success',
                message: 'Event created successfully',
            }
        );
    });

    app.post('/updateEvent', (req, res) => {
        const event = req.body;
        console.log(event);
        res.status(200).json(
            {
                status: 'success',
                message: 'Event updated successfully',
            }
        );
    });



    app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    }
);

