import { Container, HiddenParagraph, MyProfileForm } from "./styles";

const MyProfile = () => {
  const mbtis: string[] = ["ISTJ", "ISTP"];

  return (
    <Container>
      <MyProfileForm>
        <img
          src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100"
          alt="profile"
        />

        <label htmlFor="profileImgUrl">
          <HiddenParagraph>프로필사진</HiddenParagraph>
          <input type="file" name="profileImgUrl" accept="image/*" />
        </label>

        <label htmlFor="name">
          이름
          <input type="text" name="name" />
        </label>

        <label htmlFor="email">
          이메일
          <input type="text" name="email" />
        </label>

        <label htmlFor="generation">
          기수
          <input type="text" name="generation" />
        </label>

        <label htmlFor="course">
          코스
          <input type="text" name="course" />
        </label>

        <label htmlFor="mbti">
          MBTI
          <select name="mbti">
            <option value="">MBTI를 선택해주세요</option>
            {mbtis.map((mbti) => (
              <option key={mbti} value={mbti}>
                {mbti}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="githubUrl">
          깃허브
          <input type="text" name="githubUrl" />
        </label>

        <label htmlFor="blogUrl">
          블로그
          <input type="text" name="blogUrl" />
        </label>

        <label htmlFor="summary">
          한줄 소개
          <input type="text" name="summary" />
        </label>

        <div>자기소개 MD 영역</div>

        <div>내 위치 지도 API 영역</div>

        <button type="submit">수정</button>
      </MyProfileForm>
    </Container>
  );
};

export default MyProfile;
