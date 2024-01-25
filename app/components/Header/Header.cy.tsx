import Header from "./Header"

describe('<Header />', () => {
    it('should render and display expected content', () => {
      // Mount the React component for the About page
      cy.mount(<Header />)
   
      // The new page should contain an h1
      cy.get('h1').contains('PRODUCTS')

      // The new page should contain the search input
      cy.get('input')
    })
  })