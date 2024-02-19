import { GeneratorCallback, Tree, addDependenciesToPackageJson, writeJson } from '@nx/devkit';
import type { Config } from 'stylelint';

/**
 * Add dependencies to package.json
 *
 * @param tree The current file tree
 *
 * @returns A generator callback
 */
export default function addStylelintRootConfig(tree: Tree): void {
    const config = {
        ignoreFiles: ['**/*'],
        overrides: [
          {
            files: ['**/*.scss'],
            extends: ['stylelint-config-standard-scss'],
            rules: {},
          },
        ],
        rules: {},
    };
    
    
    writeJson<Config>(tree, '.stylelintrc.json', config);
}
