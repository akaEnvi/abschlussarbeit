// https://docs.cypress.io/api/table-of-contents

describe("test Index View", () => {
  it("should exist", () => {
    cy.visit("http://localhost:8080/");
  });

  it("should exist a Selectfield", () => {
    cy.get("#testSelect1").should("exist");
  });

  it("should exist a Moderator Button", () => {
    cy.get(":nth-Child(7)").should("exist");
  });

  it("should exist a Categories Button", () => {
    cy.get(":nth-Child(10)").should("exist");
  });

  it("should add a Moderator", () => {
    cy.get("#testSelect1").select("2022-09");
    cy.contains("Generate").click();
  });

  it("should visit Categories", () => {
    cy.get(":nth-Child(10)").visit("http://localhost:8080/HubView");
  });

  it("should click CheckIn", () => {
    cy.get(":nth-Child(10)").click();
  });
});
