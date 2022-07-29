///<reference types="cypress"/>


describe("Yaraworks-Functional TEST SUITE", { browser: 'edge' }, () => {

    beforeEach(() => {

        cy.login()
        cy.visit('/app')

    })


    it('Book Mixer event', () => {

        //Create a Mixer event
        cy.contains('Meet for Coffee').click()//Click on Meet for Coffee
        cy.contains('View profile')//Check View Profile button
        cy.contains('Send request').should('have.attr', 'href')//Check Send Request button
        cy.get('.mYuyo').find('div').first().then(function (text) {

            const user = text.text()
            cy.log('User =' + user)

            if (user.includes("Mary Verissimo")) {

                cy.log("Test paused as the user found is Mary")
                cy.pause()

            }
        })

        cy.contains('Send request').click() //click on Send Request button
        //cy.contains("Got it").should('have.attr', 'type', 'button').click()//Check the Covid notification and click on Got it


        cy.contains("Back to Mixer").should('have.attr', 'type', 'button')
        //cy.contains("Confirm").should('have.attr','type','submit')
        //cy.get('#name').clear().type("Testing Mixer-Please ignore")


        //Below code is to ignore the ResolveObserve loop exception
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error', e)
            console.log('runnable', runnable)
            if (e.message.includes('ResizeObserver')) {
                // we expected this error, so let's ignore it
                // and let the test continue
                return false
            }
            // on any other error message the test fails
        })

        var current = new Date();
        cy.contains("Confirm").click() //Click  to Confirm the event
        //Below code is ensure the pop up modal displayed has the necessary details
        cy.contains("Meeting created")//Check Modal label
        //cy.contains("Meet for Coffee")//Check details displayed on pop up modal
        cy.contains("Okay").should('have.attr', 'type', 'button').click()//Check Okay button

        //Code to check all hyperlinks on the page except Email links
        cy.get("a:not([href*='mailto:'])").each(page => {
            cy.request(page.prop('href'))
        })


    })

    it('Edit Mixer event', () => {

        cy.contains("Meet for Coffee -").click()
        //cy.contains("Testing Mixer- Please ignore")
        cy.contains("Edit Meeting").click({ force: true })
        //cy.contains("Got it").should('have.attr', 'type', 'button').click()//Check the Covid notification and click on Got it
        cy.wait(2000)
        //cy.contains("Cancel Meeting")
        cy.contains('Looking forward to connecting.').type("This is a Test script for Edit Mixer event")
        cy.contains('Update Meeting').click()
        //Below code is to ignore the ResolveObserve loop exception
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error', e)
            console.log('runnable', runnable)
            if (e.message.includes('ResizeObserver')) {
                // we expected this error, so let's ignore it
                // and let the test continue
                return false
            }
            // on any other error message the test fails
        })

        //Code to check all hyperlinks on the page except Email links
        cy.get("a:not([href*='mailto:'])").each(page => {
            cy.request(page.prop('href'))
        })


    })

    it('Cancel Mixer event', () => {

        //Below code is to cancel the booked mixer event
        //Click the first mixer event
        cy.contains("Meet for Coffee -").click()
        cy.wait(1000)
        //cy.contains("Testing Mixer-Please ignore")
        cy.contains("Cancel Meeting").click()
        cy.contains("Meeting Cancelled")
        cy.contains('Okay').click()

        //Code to check all hyperlinks on the page except Email links
        cy.get("a:not([href*='mailto:'])").each(page => {
            cy.request(page.prop('href'))
        })

    })


    it("Book a meeting", () => {



        cy.contains("New Meeting").click()//click on New meeting quick access button
        cy.wait(2000)
        //Below code is to ignore the ResolveObserve loop exception
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error', e)
            console.log('runnable', runnable)
            if (e.message.includes('ResizeObserver')) {
                // we expected this error, so let's ignore it
                // and let the test continue
                return false
            }
            // on any other error message the test fails
        })
        //cy.contains("Got it").click()
        cy.wait(2000)
        cy.contains("Create a meeting")//check meeting title is displayed
        //cy.get('#name').contains("Add title...")
        cy.get('#name').type("New Testing-Please ignore")//Add Title to the meeting
        //cy.contains("Add time").click()//Add time
        var current = new Date();
        cy.wait(1000)

        cy.contains("Add people").click()//Add invitees
        cy.get('#autoCompleterInput').type('Gaurav Shu')//Search test to search for Gaurav Shukla
        cy.contains("Gaurav Shukla").click()//check if Gaurav Shukla is returned in Search
        cy.contains('Okay').click()//Click Ok
        cy.wait(1000)
        cy.contains("Add location(s)").click()//Add meeting location
        cy.wait(2000)
        cy.get('.src__Component-sc-1o2bb83-0 > .src__Button-sc-1ha1b9v-0').click()//Click on Chevron to Select Telus Sky building on Spaces page
        cy.get('.fWDswI').type('Sky')//Type Sky in Search field
        cy.wait(2000)
        //cy.contains("TELUS Sky").click({force: true})//Select Telus Sky
        cy.contains("685 Centre St").click()//Telus Sky address assertion and click on it
        cy.contains("Booking Details").click()

        cy.contains("Add location(s)").click()//Add meeting location
        cy.wait(1000)
        cy.contains("Floor 004").click()
        cy.contains("Floor 008").click()//Open Flor dropdown
        cy.wait(2000)
        cy.contains('008-019').click()//Select 004-031 Room
        cy.wait(1000)
        cy.contains('Book').click({ force: true })//Click on Book button
        //cy.get('#__next').find('button').should('have.attr','type','button').click()
        var tempStart = current.getHours() + 1
        var tempEnd = current.getHours() + 2
        cy.wait(1000)
        //cy.get('.etOQmd').should('have.a.property', 'background', 'linear-gradient(212.14deg, rgb(47, 140, 62) -0.74%, rgb(0, 128, 90) 95.32%);')


        cy.contains('Confirm').click({ force: true })
        cy.wait(1000)//Confirm the meeting booking
        cy.contains("Meeting created")
        cy.contains("Okay").click()
        //cy.should('not.contain', 'Sorry, there was a problem creating your event')//Check to ensure if there is no errors while trying to book

        //Code to check all hyperlinks on the page except Email links
        cy.get("a:not([href*='mailto:'])").each(page => {
            cy.request(page.prop('href'))
        })


    })


    it('Edit Meeting ', () => {



        cy.contains("New Testing-Please ignore").click()
        //cy.contains("Testing Mixer- Please ignore")
        cy.contains('button', 'Edit Meeting').click()
        //cy.contains("Got it").should('have.attr', 'type', 'button').click()//Check the Covid notification and click on Got it
        cy.wait(2000)
        cy.contains("Cancel Meeting")
        //cy.contains("Add location")
        //cy.get('.sc-47334119-13').should('have.attr', 'placeholder', 'Add description').type("This is a Test script for Edit-Meeting event")
        cy.get('[placeholder="Add description"]').type("This is a Test script for Edit-Meeting event")
        //cy.get('input').invoke('attr', 'placeholder').should('contain', 'Add description')
        cy.contains('Update Meeting').click()
        //Below code is to ignore the ResolveObserve loop exception
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error', e)
            console.log('runnable', runnable)
            if (e.message.includes('ResizeObserver')) {
                // we expected this error, so let's ignore it
                // and let the test continue
                return false
            }
            // on any other error message the test fails
        })
        cy.wait(2000)
        //cy.contains('Okay').click()

        //Code to check all hyperlinks on the page except Email links
        cy.get("a:not([href*='mailto:'])").each(page => {
            cy.request(page.prop('href'))
        })


    })


    it('Cancel Meeting', () => {


        cy.wait(2000)
        //Below code is to cancel the booked meeting room
        cy.contains("New Testing-Please ignore").click()//Click on Meeting event on Home feed
        //cy.contains("New Testing-Please ignore")
        cy.contains("Edit Meeting")//Check if Edit meeting is present on the page
        cy.contains("Cancel Meeting").click()//Click on Cancel meeting
        //cy.contains("Participants(2)")
        //cy.contains("Email").should('have.attr','href')
        cy.contains("Meeting Cancelled")
        cy.contains('Okay').click()

        //Code to check all hyperlinks on the page except Email links
        cy.get("a:not([href*='mailto:'])").each(page => {
            cy.request(page.prop('href'))
        })


    })


    it("Reserve a desk", () => {

        cy.contains("Reserve a desk").click()//click on New Desk quick access button
        cy.wait(2000)

        //Below code is to ignore the ResolveObserve loop exception
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error', e)
            console.log('runnable', runnable)
            if (e.message.includes('ResizeObserver')) {
                // we expected this error, so let's ignore it
                // and let the test continue
                return false
            }
            // on any other error message the test fails
        })

        cy.contains("Reserve a desk")//check Desk title is displayed
        var current = new Date();
        var year = current.getFullYear();
        cy.log("Current year=" + year)
        cy.contains("Add people")
        cy.contains(year).click({ force: true })
        cy.wait(1000)
        cy.contains("Save").click()//Click Save button on Calendar
        cy.wait(2000)
        cy.contains("Add location").click()//Click Add location to select a Desk
        cy.wait(2000)
        cy.get('.src__Component-sc-1o2bb83-0 > .src__Button-sc-1ha1b9v-0').click()//Click on Chevron to Select Telus Sky building on Spaces page
        cy.get('.fWDswI').type('Sky')//Type Sky in Search field
        cy.wait(2000)
        cy.contains("685 Centre St").click()//Telus Sky address assertion and click on it
        cy.contains("Booking Details").click()//Click on Booking Details button
        cy.get('#startTimeHours').clear().type('8')//Change Start time to 8
        cy.get('#endTimeHours').clear().type('5')//Change end time to 5

        //Validation to check am/pm and change start time from pm to am
        cy.get('[data-testid="select-startTimeMeridian"] > .src__SelectField-sc-1lfvmi8-6 > .react-select-container__control > .react-select-container__value-container').then(function (text) {

            const ampm = text.text()
            cy.log('Time =' + ampm)

            if (ampm == 'p.m.') {

                cy.get('[data-testid="select-startTimeMeridian"] > .src__SelectField-sc-1lfvmi8-6 > .react-select-container__control > .react-select-container__value-container').click()

                cy.get('#react-select-6-option-0 > .src__OptionLabelContainer-sc-1lfvmi8-5').click()
            }


        })


        cy.contains("Add location").click()//Add meeting location
        cy.wait(1000)
        cy.contains("Floor 004").click()
        cy.contains("Floor 008").click({ force: true })//Open Floor dropdown
        cy.wait(3000)
        cy.contains('008-').click()
        cy.wait(1000)

        //Click Book button
        cy.get('.sc-f26bcd9a-0 > .sc-a2478d3e-0 > .src__Button-sc-1ha1b9v-0').click({ force: true })
        cy.wait(1000)

        //Click confirm button

        cy.contains("Confirm").click({ force: true })
        cy.wait(2000)
        cy.contains("Reservation Created")
        //cy.get('.sc-cf7af01c-1 > .src__Button-sc-1ha1b9v-0').click()//Click Okay button
        cy.contains("Okay").click()
        cy.wait(2000)
        cy.contains("Desk Reservation")


        //Code to check all hyperlinks on the page except Email links
        cy.get("a:not([href*='mailto:'])").each(page => {
            cy.request(page.prop('href'))
        })

    })


    it('Edit Desk Reservation ', () => {


        cy.get('.MuiGrid-grid-md-7 > :nth-child(1)').then(function (text) {

            const text2 = text.text()
            if (text2.includes('Oooh, looks like you have some free time.')) {

                cy.contains('Earlier today').click()
                // element exists, do something
                cy.contains("Desk Reservation").click()
                cy.contains("Reservation Details")
                cy.contains("Edit Reservation").click()
                //cy.contains("Got it").should('have.attr', 'type', 'button').click()//Check the Covid notification and click on Got it
                cy.wait(1000)
                cy.contains("Cancel Reservation")
                //cy.contains("Add location")
                // cy.get('.SLj').type("This is a Test script for Edit Meeting event")
                cy.contains('Update Reservation').click()
                //Below code is to ignore the ResolveObserve loop exception
                cy.on('uncaught:exception', (e, runnable) => {
                    console.log('error', e)
                    console.log('runnable', runnable)
                    if (e.message.includes('ResizeObserver')) {
                        // we expected this error, so let's ignore it
                        // and let the test continue
                        return false
                    }
                    // on any other error message the test fails
                })
            }
            else {


                // element exists, do something
                cy.contains("Desk Reservation").click()
                cy.contains("Reservation Details")
                cy.contains("Edit Reservation").click()
                //cy.contains("Got it").should('have.attr', 'type', 'button').click()//Check the Covid notification and click on Got it
                cy.wait(1000)
                cy.contains("Cancel Reservation")
                //cy.contains("Add location")
                // cy.get('.SLj').type("This is a Test script for Edit Meeting event")
                cy.contains('Update Reservation').click()
                //Below code is to ignore the ResolveObserve loop exception
                cy.on('uncaught:exception', (e, runnable) => {
                    console.log('error', e)
                    console.log('runnable', runnable)
                    if (e.message.includes('ResizeObserver')) {
                        // we expected this error, so let's ignore it
                        // and let the test continue
                        return false
                    }
                    // on any other error message the test fails
                })
            }
        })

        //Code to check all hyperlinks on the page except Email links
        cy.get("a:not([href*='mailto:'])").each(page => {
            cy.request(page.prop('href'))
        })


    })


    it('Cancel Desk Reservation', () => {

        //Below code is to cancel the booked meeting room

        cy.get('.MuiGrid-grid-md-7 > :nth-child(1)').then(function (text) {

            const text2 = text.text()
            if (text2.includes('Oooh, looks like you have some free time.')) {

                cy.contains('Earlier today').click()
                cy.contains('Desk Reservation').click()
                cy.wait(1000)
                cy.contains('Desk Reservation')
                cy.contains("Reservation Details")
                cy.contains("Cancel Reservation").click()
                cy.contains("Reservation Cancelled")
                cy.contains('Okay').click()
            }

            else {

                cy.contains('Desk Reservation').click()
                cy.wait(1000)
                cy.contains('Desk Reservation')
                cy.contains("Reservation Details")
                cy.contains("Cancel Reservation").click()
                cy.contains("Reservation Cancelled")
                cy.contains('Okay').click()


            }
        })

        //Code to check all hyperlinks on the page except Email links
        cy.get("a:not([href*='mailto:'])").each(page => {
            cy.request(page.prop('href'))
        })

    })

    it("Check Validations for Create Meeting", () => {

        cy.contains("New Meeting").click()//click on New meeting quick access button
        cy.wait(1000)
        //Below code is to ignore the ResolveObserve loop exception
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error', e)
            console.log('runnable', runnable)
            if (e.message.includes('ResizeObserver')) {
                // we expected this error, so let's ignore it
                // and let the test continue
                return false
            }
            // on any other error message the test fails
        })

        cy.wait(1000)
        cy.contains("Create a meeting")//check meeting title is displayed
        var current = new Date();
        var tempStart = current.getHours() + 1
        var tempEnd = current.getHours() + 2

        if (tempEnd >= 12) {

            var newEndTime = tempEnd - 12
            cy.get('#endTimeHours').clear().type(newEndTime - 1)
            cy.get('#endTimeMins').type(current.getMinutes())
            cy.get('[data-testid="select-endTimeMeridian"] > .src__SelectField-sc-1lfvmi8-5 > .react-select-container__control > .react-select-container__value-container > .react-select-container__single-value').click()
            cy.wait(1000)
            cy.get('#react-select-3-option-1 > .src__OptionLabelContainer-sc-1lfvmi8-4').click({ force: true })

        }
        else {

            cy.get('#endTimeHours').clear().type(current.getHours() - 1)

        }

        if (tempStart >= 12) {

            var newStartTime = tempStart - 12
            cy.get('#startTimeHours').clear().type(newStartTime)
            cy.get('[data-testid="select-startTimeMeridian"] > .src__SelectField-sc-1lfvmi8-5 > .react-select-container__control > .react-select-container__value-container > .react-select-container__single-value').click()
            cy.wait(1000)
            cy.get('#react-select-2-option-1 > .src__OptionLabelContainer-sc-1lfvmi8-4').click({ force: true })


        }
        else {
            cy.get('#startTimeHours').clear().type(current.getHours())

        }
        cy.contains('Confirm').click({ force: true })
        //cy.contains('End time is not valid')

        //Code to check all hyperlinks on the page except Email links
        cy.get("a:not([href*='mailto:'])").each(page => {
            cy.request(page.prop('href'))
        })

    })


})


