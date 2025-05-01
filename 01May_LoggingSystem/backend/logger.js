import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk'; // use import instead of require
//Recreate _direname in ESm 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//Log file path
const logFile = path.join(__dirname,'logs.txt');
const logger = (req,res,next)=>{
    const start = Date.now(); //for response time
    res.on('finish',()=>{
        const duration = Date.now() - start;
        const log = `${new Date().toISOString()}| ${req.method} ${req.url}| ${res.statusCode}|${duration}ms\n`;
        //Console log with colors
        const methodColor = chalk.blue(req.method);
        const statusColor = res.statusCode<400? chalk.green(res.statusCode):chalk.red(res.statusCode);
        console.log(`${methodColor} ${req.url} ${statusColor}-${duration}ms`);
        //WRite log to file
        fs.appendFile(logFile,log,(err)=>{
            if(err) console.error('Failed to write log:',err);
        });
    });
    next();
};
export default logger;