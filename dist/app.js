import express, {} from 'express';
const app = express();
app.get('/', (req, res) => {
    // let x: any;
    res.status(200).json({ message: 'CI is working!' });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
export default app;
