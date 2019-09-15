import puppeteer from 'puppeteer';
import path from 'path';

export async function createPdf(htmlPath, pName) {
    const browser = await puppeteer.launch(
        {
            args: ['--start-fullscreen'],
            // headless: false
        }
    );
    const _path = path.join(__dirname, '../../', `${pName}/${pName}.pdf`)
    const page = await browser.newPage();
    try {
        await page.setViewport({ width: 1366, height: 768 });
        await page.goto(htmlPath, { timeout: 0, waitUntil: 'domcontentloaded' });
        await loadPage({ page, path: _path, format: 'A4' })
        await browser.close();
        return _path;
    } catch (ex) {
        throw ex;
    }
}

async function loadPage(object) {
    const { page, path, format } = object;
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                // await page.emulateMedia('screen');
                await page.pdf({ path, format, height: '720px', landscape: true, printBackground: true });
                resolve();
            } catch (ex) {
                reject(ex)
            }
        }, 1000);
    });
}