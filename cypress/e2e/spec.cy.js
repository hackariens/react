describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://react.traefik.me');
    cy.screenshot('first-page');
  })
})