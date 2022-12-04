import {Transform} from 'node:stream';
import {pipeline} from 'node:stream/promises';

const transform = async () => {

    const readStream = process.stdin;
    const writeStream = process.stdout;
    const reverse = new Transform({
        transform(chunk,_,callback) {
            callback(null,chunk.toString().split('').reverse().join(''));
        }
    })
    pipeline(readStream,reverse,writeStream);
};

await transform();