import { RiVipCrownFill } from "react-icons/ri";
import theme from "../../../../../assets/theme";
import {
  ResponseApplicant,
  ResponseAuthor,
} from "../../../../../types/mapgakco";
import UserProfileImage from "../../../../UserProfileImage/UserProfileImage";

interface Props {
  author: ResponseAuthor;
  applicants: ResponseApplicant[];
}

const ParticipantList = ({ author, applicants }: Props) => {
  return (
    <ul className="participants" style={{ display: "flex" }}>
      <li className="participant author" key={author?.userId}>
        <div className="image-wrapper">
          <RiVipCrownFill color={theme.colors.crownGold} />
          <UserProfileImage
            title={`주최자: ${author?.name}`}
            imageUrl={author?.profileImgUrl}
            size={24}
            style={{
              border: `1px solid ${theme.colors.crownGold}`,
            }}
          />
        </div>
      </li>
      {applicants?.map(({ userId, name, profileImgUrl }) => (
        <li key={userId} className="participant">
          <UserProfileImage
            title={name}
            imageUrl={profileImgUrl}
            size={24}
            style={{ border: "1px solid #fff" }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ParticipantList;
