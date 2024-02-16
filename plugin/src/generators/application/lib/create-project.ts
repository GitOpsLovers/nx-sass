import { ProjectConfiguration, Tree, addProjectConfiguration } from '@nx/devkit';
import { NormalizedSchema } from './normalized-schema';

/**
 * Create a new project in the workspace.
 */
export default function createProject(tree: Tree, options: NormalizedSchema) {
  console.log(options);
  const project: ProjectConfiguration = {
    name: options.name,
    targets: {
      build: {
        executor: 'sdsdsdsds',
        outputs: ['{options.outputPath}'],
        options: {
          outputPath: 'dsdsdsd',
          index: 'sdsdsdsds',
        },
        configurations: {
          production: {},
          development: {},
        },
        defaultConfiguration: 'production',
      },
    },
    root: options.directory,
    projectType: 'application',
  };

  addProjectConfiguration(tree, options.name, project);
}
