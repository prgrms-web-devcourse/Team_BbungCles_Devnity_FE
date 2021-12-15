describe("회원가입 페이지", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/signup");
  });

  it("사용자는 회원가입에 성공했을 경우, `로그인페이지 ('/login')` 로 이동한다.", () => {
    cy.get('[name="name"').type("체오");
    cy.get('[name="email"').type("cheo98@gmail.com"); // 회원되지 않은 아이디로 변경한다.
    cy.get('[name="password"').type("pAssword123!@#");
    cy.get('[name="confirmPassword"').type("pAssword123!@#");
    cy.get("#course").select("프론트엔드");
    cy.get("#generation").select("1기");
    cy.get("#role").select("수강생");
    cy.get("button").contains("회원가입").click();

    cy.url().should("include", "/login");
  });
});
