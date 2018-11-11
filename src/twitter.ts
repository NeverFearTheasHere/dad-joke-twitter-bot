import Twit from 'twit';
import { getConfigString } from './config';

const TWITTER_CONSUMER_KEY = getConfigString('TWITTER_CONSUMER_KEY');
const TWITTER_CONSUMER_SECRET = getConfigString('TWITTER_CONSUMER_SECRET');
const TWITTER_ACCESS_TOKEN = getConfigString('TWITTER_ACCESS_TOKEN');
const TWITTER_ACCESS_TOKEN_SECRET = getConfigString(
  'TWITTER_ACCESS_TOKEN_SECRET'
);

const twitterClient = new Twit({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

export const tweet = async (message: string) => {
  return new Promise((resolve, reject) => {
    twitterClient.post(
      'statuses/update',
      { status: message },
      (error, data) => {
        if (error) {
          console.error(`Error calling twitter API: ${error.message}`);
          reject(error);
        } else {
          console.log(
            'Successfully posted a Tweet; recieved the following data from the Twitter API:',
            data
          );
          resolve(data);
        }
      }
    );
  });
};
