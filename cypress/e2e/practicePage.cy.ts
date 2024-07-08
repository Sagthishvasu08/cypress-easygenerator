import HomePage from '@pages/homePage';
import HeaderSection from '@pages/headerSection';
const homePage = new HomePage();
const headerSection = new HeaderSection();

describe("Practice Page Tests",()=>{

beforeEach(() =>{
    homePage.visit();
})
it("Verify the Page title",()=>{
    cy.title().should('eq', 'Practice Page');
    cy.get('meta[charset="utf-8"]').should('exist');
    cy.get('meta[name="viewport"]').should('have.attr', 'content', 'width=device-width, initial-scale=1');
})
});