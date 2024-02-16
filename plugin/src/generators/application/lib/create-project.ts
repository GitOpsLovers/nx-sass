import { ProjectConfiguration, Tree, addProjectConfiguration } from '@nx/devkit';
import { NormalizedSchema } from './normalized-schema';

/**
 * Create a new project in the workspace.
 */
export default function createProject(tree: Tree, options: NormalizedSchema) {
  const project: ProjectConfiguration = {
    name: options.name,
    projectType: 'application',
    root: options.directory,
    tags: options.parsedTags,
    targets: {
      build: {
        executor: '',
        outputs: ['{options.outputPath}'],
        options: {
          outputPath: '',
          index: '',
        },
        configurations: {
          production: {},
          development: {},
        },
        defaultConfiguration: 'production',
      },
    },
  };

  addProjectConfiguration(tree, options.name, project);
}
