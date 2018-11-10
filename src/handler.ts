import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

const DAD_JOKE_API = process.env.DAD_JOKE_API;

export const dadJoke: Handler = (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `The env variable DAD_JOKE_API is: ${DAD_JOKE_API}`,
      input: event,
    }),
  };

  cb(null, response);
};
