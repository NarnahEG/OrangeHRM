/// <reference types="cypress" />

import {url, username, password, keyword, success, fname, mname, lname, empID, urlConf} from './orange.env.cy';

describe('OrangeHRM', {
  retries:{
  openMode: 1}
    //runMode: 1
  },
  () => {
  beforeEach(() => {
    //user login
    cy.visit(url)
    cy.wait(6000)
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    cy.get('[name="password"]').type(password, {log:false})
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

   it('Create Employee', () => {
   //New Employee
    cy.url().should('include', urlConf)
    cy.wait(6000)
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(fname).click({force:true})
    cy.get('.--name-grouped-field > :nth-child(2) > :nth-child(2) > .oxd-input').type(mname)
    cy.get('.--name-grouped-field > :nth-child(3) > :nth-child(2) > .oxd-input').type(lname)
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(empID)
    cy.get('.orangehrm-employee-image')
    //cy.get('.employee-image').click().selectFile('cypress/e2e/image/advert.jpg')
 //cy.get('.employee-image').attachFile('C:\Users\Support\Desktop\OrangeHRM\cypress\e2e\image\advert.jpg',{subjectType: 'input'});
    cy.get('.oxd-switch-input').click()
    cy.get('.oxd-button--secondary').click()
   })

  it('Search Leave Taken', () => {
    //Search Leave Taken
    //cy.wait(6000)
    //cy.get('a[href="/web/index.php/leave/viewLeaveModule"]')
    cy.get(':nth-child(3) > .oxd-main-menu-item')
    cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
    cy.wait(6000)
    //cy.get('.oxd-multiselect-chips-area').clear()
    //cy.get('.oxd-multiselect-wrapper > .oxd-select-text').click().type('Rejected')
    cy.get('.oxd-button--secondary').click()
  })
  

  it('Forgot Password', () => {
    //logout
    cy.wait(6000)
    cy.get('.oxd-userdropdown').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    cy.wait(6000)
    cy.get('.orangehrm-login-forgot > .oxd-text').should('have.text','Forgot your password? ').click()
    cy.get('.oxd-input').type(username)
    cy.get('.oxd-button--secondary').click();
    //verify password reset link was successful
    cy.get('.orangehrm-card-container').should('contain.text',success)
  })
 
  })