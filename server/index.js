const { Configuration, OpenAIApi } = require("openai");
const expres = require('express')
// add body parser and cors to express
const bodyParser = require('body-parser')
const cors = require('cors')

// Connect to OpenAI API
const configuration = new Configuration({ 
    organization: "org-tUnuzgDwQIZrE3hT0UA7cBg5",
    apiKey: process.env.OPENAI_API_KEY, // you wanna do this with environment key, in this case its just for testing purposes
});
const openai = new OpenAIApi(configuration);


// Create a simple express api that calls the function above
const app = expres()
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
