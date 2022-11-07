import express from "express";
import cors from "cors";

const tweets = [];
const users = [];
let avatarUser = "";
let bodyTweet = {};
const app = express();

app.use(cors());
app.use(express.json());


app.post("/sign-up", (req, res) => {

    const { username, avatar } = req.body;

    const user = {
        username,
        avatar
    };

    avatarUser = user.avatar;

    if (!username || !avatar) {
        res.status(400).send("Todos os campos são obrigatórios");
        return
    } else {
        users.push(user);
        res.sendStatus(201);
    };

}
);

app.post("/tweets", (req, res) => {

    const { username, tweet } = req.body;

    const newTweet = {
        username,
        tweet
    };

    { tweets.length > 10 & tweets.splice(9, 1) };

    bodyTweet = { username: newTweet.username, avatar: avatarUser, tweet: newTweet.tweet };

    if (!username || !tweet) {
        res.status(400).send("Todos os campos são obrigatórios");
        return
    } else {
        tweets.unshift(bodyTweet);
        res.sendStatus(201);
    }
}
)
app.get("/tweets/:username", (req, res) => {

    const username = (req.params.username);
    const tweetUser = tweets.filter((tweetUser) => tweetUser.username === username);

    res.send(tweetUser)
})

app.get("/tweets", (req, res) => {
    res.send(tweets);

}
);

app.listen(5000, () => {
    console.log("Running in port 5000");
}
)