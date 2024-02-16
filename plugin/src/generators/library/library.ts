import { GeneratorCallback, Tree, installPackagesTask } from '@nx/devkit';
import { logShowProjectCommand } from '@nx/devkit/src/utils/log-show-project-command';
import { initGenerator as jsInitGenerator } from '@nx/js';
import { Schema } from './schema';
import createFiles from './lib/create-files';
import createProject from './lib/create-project';
import normalizeOptions from './lib/normalize-options';
import setGeneratorDefaults from './lib/set-generator-defaults';

/**
 * Generate a new library.
 */
export async function libraryGeneratorInternal(tree: Tree, schema: Partial<Schema>): Promise<GeneratorCallback> {
  const options = await normalizeOptions(tree, schema);

  await jsInitGenerator(tree, {
    ...options,
    skipFormat: true,
  });

  createProject(tree, options);

  await createFiles(tree, options);

  setGeneratorDefaults(tree, options);

  return () => {
    installPackagesTask(tree);
    logShowProjectCommand(options.name);
  };
}

export async function libraryGenerator(tree: Tree, schema: Partial<Schema>): Promise<GeneratorCallback> {
  return libraryGeneratorInternal(tree, {
    ...schema,
  });
}

export default libraryGenerator;