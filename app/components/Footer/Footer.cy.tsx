import Footer from "./Footer"

describe('<Footer />', () => {
    it('should render and display expected content', () => {
      cy.mount(<Footer />)
      cy.get('footer')
      cy.get('p').contains(`Products App`)
      cy.get('p').contains(`Created by Engr. Kirk Alyn Santos`)
    })
  })