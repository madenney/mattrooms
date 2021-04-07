import express from 'express';
import path from 'path';
const app = express();
const PORT = 3001;


app.get('/api/*', (req,res) => {
    console.log("here?")
    res.send(JSON.stringify({data: "data" }))
})


const buildPath = path.join(__dirname, "..","client","build")
app.use(express.static(buildPath))
app.use('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
