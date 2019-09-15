import { createPdf } from "../../service/puppeteer-util";
import { updateHtml } from "../../service/update-html";

export async function generatePdf(req, res) {
    try {
        const path = await updateHtml(req.body);
        const _path = await createPdf(path, req.body.projName);
        res.sendFile(_path);
    } catch (ex) {
        res.send(ex);
    }
}