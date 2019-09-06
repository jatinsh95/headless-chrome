import puppeteer from 'puppeteer';
import path from 'path';

export async function generatePdf(req, res) {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(req.headers.origin, { waitUntil: 'networkidle2' });
    await page.pdf({ path: path.join(__dirname, 'page.pdf'), format: 'A4' });

    await browser.close();
    res.sendFile(path.join(__dirname, 'page.pdf'));
}