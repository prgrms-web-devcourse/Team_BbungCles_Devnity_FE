import { HiPlusCircle } from "react-icons/hi";
import { useCallback, useRef } from "react";
import { MapMarker } from "react-kakao-maps-sdk";
import { common, myProfile } from "../../constants";
import Input from "../base/Input";
import {
  Container,
  HiddenInput,
  MyProfileForm,
  ProfileImage,
  Select,
  RowContainer,
  ColumnContainer,
  Button,
  MapWrapper,
  StyledMap,
  MarkdownEditorWrapper,
  TitleWrapper,
  ProfileModifyButton,
} from "./styles";
import { IProps } from "./types";
import MarkdownEditor from "../base/MarkdownEditor";
import Text from "../base/Text";
import theme from "../../assets/theme";

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
  { value: 1, label: "1기" },
  { value: 2, label: "2기" },
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
  "ENFJ",
  "ENFP",
  "ESTP",
  "ESFP",
];

const MyProfile = ({
  formik,
  handleImageChange,
  handleMapClick,
  userClickPosition,
  mapCenterPosition,
  editorRef,
}: IProps) => {
  const inputRef = useRef<HTMLInputElement>();
  const handleImageClick = useCallback(() => {
    inputRef.current.click();
  }, []);

  return (
    <Container>
      <TitleWrapper>
        <Text size={32} color={theme.colors.gray800} strong>
          내 프로필
        </Text>
      </TitleWrapper>

      <RowContainer onClick={handleImageClick} cursor>
        <ProfileImage
          src={formik.values.profileImgUrl || common.placeHolderImageSrc}
          alt="profile"
        />
        <ProfileModifyButton>
          <HiPlusCircle size={36} color={theme.colors.primary} />
        </ProfileModifyButton>
      </RowContainer>

      <MyProfileForm onSubmit={formik.handleSubmit}>
        <HiddenInput
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <input
          type="hidden"
          name="profileImgUrl"
          value={formik.values.profileImgUrl || ""}
          onChange={formik.handleChange}
        />

        <RowContainer>
          <ColumnContainer>
            <label htmlFor="name">{common.text.NAME}</label>
            <Input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              disabled
            />
          </ColumnContainer>

          <ColumnContainer>
            <label htmlFor="email">{common.text.EMAIL}</label>
            <Input
              type="text"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              disabled
            />
          </ColumnContainer>
        </RowContainer>

        <RowContainer>
          <ColumnContainer>
            <label htmlFor="generation">{common.text.GENERATION}</label>
            <Select
              name="generation"
              value={formik.values.generation || ""}
              onChange={formik.handleChange}
              disabled
            >
              {generations.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </ColumnContainer>

          <ColumnContainer>
            <label htmlFor="course">{common.text.COURSE}</label>
            <Select
              name="course"
              value={formik.values.course || ""}
              onChange={formik.handleChange}
              disabled
            >
              {courses.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </ColumnContainer>
        </RowContainer>

        <label htmlFor="mbti">{common.text.MBTI}</label>
        <Select
          name="mbti"
          value={formik.values.mbti || ""}
          onChange={formik.handleChange}
        >
          <option value="">{myProfile.selectDefaultLabel.MBTI}</option>
          {mbtis.map((mbti) => (
            <option key={mbti} value={mbti}>
              {mbti}
            </option>
          ))}
        </Select>

        <label htmlFor="githubUrl">{common.text.GITHUB}</label>
        <Input
          type="text"
          name="githubUrl"
          onChange={formik.handleChange}
          value={formik.values.githubUrl || ""}
        />

        <label htmlFor="blogUrl">{common.text.BLOG}</label>
        <Input
          type="text"
          name="blogUrl"
          onChange={formik.handleChange}
          value={formik.values.blogUrl || ""}
        />

        <label htmlFor="summary">{common.text.SUMMARY}</label>
        <Input
          type="text"
          name="summary"
          onChange={formik.handleChange}
          value={formik.values.summary || ""}
          maxLength={common.validation.SUMMARY_MAX_LENGTH}
        />

        <label htmlFor="description">{common.text.DESCRIPTION}</label>
        <input
          type="hidden"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description || ""}
        />
        <MarkdownEditorWrapper>
          <MarkdownEditor
            editorRef={editorRef}
            setEditorText={(value: string) =>
              formik.setFieldValue("description", value)
            }
            value={formik.values.description || ""}
          />
        </MarkdownEditorWrapper>

        <label>{common.text.SET_MY_LOCATION}</label>
        <MapWrapper>
          <StyledMap
            center={
              mapCenterPosition
                ? { lat: mapCenterPosition.lat, lng: mapCenterPosition.lng }
                : { ...common.defaultPosition }
            }
            onClick={handleMapClick}
          >
            {userClickPosition && (
              <MapMarker
                position={{
                  lat: userClickPosition.lat,
                  lng: userClickPosition.lng,
                }}
              />
            )}
          </StyledMap>
        </MapWrapper>

        <Button type="submit">{common.buttonName.MODIFY}</Button>
      </MyProfileForm>
    </Container>
  );
};

export default MyProfile;
