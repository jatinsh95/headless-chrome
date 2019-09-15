import fs from 'fs';
import util from 'util'
import path from 'path';

const writeFile = util.promisify(fs.writeFile);

export async function updateHtml(data) {
    const _path = path.join(__dirname, '../../', `${data.projName}/index.html`);
    try {
        await writeFile(_path, data.html);
        return _path;
    } catch (ex) {
        throw ex;
    }
}