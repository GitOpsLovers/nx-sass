import { type Tree } from '@nx/devkit';
import { determineProjectNameAndRootOptions } from '@nx/devkit/src/generators/project-name-and-root-utils';
import { NormalizedSchema } from './normalized-schema';
import { Schema } from '../schema';

/**
 * Normalizes the options for the application generator
 */
export default async function normalizeOptions(host: Tree, options: Partial<Schema>): Promise<NormalizedSchema> {
  const { projectName: appProjectName } = await determineProjectNameAndRootOptions(host, {
    name: options.name,
    projectType: 'application',
    directory: options.directory,
    callingGenerator: 'nx-sass:application',
  });

  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  // Set defaults and then overwrite with user options
  return { ...options, name: appProjectName, parsedTags };
}
