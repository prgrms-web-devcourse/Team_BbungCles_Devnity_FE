import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useInView } from "react-intersection-observer";
import { courses, generations, roles } from "../../../fixtures/selectDatas";
import { common } from "../../constants";
import Input from "../base/Input";
import Text from "../base/Text";
import ProfileCard from "../ProfileCard/ProfileCard";

import {
  Button,
  Container,
  SearchBarFormContainer,
  UserContainer,
  InputWrapper,
  ButtonWrapper,
  Select,
  ProfileCardWrapper,
  NotFoundResult,
} from "./styles";
import { IProps } from "./types";

const UserList = ({
  pages,
  setFilters,
  isLoading,
  fetchNextPage,
  hasNextPage,
}: IProps) => {
  const { handleChange, handleSubmit, handleBlur, values } = useFormik<{
    name: string;
    course: string;
    generation: string;
    role: string;
  }>({
    initialValues: { name: "", course: "", generation: "", role: "" },
    validationSchema: Yup.string().required(""),
    onSubmit: (formValues, { setSubmitting }) => {
      setSubmitting(true);
      // nextLastId에 null을 넣은 이유는 무한스크롤 외 일반 조회할 때는 필요없기 때문
      setFilters({
        ...formValues,
        nextLastId: null,
        size: common.userListInfinitePageCount,
      });
      setSubmitting(false);
    },
  });

  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView && hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage, isLoading]);

  return (
    <Container>
      <SearchBarFormContainer onSubmit={handleSubmit}>
        <InputWrapper>
          <Select
            id="generation"
            name="generation"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.generation}
          >
            <option value="">{common.text.GENERATION}</option>
            {generations.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
          <Select
            id="course"
            name="course"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.course}
          >
            <option value="">{common.text.COURSE}</option>
            {courses.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
          <Select
            id="role"
            name="role"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
          >
            <option value="">{common.text.ROLE}</option>
            {roles.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
          <Input
            type="text"
            name="name"
            placeholder={common.message.ENTER_SEARCH_TERM}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button type="submit">
            <Text size={12} color="white" strong ellipsisLineClamp={1}>
              {common.text.SEARCH}
            </Text>
          </Button>
        </ButtonWrapper>
      </SearchBarFormContainer>

      {/* TODO: 검색 결과가 없을 경우 */}
      {pages?.pages[0].data.data.values.length === 0 && (
        <NotFoundResult>
          <Text size={32} strong>
            해당 이름을 가진 사용자는 없네요 😥
          </Text>
        </NotFoundResult>
      )}
      {!isLoading && (
        <UserContainer>
          {pages?.pages.map((page, pageIndex) => (
            // eslint-disable-next-line
            <React.Fragment key={`${page}/${pageIndex}`}>
              {page.data.data.values.map((user) => (
                <ProfileCardWrapper
                  key={user.user.userId}
                  role="feed"
                  ref={ref}
                >
                  <ProfileCard user={user} />
                </ProfileCardWrapper>
              ))}
            </React.Fragment>
          ))}
        </UserContainer>
      )}
    </Container>
  );
};

export default UserList;
