import { GeneratorCallback, Tree, installPackagesTask } from '@nx/devkit';
import { logShowProjectCommand } from '@nx/devkit/src/utils/log-show-project-command';
import { initGenerator as jsInitGenerator } from '@nx/js';
import { Schema } from './schema';
import createFiles from './lib/create-files';
import createProject from './lib/create-project';
import normalizeOptions from './lib/normalize-options';
import setGeneratorDefaults from './lib/set-generator-defaults';

/**
 * Library generator
 *
 * @param tree The current file tree
 * @param schema The options provided to the generator
 *
 * @returns A generator callback
 */
export async function libraryGenerator(tree: Tree, schema: Partial<Schema>): Promise<GeneratorCallback> {
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

export default libraryGenerator;
