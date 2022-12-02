import { info } from 'console';
import fs from 'fs/promises';

const buffer = await fs.readFile('file-system.mjs');

info(buffer.toString())

await fs.writeFile('tempt.txt', 'Bye Node JS')