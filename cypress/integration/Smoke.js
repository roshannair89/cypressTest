export const smokeTest = () => {
  cy.visit('/')
  cy.contains("Yara App").click()

  cy.contains("Yara")//Yara logo
  cy.contains('Welcome to Yara Works')
  cy.contains("We're excited to see you. And we hope you enjoy Yara Works as much as we do. If you have questions or want to provide feedback, we're always happy to hear from you.")
  cy.contains('Roshan')
  cy.contains("Spaces")//Spaces nav icon
  cy.contains("Discover")//Discover nav icon
  cy.contains("Have some free time?")//Mixer nav icon
  cy.contains("Account")//Account nav icon
  cy.contains('Support')//Support link
  cy.contains("Share Feedback").should('have.attr', 'type', 'button')
  cy.contains('[href="https://habitat.telus.com/data-trust-office/wp-content/uploads/sites/5/2021/04/Privacy_Commitment_Employee_EN.pdf"]', "Privacy Commitment")
  cy.contains("Yara Works and the butterfly logo are trademarks of TELUS Corporation used under license.")

  cy.get('[href="/app/spaces?space-event=book-room"]').contains('New Meeting')//New Meeting button
  cy.get('[href="/app/spaces?space-event=book-desk"]').contains('Reserve a desk')//Desk Reservation button
  cy.contains("People Discovery").should('have.attr', 'href', '/app/discover/people')//Mixer Button
  //Current month/year label check
  var d = new Date();
  var month = d.toLocaleString('default', { month: 'long' })
  var year = d.getFullYear()
  cy.contains(month + ' ' + year)
  cy.contains("Up next")//Next in your day label
  //cy.contains("Earlier today")//Earlier today
  cy.contains("Have some free time?")
  cy.contains("Meet for Coffee")
  cy.contains("Grab a Bite")




  //Check Mixer Screen
  cy.contains("Meet for Happy Hour").click()
  cy.wait(1000)
  cy.contains('View profile')
  cy.contains('Send request')
  cy.contains('[href="/app/mixer"]', 'Back to Mixer').click()//Click Back to Mixer
  cy.contains("Mixer")
  cy.get('.bvImRu').should('be.visible')//Checking "Settings" field
  //cy.contains('Pick an activity')
  cy.get('.fDKTrT').should('be.visible')//Check "How it works" field
  cy.contains("Meet for Coffee")
  cy.contains("Grab a Bite")
  cy.contains("Meet for Happy Hour")

  //Check Discover Screen
  cy.contains("Discover").click()
  cy.contains('Discover')
  cy.contains("What are you looking to discover today?")
  cy.contains("People")//check People tab
  cy.contains("Mixer")
  cy.contains("Explore Mixer").should('have.attr', 'href', '/app/mixer').click()
  cy.contains("Meet for Happy Hour").click({ force: true })
  cy.wait(1000)
  cy.contains('Back to Mixer').click()//Click Back to Mixer
  cy.contains("Mixer")
  cy.get(':nth-child(2) > [data-testid="data-testid"]').should('be.visible')//Checking "Settings" field
  //cy.contains('Pick an activity')
  cy.get('.htUsfd > [data-testid="data-testid"]').should('be.visible')//Check "How it works" field
  cy.contains("Meet for Coffee")
  cy.contains("Grab a Bite")
  cy.contains("Meet for Happy Hour")

  //Check People Screen
  cy.contains("Discover").click()//Go back to Discover screen from Mixer
  cy.contains("Explore People").click()
  cy.contains("Find people by name or email").should('have.attr', 'type', 'button').click()
  cy.contains("Cancel").should('have.attr', 'type', 'button').click({ force: true })
  cy.contains("Shared skills and interests")
  cy.contains('[href="/app/discover/people/shared-tags"]', 'See All')
  cy.contains("People in my building")
  cy.contains('[href="/app/discover/people/my-building"]', 'See All')
  cy.contains("Mixer")
  cy.contains('[href="/app/mixer"]', 'Explore Mixer')
  cy.contains("My team")
  cy.contains("Follow").should('have.attr', 'type', 'button')
  cy.contains('[href="/app/discover/people/my-team"]', 'See All')
  cy.contains("Following")
  cy.contains('[href="/app/discover/people/following"]', 'See All')



  //Check Account Screen
  cy.contains("Discover").click()
  cy.wait(1000)
  cy.contains("Account").click()
  cy.contains("EN").should('have.attr', 'type', 'button')
  cy.contains('[href="https://staging.yaraworks.com/admin/en-ca"]', 'Admin')
  cy.contains('[href="https://staging.yaraworks.com/logout"]', 'Logout')
  cy.contains("Profile").click()
  cy.contains('Roshan Nair')
  cy.contains('Contractor, Telus Employer Solutions Inc')
  cy.contains('roshan.nair@telus.com')
  cy.contains('About Me')
  cy.contains('Expertise')
  cy.contains('Interests')
  cy.contains('Org Chart')
  cy.contains('Project and Role')



  //Check Spaces screen
  cy.contains("Spaces").click()
  cy.wait(2000)
  cy.get('.gCYFin').should('be.visible').and('have.attr', 'type', 'button')//Date picker
  cy.get('.gGWMnh').should('be.visible')//search icon
  cy.contains("TELUS").click()
  cy.contains("45 other locations")
  cy.get('.hEaPrd').type("Sky")
  cy.wait(1000)
  cy.contains("TELUS Sky").click({ force: true })
  cy.wait(2000)
  cy.contains("Explore building").click().invoke('attr', 'href').then(href => {
    cy.visit(href)
    cy.wait(2000)
    cy.contains("TELUS Sky exemplifies our commitment to creating healthier and stronger communities. The transformation and revitalization of the city block exemplifies our TELUS brand, and is a powerful testament to our commitment to invest in and support jobs in Alberta today, tomorrow and well into the future.")
    //cy.contains("Our Space")
    cy.contains('[href="/app/spaces?space-event=book-desk&buildingUuid=51aa168f-4149-4d15-8ce3-818c23ebb228"]','Book a Desk')
    cy.contains('[href="/app/spaces?space-event=book-room&buildingUuid=51aa168f-4149-4d15-8ce3-818c23ebb228"]','Book a Room')


  })

  //Check Support screen
  cy.contains("Support").click()
  cy.contains("Support")
  cy.contains('FAQs')
  cy.contains("How do I report a bug or make a suggestion?").should('have.attr','type','button')
  cy.contains("Desk and Room Bookings")
  cy.contains("Why can't I book a certain desk or room?").should('have.attr','type','button')
  cy.contains("Does Yara Works sync with my existing Calendar?").should('have.attr','type','button')
  cy.contains("Can I book a desk or room for use outside of regular office hours?").should('have.attr','type','button')
  cy.contains("Is it a desk or a workstation?").should('have.attr','type','button') 
  cy.contains("My Account")
  cy.contains("How do I reset my password?").should('have.attr','type','button')


  //Check Admin Smoke
  cy.visit('/')
  //cy.contains("Account").click()
  //cy.contains('Admin').click()
  cy.contains("Yara Admin").click()
  cy.get('[data-testid="image-variant-next-image"]').should('be.visible')//Yara logo
  //cy.contains('Roshan Nair')
  cy.contains('[data-testid="dropdown-button"]', 'Roshan Nair')//User profile


  //Check Building screen
  cy.contains('[data-testid="heading"]', 'Building')
  cy.contains('[data-testid="heading-description"]', 'Manage your buildings')
  cy.contains('[href="/buildings"]', 'Building')
  cy.contains('Name and Address')
  cy.contains('City')
  cy.contains("No. of Floors")
  cy.contains("Area")
  cy.contains("Capacity")
  cy.contains('[data-testid="filter"]', 'Filter')
  cy.get('.drNmZP').type("harbour")//building search
  cy.contains("TELUS Harbour")
  


  //Check Floor screen
  cy.contains('[href="/floors"]', 'Floors').click()
  cy.contains('[data-testid="heading"]', 'Floors')
  cy.contains('Floor Number')
  cy.contains('Building')
  cy.contains("Area")
  cy.contains("Capacity")
  cy.contains('[data-testid="filter"]', 'Filter')
  cy.get('.drNmZP').type("8")//Floor Search
  cy.contains("Floor 008")
 

  //Check Spaces Screen
  cy.contains('[href="/admin/spaces"]', 'Spaces').click()
  cy.contains('[data-testid="heading"]', 'Spaces')
  cy.contains('Name')
  cy.contains('Type')
  cy.contains("Capacity")
  cy.contains("Building")
  cy.contains("Floor")
  cy.get('.summaryHeading').should('have.text', 'OverviewSpaces')
  cy.contains('[data-testid="filter"]', 'Filter')
  cy.get('.drNmZP').type("007")//Spaces search
  cy.contains("007")
  cy.wait(3000)
 


  //Check Amenities Screen
  cy.contains('[href="/admin/amenities"]', 'Amenities').click()
  cy.wait(1000)
  cy.contains('[data-testid="heading"]', 'Amenities')
  cy.contains('Name')
  cy.contains('Count')
  cy.get('.drNmZP').type("Surface")//Amenities search
  cy.contains("Tackable Surface")
 


  //Check People screen
  cy.contains('[href="/admin/people"]', 'People').click()
  cy.contains('[data-testid="heading"]', 'People')
  cy.contains('Name')
  cy.contains('Title')
  cy.contains('Yara Works User')
  cy.contains('[data-testid="filter"]', 'Filter')
  cy.get('.drNmZP').type("cetra")//People search
  cy.contains("Eva Cetra")
 


  //Check Book on behalf screen
  cy.contains('[href="/admin/book-on-behalf"]', 'Book on behalf').click()
  cy.contains('[data-testid="heading"]', 'Book on behalf')
  cy.contains('Name')
  cy.contains('Title')
  cy.contains('Status')
  cy.get('.drNmZP').type("cetra")//Book on behalf search
  cy.contains("Eva Cetra")



  //Check User screen
  cy.wait(1000)
  cy.contains('[href="/admin/users"]', 'Users').click()
  cy.contains('[data-testid="heading"]', 'Users')
  cy.contains('Name')
  cy.contains('Role')
  cy.contains('Status')
  cy.contains('[role="tab"]', 'Yara Admin')
  cy.contains('[role="tab"]', 'Yara App').click()
  cy.contains('Name')
  cy.contains('Role')
  cy.contains('Status')
  cy.contains('[data-testid="filter"]', 'Filter')
  cy.get('.drNmZP').type("cetra")//Book on behalf search
  cy.contains("Evanthia Cetra")
  cy.get('[data-testid="tab-yara-app"]').click()
  cy.contains("Evanthia Cetra")
 


  //Check Policy Groups screen
  cy.contains('[href="/admin/policies"]', 'Policies').click()
  cy.contains('[data-testid="heading"]', 'Policies')
  cy.contains('Name')
  cy.contains('Booking Type')
  cy.contains('Spaces')

  //Check Organization settings screen
  cy.contains('[href="/admin/organization-settings"]', 'Organization Settings').click()
  cy.contains('[data-testid="heading"]', 'Organization Settings')
  cy.contains('Pairing Password')
  //cy.get('#pairingPassword').should('be.visible')


  //Check Feedback screen
  cy.contains('[href="/admin/feedback"]', 'Feedback').click()
  cy.contains('[data-testid="heading"]', 'Feedback')
  cy.get('.summaryHeading').should('have.text', 'OverviewReporters')
  cy.contains('[data-testid="filter"]', 'Feedback Type')
  cy.contains('[data-testid="filter"]', 'Status')
  cy.contains('[data-testid="filter"]', 'More Filters')
  cy.contains('[data-testid="filter"]', 'From')
  cy.contains('[data-testid="filter"]', 'To')


  //below code is to check all hyperlinks on the page
  cy.get("a:not([href*='mailto:'])").each(page => {
    cy.request(page.prop('href'))
  })


}