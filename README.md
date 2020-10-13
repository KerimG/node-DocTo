# Node-DocTo

## Support

This package's development is sponsored by [Task Force IT-Consulting GmbH](https://taskforce-it.de/).

[![Task Force IT-Consulting Logo](./assets/task-force-logo.png)](https://taskforce-it.de)

## About

This library is a wrapper around the [DocTo-Tool](https://github.com/tobya/DocTo).

From DocTo's README:

>Simple utility for converting a Microsoft Word Document '.doc' and Microsoft Excel '.xls' files to any other supported format such as .txt .csv .rtf .pdf.

## Motivation 

The main motivation was to convert .doc(x) files to PDF. While there are many tools out there that can do this, they often break the layout or design of the document, because they're using a different PDF renderer than Microsoft Word. DocTo uses the installed Microsoft Word and its PDF-renderer to create its output. As such, they end up looking exactly as you expect them to. 

There are two obvious drawbacks. 

1. You must have Microsoft Word/Excel installed on the system
1. Due to point 1, this tool isn't cross-platform


## Usage

Example: 
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


```
wordToText(source, output[, options])

parameters:
  source: path to source .doc or .docx file
  output: path and filename of the output .pdf file
  options: object with options

returns:
  Promise:
    reject: ({err, stderr})
    resolve: (stdout)
```

```
xlsToCsv(source, output[, options])

parameters:
  source: path to source .doc or .docx file
  output: path and filename of the output .pdf file
  options: object with options

returns:
  Promise:
    reject: ({err, stderr})
    resolve: (stdout)
```

The `options` object:

```js
const options = {
  // converts a certain file type in a directory and its subdirectory
  // not yet implemented
  recursive: false,  

  // deletes original file
  deleteOriginal: false,
  }
}