import { readNxJson, updateNxJson, type Tree } from '@nx/devkit';
import type { NormalizedSchema } from './normalized-schema';

/**
 * Set generator defaults
 */
export default function setGeneratorDefaults(tree: Tree, options: NormalizedSchema): void {
  const nxJson = readNxJson(tree);

  nxJson.generators = nxJson.generators ?? {};

  nxJson.generators['nx-sass:application'] = {
    ...(nxJson.generators['nx-sass:application'] || {}),
  };

  updateNxJson(tree, nxJson);
}
