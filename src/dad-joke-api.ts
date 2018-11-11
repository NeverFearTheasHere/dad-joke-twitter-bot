import axios from 'axios';
import { getConfigString } from './config';

const DAD_JOKE_API = getConfigString('DAD_JOKE_API');

type DadJokeApiResponseData = {
  id: string;
  joke: string;
  status: number;
};

export const fetchRandomDadJoke = async () => {
  const dadJokeApiResponse = await axios.get(DAD_JOKE_API, {
    headers: {
      Accept: 'application/json',
      'User-Agent':
        "Thea's Twitter Bot (https://github.com/NeverFearTheasHere/dad-joke-twitter-bot)",
    },
  });
  const data = dadJokeApiResponse.data as DadJokeApiResponseData;
  if (data.status === 200) {
    return data.joke;
  } else {
    throw new Error(
      `Unsuccessful response from Dad joke API: ${JSON.stringify(data)}`
    );
  }
};
