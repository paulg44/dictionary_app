// // End to End test using Cypress
// /* - Add word to input
//    - Click on define btn
//    - Click on phonetic btn
//    - Reset input
// */

// describe("e2e", function () {
//   it.only("adds word to user input", function () {
//     cy.visit("http://localhost:3000/");

//     // Arange & Act
//     cy.get("input").type("word");
//     cy.get(".standardBtn").click()
//     cy.get(".definition-container > button").click()
//     cy.wait(1000)
//     cy.get(".refreshBtn").click()

//     // Assert
//     // cy.get("input").should("have.value", "word")
//     cy.get("input").should("have.value", "")

//   });
// });
