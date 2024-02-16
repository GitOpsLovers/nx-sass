import { GeneratorCallback, Tree, installPackagesTask } from '@nx/devkit';
import { logShowProjectCommand } from '@nx/devkit/src/utils/log-show-project-command';
import { initGenerator as jsInitGenerator } from '@nx/js';
import { Schema } from './schema';
import createFiles from './lib/create-files';
import createProject from './lib/create-project';
import normalizeOptions from './lib/normalize-options';
import setGeneratorDefaults from './lib/set-generator-defaults';

/**
 *
 */
export async function applicationGeneratorInternal(tree: Tree, schema: Partial<Schema>): Promise<GeneratorCallback> {
  const options = await normalizeOptions(tree, schema);

  await jsInitGenerator(tree, {
    ...options,
    tsConfigName: 'tsconfig.json',
    js: false,
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

export async function applicationGenerator(tree: Tree, schema: Partial<Schema>): Promise<GeneratorCallback> {
  return applicationGeneratorInternal(tree, {
    ...schema,
  });
}

export default applicationGenerator;
