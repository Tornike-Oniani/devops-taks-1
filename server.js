const express = require('express');

const customerRouter = require('./routes/customerRoutes');

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/v1/customers', customerRouter);

app.get('/', (req, res) => {
  res.send(
    '<h2>Please use following route to work with customers: "http://localhost:5000/api/v1/customers/"</h2>'
  );
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up on port ${port}`));
