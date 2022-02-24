import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Text from "../base/Text";
import ProfileCard from "../ProfileCard/ProfileCard";
import {
  Container,
  UserContainer,
  ProfileCardWrapper,
  NotFoundResult,
} from "./styles";
import { IProps } from "./types";
import UserSearchForm from "../UserSearchForm";

const UserList = ({
  pages,
  setFilters,
  isLoading,
  fetchNextPage,
  hasNextPage,
}: IProps) => {
  const [ref, inView] = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (inView && hasNextPage && !isLoading) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage, isLoading]);

  return (
    <Container>
      <UserSearchForm setFilters={setFilters} />

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
