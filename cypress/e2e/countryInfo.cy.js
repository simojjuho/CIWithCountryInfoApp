/* eslint-disable no-undef */

describe('template spec', () => {
  beforeEach(function() {
    cy.visit('http://localhost:3001/')
  })

  it('site visible', function(){
    cy.contains('Country Info App')
    cy.contains('Albania')
  })

  it('page changing succeeds', function(){
    cy.contains('Andorra').click()
    cy.contains('Located at the 42.5 °N and 1.5 °E')
    cy.get('img')
  })
})