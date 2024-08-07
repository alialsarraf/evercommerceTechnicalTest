// This is taking into account that we are refering to the Page object Model class and calls the verify element exist and functionality in the POM files
// Playwright have the ability to write a descrive, so we can breakdown the E2E test to smaller tests and make it easier to see if any of the steps failes.


test.describe("User create a new appointment and resceive the SMS and email notification"){
    it("A new appointment have been created and shown in teh Calander page"){
        // The user eners valid appointment name
        // Date
        // Time
        // and click Save
        // Calander page will show the new appointment loaded under the calander page, with existing appointments
    }

    it("The User verify that they recieved the Notification via SMS"){
        // The SMS notification got recieved using the Mailosaur notification
    }

    it("The User verify that they recieved the Notification via email"){
        // The email notification got recieved using the Mailosaur notification
    }
}