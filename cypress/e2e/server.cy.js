describe("Kontrollera att webbsidan är uppe", () => {
  it("Ska svara med statuskod 200", () => {
    cy.request("/")
     .its("status")
     .should("eq", 200);
  });

  it("Ska ha ett synligt h1-element med korrekt text", () => {
    cy.visit("/");

    cy.get("h1")
      .should("be.visible")
      .and("contain.text", "Hacker Escape Room");
  });
});

describe("Online Challenges-sidan", () => {
  it("Ska navigera till sidan och hämta online challenges", () => {
    cy.visit("/");

    cy.contains("Online challenges").click();

    cy.url().should("include", "challenges.html?filter=online");

    cy.get("h2").should("contain.text", "Our Challenges");

    cy.get(".challenges")
      .should("be.visible")
      .and("have.length.greaterThan", 0)

    cy.get("p.challenges__networked").should("be.visible");

    cy.get("h3.challenges__onsite").should("not.be.visible");
  });
});

describe("On-site Challenges-sidan", () => {
  it("Ska navigera till sidan och hämta on-site challenges", () => {
    cy.visit("/");

    cy.contains("On-site Challenges").click();

    cy.url().should("include", "challenges.html?filter=onsite");

    cy.get("h2").should("contain.text", "Our Challenges");

    cy.get(".challenges")
      .should("be.visible")
      .and("have.length.greaterThan", 0)

    cy.get("p.challenges__networked").should("not.be.visible");

    cy.get("h3.challenges__onsite").should("be.visible");
  });
});

describe("Sökfunktion för challenges", () => {
  it("Ska hitta en challenge som finns", () => {
    cy.visit("/challenges.html");

    cy.contains("Filter Challenges").click();

    cy.get(".search-input").type("shell online");

    cy.get(".challenges").should("contain.text", "Shell online");
  });

  it("Ska visa felmeddelande när en challenge inte finns", () => {
    cy.visit("/challenges.html");

    cy.contains("Filter Challenges").click();

    cy.get(".search-input").type("Non Existing Challenge");

    cy.get(".challenges__message").should("be.visible").and("contain.text", "No matching challenges");
  });
});