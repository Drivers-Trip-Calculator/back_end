const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
