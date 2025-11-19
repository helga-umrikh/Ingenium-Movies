import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootPath = path.resolve(__dirname, '../public');
const staticPath = path.join(rootPath, 'build');

app.use(express.static(staticPath));
app.use(express.static(rootPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(port, () => console.log('App is listening on port ' + port));
