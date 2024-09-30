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

const app = express();
app.use(bodyParser.json())
app.use(cors())
const port = 3080;


app.post('/', async (req, res) =>  {
  const { message } = req.body;
  console.log(message);
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content:  `${message}` }],
    max_tokens: 50,
    temperature: 1,
  });
  res.json({
    message: response.choices[0].message.content,
  })
})


app.listen(port, () => {
  console.log(`Example app listen:${port}`)
});