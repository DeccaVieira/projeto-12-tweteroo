import express from "express"
import cors from "cors"

const tweets = []
const users = []
let avatarUser = ""
let bodyTweet = {}
const app = express();
app.use(cors());
app.use(express.json())


app.post("/sign-up", (req, res) => {

    const { username, avatar } = req.body
    const user = {
        username,
        avatar
    };
    avatarUser = user.avatar
    users.push(user)


    res.send(user, () => "OK")
});




app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body
    const newTweet = {
        username,
        tweet
    };
    { tweets.length > 10 & tweets.splice(9, 1) }
    bodyTweet = { username: newTweet.username, avatar: avatarUser, tweet: newTweet.tweet }
    tweets.unshift(bodyTweet)

    res.send(tweets, () => "OK")
})

app.get("/tweets", (req, res) => {

    res.send(tweets);
});



app.listen(5000, () => {


})