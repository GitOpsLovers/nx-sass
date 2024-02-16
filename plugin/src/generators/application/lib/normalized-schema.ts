import { Schema } from '../schema';

/**
 * Normalized schema for the application generator
 */
export interface NormalizedSchema extends Schema {
  directory: string;
}
