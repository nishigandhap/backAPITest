/// <reference types ='cypress'/>


describe('API test suite', function () {

    beforeEach(function () {
        cy.loginPage()
    })

    it('Create new article and verify article is created', function () {
        cy.intercept('POST', '/editor', { fixture: 'createArticle.json' }).as('createNewArticle')
        cy.contains(' New Article ').click()
        cy.fixture('createArticle.json').then((data) => {
            cy.get('input[formcontrolname="title"]').type(data.article.title)
            cy.get('input[formcontrolname="description"]').type(data.article.description)
            cy.contains(' Publish Article ').click()
            cy.get('h1').contains(data.article.title)
        })
    })

    it('Check for tags are filtered and exist on page', function () {
        cy.intercept('GET', '**/api/tags', { fixture: 'tags.json' }).as('tags')
        cy.get('@tags').its('response.statusCode').should('eq', 200)
        let tagNames = []
        cy.get('.tag-default').each((el) => {
            let tagName = el.text()
            tagNames.push(tagName)
        }).then(() => {
            cy.wrap(tagNames).should('exist')
        })
    })

    it('Get article dynamically with favourite counts', function () {
        cy.intercept('GET', '**/api/articles*', { fixture: 'articles.json' }).as('article')
        cy.contains(' Global Feed ').click()
        cy.wait('@article')
        cy.get('button.btn.btn-sm.btn-outline-primary').then((listOfCounts) => {
            expect(listOfCounts[1]).to.contain('5')
        })
        cy.fixture('articles').then(data => {
            const articleLink = data.articles[1].slug
            cy.intercept('POST', '**/articles/' + articleLink + '/favorite', data)
        })
    })

    it('Select tags as per article', function () {
        cy.intercept('GET', '**/api/tags', { fixture: 'tags.json' }).as('tags')
        cy.get('@tags').its('response.statusCode').should('eq', 200)
        cy.intercept('GET', '**/articles*', { fixture: 'tagsList.json' }).as('tagsList')
        cy.contains('matrix').click()
        cy.get('@tagsList').its('response.statusCode').should('eq', 200)
        cy.get('.tag-list').contains(' matrix ').should('exist')

    })
})

