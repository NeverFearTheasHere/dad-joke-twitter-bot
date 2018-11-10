import { Handler } from 'aws-lambda';
import { fetchRandomDadJoke } from './dad-joke-api';

export const dadJoke: Handler = async () => {
  let dadJoke;
  try {
    dadJoke = await fetchRandomDadJoke();
  } catch (error) {
    console.error('error when fetching random dad joke:', error);
    return {
      statusCode: 500,
      body: JSON.stringify(
        error instanceof Error ? { error: error.message } : error
      ),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(dadJoke),
  };
};
