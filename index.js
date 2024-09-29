import OpenAIApi from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAIApi({
  organization: "org-djk1VwNbXe9onMW5t1GiLnYg",
  project: "proj_whVRzk1nMh6M0DC5VWuzw55S",
  apiKey: process.env.OPENAI_API_KEY,
});

// const configuration = new Configuration({
//   organization: "org-djk1VwNbXe9onMW5t1GiLnYg",
// });

const app = express();
app.use(bodyParser.json())
app.use(cors())
const port = 3080;

// app.get('/', (req, res) => {
//   res.send("Hi")
// })

app.post('/', async (req, res) =>  {
const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "What is red" }],
    max_tokens: 50,
    temperature: 1,
  });
  console.log(response.choices[0].message.content);
  res.json({
    data: response.data
    // data: message,
    // message: response.choices[0].message.content,
  })
})

// async function pressPrompt() {

// }

// pressPrompt();

app.listen(port, () => {
  console.log(`Example app listen:${port}`)
});