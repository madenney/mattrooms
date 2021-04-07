"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const PORT = 3001;
app.get('/api/*', (req, res) => {
    console.log("here?");
    res.send(JSON.stringify({ data: "data" }));
});
const buildPath = path_1.default.join(__dirname, "..", "client", "build");
app.use(express_1.default.static(buildPath));
app.use('*', (req, res) => {
    res.sendFile(path_1.default.join(buildPath, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map