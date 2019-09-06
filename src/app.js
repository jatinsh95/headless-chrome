import express from 'express';
import bodyParser from 'body-parser';
import { generatePdf } from './api/controllers/generate-pdf';
import cors from 'cors';

function startServer() {
    const app = express();
    app.use(cors())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.post('/generatePDF', generatePdf)
    app.listen(42100, err => {
        if (err) {
            process.exit(1);
            return;
        }
        console.log('Listening', 42100)
    });
}

startServer();