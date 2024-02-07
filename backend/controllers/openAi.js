const axios = require('axios');


const apiKey = process.env.OPENAI_API;

exports.generateStory = async(prompt, content) => {
  
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          messages: [{ role: "user", content: prompt }, { role: "assistant", content: content }],
            model: "gpt-3.5-turbo-0613", // Specify the model
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        });

        // console.log('Response:', response); // Log the response object

        const generatedText = response.data.choices[0].message.content.trim();
        return generatedText;
      

    } catch (error) {
      console.error("An error occurred:", error);
      return null;
    }
}
