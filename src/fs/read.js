import { existsSync } from 'fs';
import { readFile } from 'fs/promises';

const read = async () => {
    const filePath = 'src/fs/files/fileToRead.txt';
    const isError = !existsSync(filePath);
    try {
        if(isError){
            throw new Error('FS operation failed')
        }
        const fileContent = await readFile(filePath,{encoding: 'utf8'});
        console.log(fileContent);
    } catch(error) {
        console.error(error);
    }
};

await read();