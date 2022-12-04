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
        })
    })

    try {
        await Promise.allSettled(promises).then((promisesResult) => {
            promisesResult.forEach(promiseResult => result.push(promiseResult.value));
        });
        console.log(result);
    } catch(error) {
        console.error(error);
    }
};

await performCalculations();