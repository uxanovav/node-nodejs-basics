import {inflate} from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const decompress = async () => {
    const filePath = 'src/zip/files/fileToCompress.txt';
    const compressedFilePath = 'src/zip/files/archive.gz'
    const readStream = createReadStream(compressedFilePath);
    const writeStream = createWriteStream(filePath);
    readStream.on('data', (data) => {
        inflate(data, (_,result) => writeStream.write(result));
    })
};

await decompress();