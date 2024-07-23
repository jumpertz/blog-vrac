const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4000

// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log(process.env.MONGO_URI, 'MongoDB connected...'))
// .catch(err => {
//   console.log('Error connecting to MongoDB', err);
//   process.exit(1);
// });


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))