const express = require('express');
const app = express();
const passwordRoutes = require('./routes/passwordRoute');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/password', passwordRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
