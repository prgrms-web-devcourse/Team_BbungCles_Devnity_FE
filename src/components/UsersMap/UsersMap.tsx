import { Map } from "react-kakao-maps-sdk";
import { courses, generations, roles } from "../../../fixtures/selectDatas";
import { common } from "../../constants";
import { Formik } from "../../hooks/useUsersLocationsFormik";
import { Position } from "../../types/commonTypes";
import { ResponseUserLocation } from "../../types/userLocation";
import { getUserMarkerOverlays } from "../../utils/map/overlay";
import Input from "../base/Input";
import Text from "../base/Text";
import { Container, MapFloatContainer } from "../MapgakcoMap/styles";
import UserMarker from "../MapgakcoMap/UserMarker";
import { UserData } from "../MyProfile/types";
import {
  Button,
  ButtonWrapper,
  InputWrapper,
  SearchBarFormContainer,
  Select,
} from "../UserList/styles";

interface Props {
  center: Position;
  usersLocations?: ResponseUserLocation[];
  currentUser: UserData;
  formik: Formik;
}

const UsersMap = ({ center, usersLocations, currentUser, formik }: Props) => {
  const userMarkerOverlays = getUserMarkerOverlays(usersLocations, currentUser);

  return (
    <Container>
      <MapFloatContainer>
        <SearchBarFormContainer onSubmit={formik.handleSubmit}>
          <InputWrapper>
            <Select
              id="generation"
              name="generation"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.generation}
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.course}
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
            </Select>
            <Input
              type="text"
              name="name"
              placeholder={common.message.ENTER_SEARCH_TERM}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
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
      </MapFloatContainer>
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
