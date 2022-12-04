import {deflate} from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
    const filePath = 'src/zip/files/fileToCompress.txt';
    const compressedFilePath = 'src/zip/files/archive.gz'
    const readStream = createReadStream(filePath);
    const writeStream = createWriteStream(compressedFilePath);
    readStream.on('data', (data) => {
        deflate(data, (_,result) => writeStream.write(result));
    })
};

await compress();