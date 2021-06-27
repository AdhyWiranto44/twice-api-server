const fs = require('fs');

const addLog = (req) => {
    fs.readFile('./logs/log_file.json', 'utf-8', (err, data) => {
        if (err) throw err;

        data = JSON.parse(data);
        data.unshift(
            {
                'time': Date.now().toString(),
                'request_method': req.method,
                'url': req.originalUrl
            }
        );
        data = JSON.stringify(data);

        fs.writeFile('./logs/log_file.json', data, () => {
            console.log('Time:', Date.now());
            console.log('Request method:', req.method);
            console.log('Url:', req.originalUrl);
        });
    });
}

module.exports = addLog;