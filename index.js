'use strict';

const debug = require('debug')('clova-speech');
const request = require('request-promise');

const API_URL = 'https://openapi.naver.com/v1/voice/tts.bin';

const speakers = ['mijin', 'jinho', 'clara', 'matt', 'yuri', 'shinji', 'meimei', 'liangliang', 'jose', 'carmen'];

class ClovaSpeechSynthesis {
    constructor(client_id, client_secret) {
        this.auth = {};
        this.auth.id = client_id;
        this.auth.secret = client_secret;
    }

    fetch(text, speaker = 'mijin', speed = '0') {
        return new Promise((resolve, reject) => {
            if (!speakers.includes(speaker)) {
                debug(`invalid speaker ${speaker}`)
                return reject('Invalid TTS speaker.');
            }

            if (speed < -5 || speed > 5) {
                debug(`invalid speed ${speed}`);
                return reject('Invalid speed. Speed must be between -5 to 5.');
            }

            const options = {
                'method': 'POST',
                'uri': API_URL,
                'headers': {
                    'X-Naver-Client-Id': this.auth.id,
                    'X-Naver-Client-Secret': this.auth.secret
                },
                'form': {
                    'text': text,
                    'speaker': speaker,
                    'speed': speed
                }
            };

            request(options)
                .then((body) => {
                    debug('receieved');
                    return resolve(body);
                })
                .catch(err => {
                    debug(err);
                    return reject(err);
                });
        });
    }
}

module.exports = ClovaSpeechSynthesis;