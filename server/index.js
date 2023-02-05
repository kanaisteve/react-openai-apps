import { Configuration, OpenAIApi } from "openai";
import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser  from 'body-parser';
import cors from 'cors';

dotenv.config();

// Connect to OpenAI API
const configuration = new Configuration({ 
    organization: "org-tUnuzgDwQIZrE3hT0UA7cBg5",
    apiKey: process.env.OPENAI_API_KEY, // you wanna do this with environment key, in this case its just for testing purposes
});
const openai = new OpenAIApi(configuration);


// Create a simple express api that calls the function above
const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post('/generate-image', async (req, res) => {
    try {
        const { prompt } = req.body;
        console.log(prompt);
        const reponse = await openai.createImage({
            prompt: `${prompt}`,
            n: 1,
            size: "512x512",
        });
        res.json({
            image: reponse.data.data[0].url,
        })
    } catch (error) {
        console.error(error);
    }
});

// app.post('/question-and-answer', async (req, res) => {
//     try {
//         const { prompt } = req.body;
//         console.log(prompt);
//         const reponse = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: `${prompt}`,
//             temperature: 0,
//             max_tokens: 100,
//             top_p: 1,
//             frequency_penalty: 0.0,
//             presence_penalty: 0.0,
//             stop: ["\n"],
//         });

//         console.log(reponse.data.choices);
//         res.json({
//             data: reponse.data.choices[0].text,
//         })
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send({error: error.message})
//     }
// });

app.post('/question-and-answer', async (req, res) => {
    try {
        const object = req.body;
        console.log(object);
        if (typeof data === 'object') return data;
        if (typeof object === 'string') return JSON.parse(data);
        const reponse = await openai.createCompletion(object);

        console.log(reponse);
        res.json({
            data: reponse,
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send({error: error.message})
    }
});

app.post('/', async (req, res) => {
     try {
        const { message } = req.body;
        console.log(message)
        console.log(message, "message")
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${message}`,
            max_tokens: 100,
            temperature: 0.5,
        });

        res.json({
            message: response.data.choices[0].text,
        })

    } catch (error) {
        console.error(error);
    }
});

app.listen(port, () => {
    console.log(`Kanaitech ChaptGPT listening at http://localhost:${port}`)
});
