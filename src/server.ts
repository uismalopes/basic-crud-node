import express from 'express';
import router from './router';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, ()=> console.log(`⚡ server is running on http://localhost:${PORT}`));