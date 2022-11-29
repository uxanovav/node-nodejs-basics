import { existsSync } from 'fs';
import { rename as fsRename } from 'fs/promises';

const rename = async () => {
    const wrongNameFilePath = 'src/fs/files/wrongFilename.txt';
    const properNameFilePath = 'src/fs/files/properFilename.md';
    const isError = !existsSync(wrongNameFilePath) || existsSync(properNameFilePath);
    try {
        if (isError){
            throw new Error('FS operation failed')
        }
        await fsRename(wrongNameFilePath,properNameFilePath);
    } catch(error) {
        console.error(error)
    }
};

await rename();