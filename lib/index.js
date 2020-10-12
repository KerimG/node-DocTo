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
  if (!output) Promise.reject('No output file supplied.');

  let command = `./docto.exe -f ${source} -O ${output} -T wdFormatPd`;

  if (options.recursive) command += ' -OX .pdf';
  if (options.deleteOriginal) command += ' -R true';

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) reject({ error, stderr });
      resolve({ stdout });
    });
  });
}

module.exports = {
  wordToPdf,
};
