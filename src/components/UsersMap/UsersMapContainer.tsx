import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { globalMyProfile } from "../../atoms/user";
import { common } from "../../constants";
import { UserLocationModel } from "../../types/userLocation";
import UsersMap from "./UsersMap";

const UsersMapContainer = () => {
  const currentUser = useRecoilValue(globalMyProfile);

  const initialCenter = {
    lat: currentUser?.introduction?.latitude || common.defaultPosition.lat,
    lng: currentUser?.introduction?.longitude || common.defaultPosition.lng,
  };

  const [center, setCenter] =
    useState<{ lat: number; lng: number }>(initialCenter);

  const handleSearchedUserClick = (userLocation: UserLocationModel) => {
    setCenter({
      lat: userLocation.latitude,
      lng: userLocation.longitude,
    });
  };

  return (
    <UsersMap
      center={center}
      currentUser={currentUser}
      onSearchedUserClick={handleSearchedUserClick}
    />
  );
};

export default React.memo(UsersMapContainer);
