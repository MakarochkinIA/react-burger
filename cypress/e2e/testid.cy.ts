describe('service is available', function() {
    beforeEach(() => {
        window.localStorage.setItem(
          'refreshToken',
          JSON.stringify('test-refreshToken')
        )
        window.localStorage.setItem(
          'accessToken',
          JSON.stringify('test-accessToken')
        )
        cy.intercept(
          'https://norma.nomoreparties.space/api/auth/user',
          {fixture: 'user'}
        ).as('fetchUser')
        cy.intercept(
          'https://norma.nomoreparties.space/api/ingredients',
          {fixture: 'ingredients'}
        ).as('fetchIngredients')
        cy.intercept(
          'https://norma.nomoreparties.space/api/orders',
          {fixture: 'order'}
        ).as('fetchOrder')
        cy.visit('http://localhost:3001');
      })
    it('should open modal window', function() {
      cy.get('a[data-testid="bun"]').first().click();
      });
  });
  