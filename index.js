const express = require('express');
const productRouter = require('./route/product.route')
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(productRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: "resource not found"
    })
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}/products`)
});