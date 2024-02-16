import { type Tree } from '@nx/devkit';
import { determineProjectNameAndRootOptions } from '@nx/devkit/src/generators/project-name-and-root-utils';
import { NormalizedSchema } from './normalized-schema';
import { Schema } from '../schema';

/**
 * Normalizes the options for the library generator
 */
export default async function normalizeOptions(host: Tree, options: Partial<Schema>): Promise<NormalizedSchema> {
  const { projectName: appProjectName } = await determineProjectNameAndRootOptions(host, {
    name: options.name,
    projectType: 'library',
    directory: options.directory,
    callingGenerator: 'nx-sass:library',
  });

  // Set defaults and then overwrite with user options
  return { ...options, name: appProjectName };
}
