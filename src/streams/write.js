import {createWriteStream} from 'fs';

const write = async () => {
    const filePath = 'src/streams/files/fileToWrite.txt';
    const writeStream = createWriteStream(filePath);
    try {
        process.stdin.on('data', (data) => {
            writeStream.write(data);
        })
    } catch(error) {
        console.error(error)
    }
};

await write();