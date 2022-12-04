const parseEnv = () => {
    let variables = [];
    for(let key in process.env){
        const prefix = key.split('_')[0];
        if (prefix === 'RSS'){
            variables.push(`${key}=${process.env[key]}`)
        }   
    }
    console.log(variables.join('; '));
};

parseEnv();