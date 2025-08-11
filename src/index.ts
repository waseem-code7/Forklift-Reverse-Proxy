import type { Express } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
const ReactBuildProxy = require("./proxy-servers/react.builds.proxy");


const app: Express = express();

app.use(ReactBuildProxy)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



console.log(
    "______ ___________ _   ___    ___________ _____ \n" +
    "|  ___|  _  | ___ | | / | |  |_   _|  ___|_   _|\n" +
    "| |_  | | | | |_/ | |/ /| |    | | | |_    | |  \n" +
    "|  _| | | | |    /|    \\| |    | | |  _|   | |  \n" +
    "| |   \\ \\_/ | |\\ \\| |\\  | |____| |_| |     | |  \n" +
    "\\_|    \\___/\\_| \\_\\_| \\_\\_____\\___/\\_|     \\_/  \n" +
    "                                                \n" +
    "                                                "
)

app.use('/', (req, res) => {

});

app.listen(7007,  () => {
  console.log(`Server running on port 7007`);
});

