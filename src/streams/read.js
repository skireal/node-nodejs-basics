import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const readableStream = fs.createReadStream(filePath);

  return new Promise((resolve, reject) => {
    readableStream.on('data', (chunk) => {
      process.stdout.write(chunk);
    });

    readableStream.on('end', () => {
      resolve();
    });

    readableStream.on('error', (err) => {
      reject(err);
    });
  });
};

await read();
