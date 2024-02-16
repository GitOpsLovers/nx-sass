import { ProjectConfiguration, Tree, addProjectConfiguration } from '@nx/devkit';
import { NormalizedSchema } from './normalized-schema';

/**
 * Create a new project in the workspace.
 */
export default function createProject(tree: Tree, options: NormalizedSchema) {
  const project: ProjectConfiguration = {
    name: options.name,
    targets: {
      build: {
        executor: '@nx/sass:compiler',
        outputs: ['{options.outputPath}'],
        options: {
          outputPath: 'dist',
          main: `${options.directory}/src/main.scss`,
        },
        configurations: {
          production: {},
          development: {},
        },
        defaultConfiguration: 'production',
      },
    },
    root: options.directory,
    projectType: 'library',
  };

  addProjectConfiguration(tree, options.name, project);
}
