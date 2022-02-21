import React, { useEffect, useState } from "react";
import { Map, MapTypeControl, ZoomControl } from "react-kakao-maps-sdk";
import { useQueryClient } from "react-query";
import { common, COORDS, CourseKeyType } from "../../constants";
import useUsersLocationsFormik from "../../hooks/useUsersLocationsFormik";
import useUsersLocationsQuery from "../../hooks/useUsersLocationsQuery";
import { Position } from "../../types/commonTypes";
import { UserLocationModel } from "../../types/userLocation";
import { getUserMarkerOverlays } from "../../utils/map/overlay";
import UserMarker from "../MapgakcoMap/UserMarker";
import { UserData } from "../MyProfile/types";
import SearchedUsers from "./SearchedUsers/SearchedUsers";
import Text from "../base/Text";
import {
  Container,
  MapFloatControlContainer,
  SearchFormContainer,
  SelectContainer,
  Select,
  VerticalDivider,
  SearchInput,
} from "./UsersMap.styles";
import theme from "../../assets/theme";

interface Props {
  center: Position;
  currentUser: UserData;
  onSearchedUserClick: (userLocation: UserLocationModel) => void;
}

const UsersMap = ({ center, currentUser, onSearchedUserClick }: Props) => {
  const queryClient = useQueryClient();

  const formik = useUsersLocationsFormik({
    initialValues: {
      name: "",
      course: currentUser?.user?.course,
      generation: currentUser?.user?.generation,
      role: currentUser?.user?.role,
    },
    submitHandler: () => {
      queryClient.invalidateQueries(["usersLocations", formik.values]);
    },
  });

  const { data: usersLocations, isLoading } = useUsersLocationsQuery({
    // TODO: 빠른 개발을 위해 대한민국 전체 좌표 범위를 사용한다. 사용자가 지도의 범위를 수정하면 해당하는 좌표 범위만 보여주도록 하는 기능을 추후 도입한다.
    course:
      formik.values.course ||
      (currentUser?.user?.course as CourseKeyType) ||
      "FE",
    generation: formik.values.generation || currentUser?.user?.generation,
    currentNEY: COORDS.KOREA_NEY,
    currentNEX: COORDS.KOREA_NEX,
    currentSWY: COORDS.KOREA_SWY,
    currentSWX: COORDS.KOREA_SWX,
  });

  const [filteredUserLocations, setFilteredUserLocations] =
    useState<UserLocationModel[]>(usersLocations);
  const [userSearchText, setUserSearchText] = useState("");

  const handleUserSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSearchText(e.target.value);

    setFilteredUserLocations(() =>
      usersLocations?.filter((userLocation: UserLocationModel) =>
        userLocation?.name.toLowerCase().includes(e.target.value)
      )
    );
  };

  const userMarkerOverlays = getUserMarkerOverlays(usersLocations, currentUser);

  useEffect(() => {
    setFilteredUserLocations(usersLocations);
  }, [usersLocations]);

  return (
    <Container>
      <MapFloatControlContainer>
        <SearchFormContainer onSubmit={formik.handleSubmit}>
          <SelectContainer>
            <Select
              id="generation"
              name="generation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.generation}
            >
              <option value="">{common.text.GENERATION}</option>
              {[
                { value: "1", label: "1기" },
                { value: "2", label: "2기" },
              ].map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>

            <VerticalDivider />

            <Select
              id="course"
              name="course"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.course}
            >
              <option value="">{common.text.COURSE}</option>
              {common.courses.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </SelectContainer>
        </SearchFormContainer>
        <SearchInput
          type="text"
          name="user-search"
          placeholder="이름을 검색하세요."
          value={userSearchText}
          onChange={handleUserSearchChange}
          autoComplete="off"
          customStyle={{
            borderRadius: 0,
            padding: "6px",
            display: usersLocations?.length > 0 ? "block" : "none",
          }}
        />
        {isLoading ? (
          <Text style={{ backgroundColor: theme.colors.white, padding: "4px" }}>
            데이터를 불러오는 중입니다...
          </Text>
        ) : null}
        <SearchedUsers
          usersLocations={filteredUserLocations}
          onUserClick={onSearchedUserClick}
        />
      </MapFloatControlContainer>
      <Map
        center={{
          lat: center.lat,
          lng: center.lng,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
        level={4}
        isPanto
      >
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        {userMarkerOverlays.map(
          ({ position, imageUrl, options: { color, text } }, index) => (
            <UserMarker
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              position={position}
              imageUrl={imageUrl}
              text={text}
              color={color}
            />
          )
        )}
      </Map>
    </Container>
  );
};

export default UsersMap;
