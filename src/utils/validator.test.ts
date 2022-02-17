import { isValidImageSrc } from "./validator";

test("유효한 이미지 파일 여부 검사", () => {
  const invalidSrc =
    "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp";
  const validSrc =
    "https://d2jma6e9jr7w3y.cloudfront.net/img/profile/a2466b71-d4ec-46a0-b922-12312e331e82";

  expect(isValidImageSrc(invalidSrc)).toBe(false);
  expect(isValidImageSrc(validSrc)).toBe(true);
});
