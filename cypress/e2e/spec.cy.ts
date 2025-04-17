// cypress/integration/my-first-test.js
describe('My First Test', () => {
  beforeEach(() => {
    // Intercepta las peticiones a la API y asigna un alias
    cy.intercept('GET', '**/api/game-list').as('getGameList')
    cy.intercept('GET', '**/api/videos').as('getVideos')
  })

  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.url().should('include', '/home')
  })

  it('Visits the juegos page', () => {
    cy.visit('/juegos')
    cy.contains('JuegoListComponent') // Ajusta según el contenido de tu componente
  })

  it('Visits the accion page', () => {
    cy.visit('/accion')
    cy.contains('AccionComponent') // Ajusta según el contenido de tu componente
  })

  it('Visits the aventura page', () => {
    cy.visit('/aventura')
    cy.contains('AventuraComponent') // Ajusta según el contenido de tu componente
  })

  it('Visits the rol page', () => {
    cy.visit('/rol')
    cy.contains('RolComponent') // Ajusta según el contenido de tu componente
  })

  it('Visits the shooter page', () => {
    cy.visit('/shooter')
    cy.contains('ShooterComponent') // Ajusta según el contenido de tu componente
  })

  it('Visits the terror page', () => {
    cy.visit('/terror')
    cy.contains('TerrorComponent') // Ajusta según el contenido de tu componente
  })

  it('Visits the rpg page', () => {
    cy.visit('/rpg')
    cy.contains('RPGComponent') // Ajusta según el contenido de tu componente
  })

  it('Visits the perfil page with auth guard', () => {
    cy.visit('/perfil')
    cy.url().should('include', '/login') // Asumiendo que redirige a login si no está autenticado
  })

  it('Visits the not-found page for invalid route', () => {
    cy.visit('/invalid-route')
    cy.url().should('include', '/not-found')
  })

  it('Fetches and displays game list', () => {
    cy.visit('/game-list')
    cy.wait('@getGameList', { timeout: 60000 }) // Espera a que la petición a la API se complete, con un tiempo de espera de 60 segundos
    cy.get('.game-item').should('have.length.greaterThan', 0) // Ajusta el selector según tu componente
    cy.wait(5000) // Espera 5 segundos antes de continuar con el siguiente test
  })

  it('Fetches and displays videos', () => {
    cy.visit('/videos')
    cy.wait('@getVideos', { timeout: 60000 }) // Espera a que la petición a la API se complete
    cy.get('.video-item').should('have.length.greaterThan', 0) // Ajusta el selector según tu componente
  })
})
