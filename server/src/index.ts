import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

const app = express();

app.use(helmet())
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('port running 3000')
})

