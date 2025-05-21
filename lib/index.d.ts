type Options = {
  /**
   * converts a certain file type in a directory and its subdirectory
   * not yet implemented
   */
  recursive?: boolean;
  deleteOriginal?: boolean;
};

declare module "node-docto" {
  /**
   * 
   * @param source path to source .doc or .docx file
   * @param output path and filename of the output .pdf file
   * @param options object with options
   */
  function wordToPdf(
    source: string,
    output: string,
    options?: Options
  ): Promise<string>;
    /**
   * 
   * @param source path to source .doc or .docx file
   * @param output path and filename of the output .pdf file
   * @param options object with options
   */
  function wordToText(
    source: string,
    output: string,
    options?: Options
  ): Promise<string>;
    /**
   * 
   * @param source path to source .xls or .xlsx file
   * @param output path and filename of the output .csv file
   * @param options object with options
   */
  function xlsToCsv(
    source: string,
    output: string,
    options?: Options
  ): Promise<string>;
}
