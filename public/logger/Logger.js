import url from 'url';
import fs from 'fs/promises'
import path from 'path';

function logger(req, res, next) {
    let now = new Date();
    let log = `${now.toLocaleString()}-localhost:3000${req.originalUrl}-${req.method}\n`;
    let __filePath = url.fileURLToPath(import.meta.url);
    let __dirname = path.dirname(__filePath);
    let logPath = path.join(__dirname, 'logs', `${now.getUTCDate()}_server_log_file.txt`);
    fs.appendFile(logPath, log, 'utf-8').then((res) => {
    }).catch((err) => {
        console.log(err);
    })
    next();
}

export default logger;