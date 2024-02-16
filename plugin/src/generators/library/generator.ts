import { GeneratorCallback, Tree, installPackagesTask } from '@nx/devkit';
import { logShowProjectCommand } from '@nx/devkit/src/utils/log-show-project-command';
import { Schema } from './schema';
import addDependencies from './lib/add-dependencies';
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

    createProject(tree, options);

    await createFiles(tree, options);

    setGeneratorDefaults(tree, options);

    addDependencies(tree);

    return () => {
        installPackagesTask(tree);
        logShowProjectCommand(options.name);
    };
}

export default libraryGenerator;
