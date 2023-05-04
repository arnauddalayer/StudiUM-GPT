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
	//N'accepter que des données reçues en POST
	if (req.method === 'POST') {
		let body = '';
		req.on('data', chunk => {
			body += chunk.toString();
		});
		req.on('end', async () => {
			console.log(`Données reçues : ${body}`);
			const selectedText = JSON.parse(body).text;
			console.log(`Texte sélectionné reçu : ${selectedText}`);
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader("Content-Type", "application/json");
			res.writeHead(200);
			
			//Envoyer la question à ChatGPT
			const response = await openai.createCompletion({
				model: "text-davinci-003",
				prompt: `${selectedText}`,
				temperature: 0.7,
				max_tokens: 256,
				top_p: 1,
				frequency_penalty: 0,
				presence_penalty: 0,
				stop: ["Human: ", "AI: "],
			});
			
			console.log(`Réponse reçue de ChatGPT : ${response.data.choices[0].text.replace(/\r?\n|\r/g, '')}`);
			res.end(`{"message": "${response.data.choices[0].text.replace(/\r?\n|\r/g, '')}"}`);
		});
	// Si les données ne sont pas en POST, ne rien faire
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});