import {parentPort, workerData} from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    let result;

    try {
        result = {status: 'resolved', data: nthFibonacci(workerData)}
    } catch {
        result = {status: 'error', data: null}
    }
    parentPort.postMessage(result);
};

sendResult();