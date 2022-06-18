const express = require("express");
const product = require("./api/productApi");
const app = express();

const PORT = 1000;

app.use("/api/product", product);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
