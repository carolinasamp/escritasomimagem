import express from "express";
import path from "path";
import serverless from "serverless-http";
import { RoutesURL, SubRoutesURL } from "../routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../../dist")));

const serveIndexHtml = (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
};

app.get(RoutesURL.HOME, serveIndexHtml);

app.get(SubRoutesURL.GENERAL_SCHEDULE, serveIndexHtml);
app.get(SubRoutesURL.THEMED_TABLES, serveIndexHtml);

app.get(RoutesURL.SPEAKERS, serveIndexHtml);
app.get(RoutesURL.SHORT_COURSES, serveIndexHtml);

app.get(SubRoutesURL.ORGANIZING_COMMITTEE, serveIndexHtml);
app.get(SubRoutesURL.SCIENTIFIC_COMMITTEE, serveIndexHtml);

app.get(RoutesURL.SERVICE, serveIndexHtml);

app.get("*", serveIndexHtml);

app.listen(port, () => {
  console.log(`Servidor Express está rodando em http://localhost:${port}`);
});

module.exports = app;
module.exports.handler = serverless(app);
