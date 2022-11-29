import { existsSync } from 'fs';
import { readdir } from 'fs/promises';

const list = async () => {
    const folderPath = 'src/fs/files';
    const isError = !existsSync(folderPath)
    try {
        if(isError){
            throw new Error('FS operation failed')
        }
        const fileNames = await readdir(folderPath);
        fileNames.forEach(fileName => console.log(fileName));
    } catch (error){
        console.error(error);
    }
};

await list();