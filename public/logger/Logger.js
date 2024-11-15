import url from 'url';

function logger(req, res, next) {
    let now = new Date();
    console.log(`${now.toLocaleString()} - localhost:3000${req.originalUrl}`, req.method)
    next();
}

export default logger;