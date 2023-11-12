describe('service is available', function() {
  it('should be available on localhost:3000', function() {
    cy.visit('http://localhost:3001');
  });
});

describe('burger constructor test', function() {
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
  it('should open ingredient modal window', function() {
    cy.get('a[data-testid="card"]').first().click();
    cy.get('[data-testid="modal"]').first().should('be.visible').should(
      'contain', 'Краторная булка N-200i'
    ).should(
      'contain', '420'
    ).should(
      'contain', '53'
    ).should(
      'contain', '80'
    ).should(
      'contain', '24'
    )
    cy.get('[data-testid="close-icon"]').first().click();
    cy.get('[data-testid="modal"]').should('not.exist');
  });

  it('should drag ingredient to constructor', function() {
    const dataTransfer = new DataTransfer();
    cy.get('a[data-testid="card"]').first().trigger('dragstart', {
      dataTransfer
    });
    cy.get('[data-testid="constructor-main"]').first().trigger('drop', {
      dataTransfer
    });
    cy.get('[data-testid="constructor-main-with-element"]').should('not.exist')


    cy.get('a[data-testid="card"]').last().trigger('dragstart', {
      dataTransfer
    });
    cy.get('[data-testid="constructor-bun"]').first().trigger('drop', {
      dataTransfer
    });
    cy.get('[data-testid="constructor-bun-with-element"]').should('not.exist')



    cy.get('a[data-testid="card"]').first().trigger('dragstart', {
      dataTransfer
    });
    cy.get('[data-testid="constructor-bun"]').first().trigger('drop', {
      dataTransfer
    });
    cy.get('[data-testid="constructor-bun-with-element"]').should('exist')


    cy.get('a[data-testid="card"]').last().trigger('dragstart', {
      dataTransfer
    });
    cy.get('[data-testid="constructor-main"]').first().trigger('drop', {
      dataTransfer
    });
    cy.get('[data-testid="constructor-main-with-element"]').should('exist')

  });

  it('should open order modal window', function() {
    const dataTransfer = new DataTransfer();
    cy.get('a[data-testid="card"]').first().trigger('dragstart', {
      dataTransfer
    });
    cy.get('[data-testid="constructor-bun"]').first().trigger('drop', {
      dataTransfer
    });
    cy.get('[data-testid="order-button"]').first().click();
    cy.wait('@fetchOrder')
    cy.get('[data-testid="modal"]').first().should('be.visible').should(
      'contain', '25735'
    );
    cy.get('[data-testid="close-icon"]').first().click();
    cy.get('[data-testid="modal"]').should('not.exist');
  });

});
