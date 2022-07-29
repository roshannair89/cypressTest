// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {

  cy.setCookie('panda-user-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmZTg1ZDcwZi1jNjFmLTQ5ZTEtYWQyNi1lNjc5NjAzMzA4N2EiLCJhY2NvdW50UmVmZXJlbmNlIjoidGVsdXMiLCJ1c2VyVXVpZCI6IjU2MzU0MjYwLTVjNTgtNDc3MC1hZmRkLTY4NzY5MDVjZTFlOCIsImFjY291bnRVdWlkIjoiMjRhNTRhMzMtNzAwZC00ODE3LWI2NGItMzdiNDEzZjZjZjFiIiwidXNlckVtYWlsIjoicm9zaGFuLm5haXJAdGVsdXMuY29tIiwic2NvcGVzIjpbInlhcmE6YWRtaW4iXSwiaWF0IjoxNjU4ODU4NTk2LCJleHAiOjE2NTk0NTg1OTZ9.7raZ655P9xVOLABkjVinrKgMjb2mJSHpyEUsIZdx-6U')
  cy.setCookie('yara-user-calendar', 'ExchangeOnPrem2013')
  cy.setCookie('__Host-next-auth.csrf-token', 'c7ee028832789fea1df3e5f08abcbd70b4af4828d5bf7804f7818602813b84b7%7C288641cd61b661cf7e2a02642e67fb72f8f9bf9d263ca131b937127d81ed5dcb', {
      secure: true
  })
  cy.setCookie('panda-account-uuid', '24a54a33-700d-4817-b64b-37b413f6cf1b')
  cy.setCookie('panda-user-auth-apps', '%5B%22admin%22%2C%22app%22%5D')
  
  })


  Cypress.Commands.add("customCheckAlly",() => {

    const severityIndicatorsIcons={
        minor:'Minor' ,
        major:'Major',
       serious:'Serious',
       critical:'Critical'

    }

    function callback(violations){

        violations.forEach((violation) => {
            const nodes= Cypress.$(violation.nodes.map((node)=> node.target).join(","));

            Cypress.log({
                name: `${severityIndicatorsIcons[violation.impact]} Ally`,
                consoleProps:() => violation,
                $el:nodes,
                message: `[${violation.help}](${violation.helpUrl})`
            })
        
        });

    }

    cy.checkA11y(null,null,callback)

  })


