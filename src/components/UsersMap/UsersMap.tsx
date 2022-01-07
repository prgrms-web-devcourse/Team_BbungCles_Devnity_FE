import { Map } from "react-kakao-maps-sdk";
import { useQueryClient } from "react-query";
import { common, COORDS, CourseKeyType } from "../../constants";
import useUsersLocationsFormik from "../../hooks/useUsersLocationsFormik";
import useUsersLocationsQuery from "../../hooks/useUsersLocationsQuery";
import { Position } from "../../types/commonTypes";
import { getUserMarkerOverlays } from "../../utils/map/overlay";
import { Container, MapFloatControlWrapper } from "../MapgakcoMap/styles";
import UserMarker from "../MapgakcoMap/UserMarker";
import { UserData } from "../MyProfile/types";
import {
  InputWrapper,
  SearchBarFormContainer,
  Select,
} from "../UserList/styles";

interface Props {
  center: Position;
  currentUser: UserData;
}

const UsersMap = ({ center, currentUser }: Props) => {
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

  const { data: usersLocations } = useUsersLocationsQuery({
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

  const userMarkerOverlays = getUserMarkerOverlays(usersLocations, currentUser);

  return (
    <Container>
      <MapFloatControlWrapper>
        <SearchBarFormContainer
          onSubmit={formik.handleSubmit}
          style={{
            justifyContent: "center",
            boxShadow: "none",
            minWidth: "none",
          }}
        >
          <InputWrapper style={{ justifyContent: "center" }}>
            <Select
              id="generation"
              name="generation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.generation}
              style={{
                padding: "10px 0",
                textAlign: "center",
                borderRadius: "6px",
                width: "100px",
              }}
            >
              <option value="">{common.text.GENERATION}</option>
              {common.generations.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
            <Select
              id="course"
              name="course"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.course}
              style={{
                padding: "10px 0",
                textAlign: "center",
                borderRadius: "6px",
                width: "100px",
              }}
            >
              <option value="">{common.text.COURSE}</option>
              {common.courses.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
            {/* TODO: 명세가 확정되고 필요하면 역할별 검색 기능을 추가한다. */}
            {/* <Select
              id="role"
              name="role"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.role}
            >
              <option value="">{common.text.ROLE}</option>
              {roles.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select> */}
            {/* TODO: 명세가 확정되고 필요하면 이름 검색 기능을 추가한다. */}
            {/* <Input
              type="text"
              name="name"
              placeholder={common.message.ENTER_SEARCH_TERM}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            /> */}
          </InputWrapper>

          {/* TODO: 명세가 확정되고 필요하면 이름 검색 기능을 추가한다. */}
          {/* <ButtonWrapper>
            <Button type="submit">
              <Text size={12} color="white" strong ellipsisLineClamp={1}>
                {common.text.SEARCH}
              </Text>
            </Button>
          </ButtonWrapper> */}
        </SearchBarFormContainer>
      </MapFloatControlWrapper>
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
      >
        {true &&
          userMarkerOverlays.map(
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

    // <Mapbox
    //   center={{ lat: center.lat, lng: center.lng }}
    //   hasCenterMarker
    //   userImageUrl={userImageUrl || common.placeHolderImageSrc}
    //   imageMarkerOverlays={imageMarkerOverlays}
    // />
  );
};

export default UsersMap;
