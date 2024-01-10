/// <reference types="cypress" />

import {url, username, password,empID, keyword} from './orange.env.cy';

describe('OrangeHRM', () => {
  beforeEach(() => {
    //user login
    cy.visit(url)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    cy.get('[name="password"]').type(password)
    cy.get('[type="submit"]').click()
  })

  // afterEach(() => {
  //   //logout
  //   cy.get('.oxd-userdropdown').click()
  //   cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
  // })

  it('Side Panel View', () => {
    cy.get('.oxd-sidepanel-body')
    cy.get('a[href="/web/index.php/dashboard/index"]').click()
    cy.get('.oxd-sidepanel-body')
    cy.get('a[href="/web/index.php/dashboard/index"]').click()
    cy.get('a[href="/web/index.php/pim/viewMyDetails"]').click()
    cy.get(':nth-child(9) > .oxd-main-menu-item')
  })

  it('Search Feature', () => {
  cy.get('.oxd-input').click().type(keyword)
  })

  it('Forgot Password', () => {
    //logout
    cy.get('.oxd-userdropdown').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    cy.wait(6000)
    cy.get('.orangehrm-login-forgot').click()
    cy.get('.oxd-input').type(username)
    cy.get('.orangehrm-forgot-password-button-container')
    
    cy.get()
  })
 
  })