import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { PORT } from './config';
import logger from './utils/logger';

const app = express();

app.use(helmet())
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    logger.info(`Running on http://localhost:${PORT} ✅`, {
        meta: { skipFile: true },
    });
})

