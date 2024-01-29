import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writableStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writableStream);

  return new Promise((resolve, reject) => {
    writableStream.on('finish', () => {
      resolve();
    });

    writableStream.on('error', (err) => {
      reject(err);
    });
  });
};

await write();
