import OpenAIApi from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const openai = new OpenAIApi({
  organization: "org-djk1VwNbXe9onMW5t1GiLnYg",
  project: "proj_whVRzk1nMh6M0DC5VWuzw55S",
  apiKey: "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",
});

// const configuration = new Configuration({
//   organization: "org-djk1VwNbXe9onMW5t1GiLnYg",
//   apiKey: "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",
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