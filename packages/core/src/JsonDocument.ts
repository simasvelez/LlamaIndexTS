import { Document } from './Document';

/**
 * JsonDocument is a class that extends the Document class to handle JSON data.
 */
export class JsonDocument extends Document {
  jsonData: Object;

  /**
   * Constructor for the JsonDocument class.
   * @param {Object} jsonData - The JSON data for the document.
   */
  constructor(jsonData: Object) {
    super();
    this.jsonData = jsonData;
  }

  /**
   * Overrides the getText method of the Document class to return the JSON data.
   * @returns {string} The JSON data of the document.
   */
  getText(): string {
    return JSON.stringify(this.jsonData);
  }
}

