import {Worker} from 'worker_threads';
import {cpus} from 'os';

const performCalculations = async () => {
    const cores = cpus();
    const workerPath = './src/wt/worker.js';
    let result = [];

    const promises = cores.map( async (_,index) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, {
                workerData: 10 + index
            })
            worker.on('message', resolve);
            worker.on('error', reject);
        }).then(value => result.push(value));
    })

    try {
        await Promise.all(promises);
        console.log(result.sort((a,b)=> a.data - b.data));
    } catch(error) {
        console.error(error);
    }
};

await performCalculations();