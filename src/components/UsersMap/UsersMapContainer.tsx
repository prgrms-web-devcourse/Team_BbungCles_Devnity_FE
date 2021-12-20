import { useQueryClient } from "react-query";
import { useRecoilValue } from "recoil";
import { globalMyProfile } from "../../atoms/user";
import { common, COORDS, CourseKeyType } from "../../constants";
import useUsersLocationsFormik from "../../hooks/useUsersLocationsFormik";
import useUsersLocationsQuery from "../../hooks/useUsersLocationsQuery";
import UsersMap from "./UsersMap";

const UsersMapContainer = () => {
  const queryClient = useQueryClient();

  const currentUser = useRecoilValue(globalMyProfile);

  const formik = useUsersLocationsFormik({
    initialValues: {
      name: "",
      course: "",
      generation: "",
      role: "",
    },
    submitHandler: () => {
      queryClient.invalidateQueries("usersLocations");
    },
  });

  const { isLoading, data: usersLocations } = useUsersLocationsQuery({
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

  const center = {
    lat: currentUser?.introduction?.latitude || common.defaultPosition.lat,
    lng: currentUser?.introduction?.longitude || common.defaultPosition.lng,
  };

  if (isLoading) {
    return null;
  }

  return (
    <UsersMap
      center={center}
      usersLocations={usersLocations}
      currentUser={currentUser}
      formik={formik}
    />
  );
};

export default UsersMapContainer;
