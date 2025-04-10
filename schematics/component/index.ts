import { strings } from '@angular-devkit/core';
import {
    Rule,
    SchematicContext,
    Tree,
    apply,
    mergeWith,
    move,
    template,
    url,
} from '@angular-devkit/schematics';

export function component(options: any): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        // Define the path where the component will be created
        const componentPath = `src/app/${strings.dasherize(options.name)}`;

        // Create a template for the component files
        const templateSource = apply(url('./files'), [
            // Use the template function to replace placeholders in the template files
            template({
                ...options,
                dasherize: strings.dasherize,
                classify: strings.classify,
            }),
            // Move the generated files to the desired location
            move(componentPath),
        ]);

        // Merge the template source with the tree
        return mergeWith(templateSource)(tree, _context);
    };
}
