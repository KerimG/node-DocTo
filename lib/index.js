const path = require('path');
const exec = require('child_process').execFile;

function wordToPdf(
  source = null,
  output = null,
  options = {
    recursive: false,
    deleteOriginal: false,
  }
) {
  if (!source) return Promise.reject('No source file supplied.');
  if (!output) return Promise.reject('No output file supplied.');

  const args = ['-f', source, '-O', output, '-T', 'wdFormatPDF'];
  const command = `${path.join(__dirname, 'docto.exe')}`;

  if (options.recursive) args.push('-OX', '.pdf');
  if (options.deleteOriginal) args.push('-R', 'true');

  return new Promise((resolve, reject) => {
    exec(command, args, (error, stdout, stderr) => {
      if (error) reject({ error, stderr });
      resolve({ stdout });
    });
  });
}

module.exports = {
  wordToPdf,
};
