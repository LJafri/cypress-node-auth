it('returns register when we access /register', () => {
    cy.request('POST', 'http://localhost:3000/api/user/register')
    .then((response) => {
        expect(response.status).to.eq(200)
    })
})
    