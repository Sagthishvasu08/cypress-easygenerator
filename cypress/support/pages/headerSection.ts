class HeaderSection {
  getLogoLink() {
    return cy.get('header a[href="https://easygenerator.com/"]');
  }
}
export default HeaderSection;
