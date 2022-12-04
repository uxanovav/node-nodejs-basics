import { existsSync } from 'fs';
import { rm } from 'fs/promises';

const remove = async () => {
    const filePath = 'src/fs/files/fileToRemove.txt';
    const isError = !existsSync(filePath);
    try {
        if (isError){
            throw new Error('FS operation failed')
        }
        await rm(filePath);
    } catch (error) {
        console.error(error);
    }
};

await remove();