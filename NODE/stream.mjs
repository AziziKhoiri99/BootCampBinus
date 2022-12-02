import fs from 'fs';

const writer = fs.createWriteStream('target.log');

writer.write('Azizi\n')
writer.write('Khoiri\n')
writer.write('U.F\n')
writer.end();

const reader = fs.createReadStream('target.log');
reader.addListener('data', (data) => {
    console.info(data.toString());
})