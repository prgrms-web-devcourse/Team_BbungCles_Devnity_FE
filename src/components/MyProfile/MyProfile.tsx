import { ChangeEvent, useCallback, useRef, useState } from "react";
import {
  Container,
  HiddenInput,
  MyProfileForm,
  ProfileImage,
  Input,
  Select,
  RowContainer,
  ColumnContainer,
  Textarea,
  Button,
} from "./styles";
import { IProps } from "./types";

interface SelectOption {
  value: string | number;
  label: string;
}

// TODO : 추후 data로 분리해야 함 (백엔드 API로 받아올 가능성도 있음)
const courses: SelectOption[] = [
  { value: "FE", label: "프론트엔드" },
  { value: "BE", label: "백엔드" },
  { value: "AI", label: "인공지능" },
];
const generations: SelectOption[] = [
  { value: "1", label: "1기" },
  { value: "2", label: "2기" },
];

const mbtis: string[] = [
  "INTJ",
  "INTP",
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INFP",
  "ISTP",
  "ISFP",
  "ENTJ",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFA",
  "ENFP",
  "ESTP",
  "ESFP",
];

const MyProfile = ({ formik }: IProps) => {
  const [image, setImage] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>();

  const handleImageClick = useCallback(() => {
    inputRef.current.click();
  }, []);

  const handleImageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        setImage(result);
        formik.setFieldValue("profileImgUrl", result);
      };
      reader.readAsDataURL(file);
    },
    [formik]
  );

  return (
    <Container>
      <ProfileImage
        src={image || "https://source.unsplash.com/random"}
        alt="profile"
        onClick={handleImageClick}
      />
      <MyProfileForm onSubmit={formik.handleSubmit}>
        <HiddenInput
          ref={inputRef}
          type="file"
          name="profileImgUrl"
          accept="image/*"
          onChange={handleImageChange}
        />
        <RowContainer>
          <ColumnContainer>
            <label htmlFor="name">이름</label>
            <Input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </ColumnContainer>

          <ColumnContainer>
            <label htmlFor="email">이메일</label>
            <Input
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </ColumnContainer>
        </RowContainer>

        <RowContainer>
          <ColumnContainer>
            <label htmlFor="generation">기수</label>
            <Select name="generation">
              {generations.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </ColumnContainer>

          <ColumnContainer>
            <label htmlFor="course">코스</label>
            <Select name="course">
              {courses.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </ColumnContainer>
        </RowContainer>

        <label htmlFor="mbti">MBTI</label>
        <Select name="mbti">
          <option value="">MBTI를 선택해주세요</option>
          {mbtis.map((mbti) => (
            <option key={mbti} value={mbti}>
              {mbti}
            </option>
          ))}
        </Select>

        <label htmlFor="githubUrl">깃허브</label>
        <Input
          type="text"
          name="githubUrl"
          onChange={formik.handleChange}
          value={formik.values.githubUrl}
        />

        <label htmlFor="blogUrl">블로그</label>
        <Input
          type="text"
          name="blogUrl"
          onChange={formik.handleChange}
          value={formik.values.blogUrl}
        />

        <label htmlFor="summary">한줄 소개</label>
        <Input
          type="text"
          name="summary"
          onChange={formik.handleChange}
          value={formik.values.summary}
        />
        {/* TODO: reset.css 처리 및 포커스에 따라 textarea, ReactMarkdown을 구분하여 보여줘도 될듯, 이 부분은 팀원들과 같이 협의 후 진행 */}
        <label htmlFor="description">자기소개</label>
        <Textarea
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        <div>내 위치 지도 API 영역</div>

        <Button type="submit">수정</Button>
      </MyProfileForm>
    </Container>
  );
};

export default MyProfile;
