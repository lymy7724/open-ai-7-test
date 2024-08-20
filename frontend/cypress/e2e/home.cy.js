// checks if the homepage has the logo & 3 header sections
describe("Home Page", () => {
  it("checks all essential elements", () => {
    cy.visit("https://open-ai-7.onrender.com/");

    cy.get('img[alt="lrnr-logo"]').should("be.visible");
    cy.contains("Personalized Quizzes").should("be.visible");
    cy.contains("Rewarding").should("be.visible");
    cy.contains("Personal SME").should("be.visible");
  });
});

// checks if the rewarding section has the required heading and logo
describe("Rewarding Section Block", () => {
  it("should display the correct icon and description for the Rewarding section", () => {
    cy.visit("https://open-ai-7.onrender.com/");
    cy.contains("Rewarding").should("be.visible");
    cy.get("h2").contains("payments").should("be.visible");
    cy.contains("Our app is designed to be both challenging").should(
      "be.visible"
    );
  });
});

// checks if the personal SME section has the required heading and logo
describe("Personal SME Block", () => {
  it("should display the correct icon and description for the Personal SME section", () => {
    cy.visit("https://open-ai-7.onrender.com/");
    cy.contains("Personal SME").should("be.visible");
    cy.get("h2").contains("person").should("be.visible");
    cy.contains("Welcome to the path of knowledge").should("be.visible");
  });
});

// checks to see if the page is responsive for different screen sizes
describe("Responsive Layout", () => {
  it("should be responsive for different screen sizes", () => {
    cy.visit("https://open-ai-7.onrender.com/");
    cy.viewport("samsung-s10"); // phone
    cy.get("div.icon-block").should("have.length", 3);
    cy.viewport("ipad-mini"); // laptop
    cy.get("div.icon-block").should("have.length", 3);
  });
});
