import { Tree, generateFiles, joinPathFragments } from '@nx/devkit';
import { NormalizedSchema } from './normalized-schema';

/**
 * Create files for the application
 */
export default async function createFiles(tree: Tree, options: NormalizedSchema) {
  const substitutions = {
    appName: options.name,
  };

  generateFiles(
    tree,
    joinPathFragments(__dirname, '../files/base'),
    'sasas',
    substitutions,
  );
}
