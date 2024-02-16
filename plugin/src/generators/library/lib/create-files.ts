import { Tree, generateFiles, joinPathFragments } from '@nx/devkit';
import { NormalizedSchema } from './normalized-schema';

/**
 * Create files for the library
 */
export default async function createFiles(tree: Tree, options: NormalizedSchema) {
  const substitutions = {
    appName: options.name,
    style: 'scss',
  };

  generateFiles(
    tree,
    joinPathFragments(__dirname, '../files'),
    options.directory,
    substitutions,
  );
}
