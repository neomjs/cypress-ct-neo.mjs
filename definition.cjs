const { defineFrameworkDefinition } = require('cypress')

const neoDep = {
    // Unique, semantic identifier.
    type: 'neo.mjs',

    // Human-readable name.
    name: 'neo.mjs',

    // Package name install from `npm`.
    package: 'neo.mjs',

    /**
     * Similar to package, but can include a version or tag.
     * Used during setup to generate an install command for users.
     * Eg: `neo.mjs@next`
     */
    installer: 'neo.mjs',

    // Human readable description.
    description: 'The application worker driven frontend framework',

    // Minimum supported version.
    minVersion: '^5.10.8',
}

/**
 * The actual definition.
 */
module.exports = defineFrameworkDefinition({
    /**
     * This should match the `npm` package name.
     * The convention required to ensure your Definition is processed
     * by Cypress is `cypress-ct-*` for global packages, or
     * `@org/cypress-ct-*` for organization level packages.
     */
    type: 'cypress-ct-neo.mjs',

    /**
     * The label that shows up when configuring Component Testing
     * for the first time.
     */
    name: 'neo.mjs',

    /**
     * Supported bundlers. Can be "webpack" and/or "vite".
     * In this example we only support neo.mjs with webpack.
     */
    supportedBundlers: ['webpack'],

    /**
     * Used by Cypress to automatically detect the correct Framework Definition based on the user's project.
     * In this example, if a module matching `neoDep`
     * is found in the user's project,
     * neo.mjs will automatically be selected when configuring Component Testing.
     */
    detectors: [neoDep],

    /**
     * Supply a set of dependencies a project should have to use this Framework Definition.
     * The user will be prompted to install them if they are not found.
     * Optionally, supply different dependencies based on the chosen bundler.
     */
    dependencies: (bundler) => {
        return [neoDep]
    }
})
