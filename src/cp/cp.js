import {fork} from 'child_process';

const spawnChildProcess = async (args) => {
    const childProcessPath = 'src/cp/files/script.js'
    const childProcess = fork(childProcessPath, args);
};

spawnChildProcess();