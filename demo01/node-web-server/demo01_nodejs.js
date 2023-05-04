const { Configuration, OpenAIApi } = require("openai");
const http = require("http");

//configuration serveur web
const host = 'localhost';
const port = 8111;

//configuration API ChatGPT
const configuration = new Configuration({
	apiKey: "UTILISEZ VOTRE CLÉ API",
	basePath: "URL DE L'API",
});

const openai = new OpenAIApi(configuration);

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Human: À Quelle température doit-être mon huile pour faire des chips?",
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ["Human: ", "AI: "],
    });

    res.end(`{"message": "${response.data.choices[0].text.replace(/\r?\n|\r/g, '')}"}`);
});

server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});