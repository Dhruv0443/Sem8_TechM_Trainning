import express from 'express';
import logger from './logger.js';
const app = express();
const PORT = 3000;
app.use(logger); //Register logger
app.get('/',(req,res)=>{
    res.send('Welcome to the home page!');
});
app.get('/about',(req,res)=>{
    res.send('About us');
});
app.use((req,res)=>{
    res.status(404).send('Not Found');
});
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
