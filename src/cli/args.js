const parseArgs = () => {
    let results = []
    const args = process.argv;
    args.forEach((arg,idx) => {
        if (arg.slice(0,2)=== '--'){
            results.push(`${arg.slice(2)} is ${args[idx + 1]}`)
        }
    });
    console.log(results.join(', '));
};

parseArgs();