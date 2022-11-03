import express from "express" //OK
import cors from "cors" //Ok


const app = express(); //OK
app.use(cors());//OK
app.get("/tweets", (req, res) => {
const tweets = 
        [{
            username: "bobesponja",
                avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
              tweet: "eu amo o hub"
        },
            {
                username: "bobesponja",
                    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
                  tweet: "eu amo o hub"
            },
            {
                username: "bobesponja",
                    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
                  tweet: "eu amo o hub"
            }
        ]
    


    res.send(tweets);
});

app.listen(5000,()=>{
    
    console.log("Rodando")
})