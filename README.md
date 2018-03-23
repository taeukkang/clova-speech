# clova-speech
The [Clova Speech Synthesis](https://developers.naver.com/docs/clova/api/CSS/API_Guide.md#Overview) API for Node.js

## Installation
```
$ npm install --save clova-speech
```

## Usage
You'll need to [register](https://developers.naver.com/docs/clova/api/CSS/API_Guide.md#Overview) your app with Naver first.
Get your client ID and secret, and make sure to *keep it secret*!

```
const ClovaSpeech = require('clova-speech');
const clova = new ClovaSpeech("CLIENT_ID", "CLIENT_SECRET");

clova.fetch("안녕하세요!");
```

## API
### new ClovaSpeechSynthesis(client_id, client_secret)
Creates an `instantce` of CSS (ClovaSpeechSynthesis).

#### client_id
Type: `string`
Accepts CSS client ID.

#### client_secret
Type: `string`
Accepts CSS client secret.

### .fetch(text, [speaker], [speed])
#### text
Type: `string`
Text to synthesize. Max 5000 characters allowed. Use `.\n` to separate sentences and `,` to pause.

#### speaker
Type: `string`
A voice to synthesize text. Default is `mijin`. Find out available speakers [here](https://developers.naver.com/docs/clova/api/CSS/API_Guide.md#RequestParameter).

#### speed
Type: `integer`
Speed of voice playback. Integer must be between -5 to 5. -5 is 0.5 faster, and 5 is 0.5 slower. 0 is normal speed. 


## License
[MIT](https://github.com/taeukme/clova-speech/blob/master/LICENSE.md)