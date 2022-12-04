import { existsSync } from 'fs';
import { writeFile } from 'fs/promises';

const create = async () => {
    const filePath = 'src/fs/files/fresh.txt';
    const isFileExist = existsSync(filePath);
    try {
        if (isFileExist){
            throw new Error('FS operation failed')
        }
        await (writeFile(filePath,'I am fresh and young'))
    } catch(error) {
        console.error(error);
    }
};

await create();