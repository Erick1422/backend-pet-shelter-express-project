import app from "./server.js";
const port = 3000;

/* Server setup */
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});