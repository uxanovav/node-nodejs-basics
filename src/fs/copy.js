import { existsSync } from 'fs';
import { cp, readdir } from 'fs/promises';

const copy = async () => {
   const folderPath = 'src/fs/files';
   const copyFolderPath = 'src/fs/files_copy';
   const isError = !existsSync(folderPath) || existsSync(copyFolderPath);
   try {
    if (isError){
        throw new Error('FS operation failed');
    }
    const fileNames = await readdir(folderPath)
    const promises = fileNames.map((fileName) => {
       return cp(`${folderPath}/${fileName}`,`${copyFolderPath}/${fileName}`);
    })
    await Promise.all(promises);
   } catch (error) {
    console.error(error);
   }
};

copy();