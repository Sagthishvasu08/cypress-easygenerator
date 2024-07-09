import HomePage from '@pages/practicePage';
import HeaderSection from '@pages/practicePageHeader';
import PracticePageDropdown from '@pages/practicePageDropdown';
import PracticePageHeader from '@pages/practicePageHeader';
import PracticePageImageUpload from '@pages/practicePageImageUpload';
import PracicePageOpenTab from '@pages/practicePageOpenTab';
import { contains } from 'cypress/types/jquery';
const homePage = new HomePage();
const headerSection = new HeaderSection();
const practicePageDropdown = new PracticePageDropdown();
const practicePageImageUpload = new PracticePageImageUpload();
const pracicePageOpenTab = new PracicePageOpenTab();
describe("Practice Page Tests",()=>{

beforeEach(() =>{
    homePage.visit();
})
it("Verify the Page title",()=>{
    cy.title().should('eq', 'Practice Page');
})

it('Verify the header and home button',()=>{
    headerSection.getLogoLink().should('exist');
    headerSection.getHomeButton().should('have.text', 'Home');
})

it('Verify the page heading', () => {
    headerSection.getPageTitle().should('have.text', 'Practice Page');
  });
it('Verify the Dropdown values in the Practice Page',()=>{
    practicePageDropdown.getDropDownTitle().should('be.visible');
    practicePageDropdown.getDropdownOptions().should('have.length',3);
    practicePageDropdown.selectOption('option2');
    practicePageDropdown.getoptions().eq(0).should('have.text','Option1');
    practicePageDropdown.getoptions().eq(1).should('have.text','Option2');
    practicePageDropdown.getoptions().eq(2).should('have.text','Option3');
})
it('Verify the upload Image function', ()=>{
    practicePageImageUpload.getTitle().should('have.text','Upload your image here')
    const uploadImagePath = 'cypress/fixtures/Easygenerateimg.png';
    practicePageImageUpload.selectFile(uploadImagePath);
    practicePageImageUpload.getUploadedImage().should('exist').and('have.attr','src').should('include','blob:')
})
it('Verify open Tab section', () => {
    pracicePageOpenTab.getTitle().should('be.visible').and('have.text', 'Open new tab');
    pracicePageOpenTab.getOpenTab().then($button => {
        cy.wrap($button).invoke('removeAttr', 'onclick');
        cy.wrap($button).click();

        // Directly visit the new tab URL
        cy.visit(Cypress.env('newTabUrl'));

        // Verify the new URL title using cy.origin for cross-origin commands
        cy.origin(Cypress.env('newTabUrl'), () => {
            cy.title().should('eq', 'Create Courses Online | #1 E-learning Software');
        });
    });
});
});