import { Handler } from 'aws-lambda';
import { fetchRandomDadJoke } from './dad-joke-api';
import { tweet } from './twitter';

export const dadJoke: Handler = async () => {
  try {
    const dadJoke = await fetchRandomDadJoke();
    await tweet(dadJoke);
    return {
      statusCode: 200,
      body: JSON.stringify({
        result: 'Successfully tweeted this Dad joke',
        dadJoke,
      }),
    };
  } catch (error) {
    console.error('Error when trying to tweet a dad joke:', error);
    return {
      statusCode: 500,
      body: JSON.stringify(
        error instanceof Error ? { error: error.message } : error
      ),
    };
  }
};
