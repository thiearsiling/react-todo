const server = require("./config/server.config");
const connectDB = require("./config/db.config");
require("./config/routes")(server);

connectDB();
