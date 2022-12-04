import crypto from 'crypto';
import { readFile } from 'fs/promises';

const calculateHash = async () => {
    const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
    const file = await readFile(filePath)
    const hash = crypto.createHash('sha256', file).digest("hex");
    console.log(hash);
};

await calculateHash();