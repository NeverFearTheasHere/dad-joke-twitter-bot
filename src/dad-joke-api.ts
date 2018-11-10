import axios from 'axios';

const DAD_JOKE_API = process.env.DAD_JOKE_API;
if (!DAD_JOKE_API) {
  throw new Error('Missing required environment variable DAD_JOKE_API');
}

export const fetchRandomDadJoke = async () => {
  const dadJokeApiResponse = await axios.get(DAD_JOKE_API, {
    headers: {
      Accept: 'application/json',
      'User-Agent':
        "Thea's Twitter Bot (https://github.com/NeverFearTheasHere/dad-joke-twitter-bot)",
    },
  });
  return dadJokeApiResponse.data;
};
