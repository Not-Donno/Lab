const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my laptop store</h1> <p>Using Express</p>');
});

app.get('/gaming', (req, res) => {
    res.send('<h1>Gaming Laptops</h1> <p>Check out our selection of high-performance gaming laptops!</p>');
});
app.get('/work', (req, res) => {
    res.send('<h1>Work Laptops</h1> <p>Find the perfect laptop for your professional needs!</p>');
});
app.get('/api/features', (req, res) => {
    res.json({ features: ['Fast Performance', 'Long Battery Life', 'Lightweight'] });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});