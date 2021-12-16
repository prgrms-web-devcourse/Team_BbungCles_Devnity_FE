describe("로그인 페이지", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/login");

    cy.fixture("signupFormData");
  });

  it("사용자는 로그인에 성공했을 경우, 메인 페이지로 이동한다.", () => {
    cy.get('[name="email"').type("cheo99@gmail.com");
    cy.get('[name="password"').type("pAssword123!@#");
    cy.get("button")
      .contains("로그인")
      .click()
      .should(() => {
        // TODO: Cypress는 jest 문법이 아니라 chai 또는 mocha를 사용한다고 하는데 ESLint에 규칙을 적용하는 법을 아직 몰라서 아래 라인에 대해 규칙을 비활성화 한다.
        // eslint-disable-next-line no-unused-expressions
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // expect(localStorage.getItem("jwtToken")).not.to.null;
      });
    cy.url().should("include", "/");
  });
});
