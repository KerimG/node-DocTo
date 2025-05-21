type Options = {
  /**
   * converts a certain file type in a directory and its subdirectory
   * @deprecated not yet implemented
   */
  recursive?: boolean;
  deleteOriginal?: boolean;
};

declare module "node-docto" {
  function wordToPdf(
    source: string,
    output: string,
    options?: Options
  ): Promise<string>;
  function wordToText(
    source: string,
    output: string,
    options?: Options
  ): Promise<string>;
  function xlsToCsv(
    source: string,
    output: string,
    options?: Options
  ): Promise<string>;
}
