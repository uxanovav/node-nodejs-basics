import {createReadStream} from 'fs'

const read = async () => {
   const filePath = 'src/streams/files/fileToRead.txt';
   const readStream = createReadStream(filePath);
   try {
     readStream.on('readable',()=> {
        let result = '';
        let chunk;

        while((chunk = readStream.read()) !== null){
            result += chunk.toString();
        }
        process.stdout.write(result);
       })
   } catch(error) {
    console.error(error);
   }
};

await read();