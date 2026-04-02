import express, {} from 'express';
const app = express();
app.get('/', (req, res) => {
    let x;
    res.status(200).json({ message: 'CI is working!' });
});
export default app;
