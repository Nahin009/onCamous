import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();
app.use(express.json())

const port = process.env.PORT || 3030;

const singlePost = {
    "id": "string",
    "userName": "string",
    "title": "string",
    "description": "string",
    "images": ["string"],
    "attachments": ["string"],
    "likes": "number",
    "timestamp": "string",
    "commentsCount": "number",
    "authorId": "string",
    "tag": "string",
    "viewsCount": "number", // possible hole korbo
    "status": "string", // ongoing, completed, expired
    "anonymous": "boolean",
    "primaryCommentId": ["string"],
    "commentSection": "boolean",
    "notifications": ["date-time"],
}


const singleComment = {
    "id": "string",
    "postId": "string",  // either parentcommentid or postid will be null 
    "parentCommentId": "string",
    "userName": "string",
    "comment": "string",
    "timestamp": "string",
    "likes": "number",
    "commentsCount": "number"
}


    app.get('/posts', (req, res) => {
        
        const posts = [singlePost]

        res.status(200).json(posts);

    });

    app.get('/posts/:id', (req, res) => {
        res.status(200).json(
            {
                post: singlePost,
                comments: [singleComment]
            }
        );
    });


    app.post('/givePost', (req, res) => {
        const post = req.body;
        console.log(post);
        res.status(200).json(
                {
                    "status": "success",
                }
        );
    });




    app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    }
);

