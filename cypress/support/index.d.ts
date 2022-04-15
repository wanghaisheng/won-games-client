// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}
type FieldAttributes = {
  name: string | number
  label: string
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<Element>

     /**
     * Custom command to get fields by label
     * @example cy.getFields(selector)
     */
      getFields(fields: FieldAttributes[]): Chainable<Element>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderShowcase()
     */
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>
  }
}