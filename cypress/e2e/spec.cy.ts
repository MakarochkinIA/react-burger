describe('service is available', function() {
  it('should be available on localhost:3000', function() {
    cy.visit('http://localhost:3001');
  });
});

describe('token testing', function() {
  beforeEach(() => {
    window.localStorage.setItem(
      'refreshToken',
      JSON.stringify('test-refreshToken')
    )
    window.localStorage.setItem(
      'accessToken',
      JSON.stringify('test-accessToken')
    )
    cy.intercept('https://norma.nomoreparties.space/api/auth/user', {fixture: 'user'}).as('fetchUser')
    cy.visit('http://localhost:3001');
  })
  it('should be available on localhost:3000', function() {
    cy.get('.app-header_right_item__OSYet').first().click()
  });
});