# Node-DocTo

## Support

This package's development is sponsored by Task Force IT-Consulting GmbH.

[![Task Force IT-Consulting Logo](./assets/task-force-logo.png)](https://taskforce-it.de)

## Motivation 

This is library to wrap around the [DocTo-Tool](https://github.com/tobya/DocTo). The main motivation was to convert .doc(x) files to PDF. While there are many tools out there that can do this, they often break the layout or design of the document, because they're using a different PDF renderer than Microsoft Word is. DocTo uses the installed Microsoft Word and its PDF-renderer to create the PDFs. As such, they end up looking exactly as you expect to. 

This two obvious drawbacks. 

1. You must have Microsoft Word/Excel installed on the system.
1. Due to point 1, this tool isn't cross-platform.


## Usage

Currently, only the features to convert `.doc(x)` files to `.pdf` is implemented.

```js
const { wordToPdf } = require('node-docto');

wordToPdf('./input.docx', './output.pdf', {deleteOriginal: true})
  .then(stdout => console.log(stdout));
```

## API Reference

```
wordToPdf(source, output[, options])

parameters:
  source: path to source .doc or .docx file
  output: path and filename of the output .pdf file
  options: object with options

returns:
  Promise:
    reject: ({err, stderr})
    resolve: (stdout)
```