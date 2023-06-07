import { getContainerEl, setupHooks } from '@cypress/mount-utils'

let dispose

function cleanup() {
    dispose?.()
}

/**
 * @param {Object} config
 * @param {Object} options={}
 */
export function mount(config, options={}) {
    // Retrieve root DOM element that Cypress has prepared for this test
    const root   = getContainerEl(),
          rootId = root.id

    console.log(rootId);
    console.log(root);

    dispose = () => {
        console.log(rootId)
    }

    // Wait until next requestAnimationFrame to ensure any async render logic has executed
    return cy.wait(50, { log: false }).then(() => {
        if (options.log !== false) {
            Cypress.log({
                name   : 'mount',
                message: 'Mounted component'
            })
        }
    })
}

// Cleanup between each test
setupHooks(cleanup)
