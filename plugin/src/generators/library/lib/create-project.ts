import { ProjectConfiguration, Tree, addProjectConfiguration } from '@nx/devkit';
import { NormalizedSchema } from './normalized-schema';

/**
 * Create a new project in the workspace.
 *
 * @param tree The current file tree
 * @param options The options provided to the generator
 */
export default function createProject(tree: Tree, options: NormalizedSchema): void {
    const project: ProjectConfiguration = {
        name: options.name,
        targets: {
            build: {
                executor: 'nx-sass:compiler',
                outputs: ['{options.outputPath}'],
                options: {
                    outputPath: 'dist',
                    main: `libs/${options.directory}/src/main.scss`,
                    sourceMap: true,
                },
                configurations: {
                    production: {},
                    development: {},
                },
                defaultConfiguration: 'production',
            },
            serve: {
                executor: 'nx-sass:compiler',
                options: {
                    watch: true,
                    outputPath: 'dist',
                    main: `libs/${options.directory}/src/main.scss`,
                    sourceMap: true,
                },
            }
        },
        root: `libs/${options.directory}`,
        projectType: 'library',
    };

    addProjectConfiguration(tree, options.name, project);
}
