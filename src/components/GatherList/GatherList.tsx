import Text from "../base/Text";
import ProfileBox from "../ProfileBox/ProfileBox";
import PeriodText from "../PeriodText";
import ApplicantCountText from "../ApplicantCountText";
import ViewText from "../ViewText";
import theme from "../../assets/theme";
import { Gather } from "../../types/gather";
import {
  Category,
  Finish,
  ItemContainer,
  ItemDetail,
  InfoWrapper,
  FinishItemContainer,
  GatherLink,
} from "./styles";
import { categoryDisplayName } from "../../constants";

interface Props {
  selectedCategory?: string;
  gatherData: Array<Gather>;
}

// TODO: 게시글 없을 때 처리
const GatherList = ({ selectedCategory, gatherData }: Props) => {
  const gather = selectedCategory
    ? gatherData?.filter(
        (item) =>
          categoryDisplayName[item.category] ===
            categoryDisplayName[selectedCategory] && item.status === "GATHERING"
      )
    : gatherData?.filter((item) => item.status === "GATHERING");
  const finishGather = selectedCategory
    ? gatherData?.filter(
        (item) =>
          categoryDisplayName[item.category] ===
            categoryDisplayName[selectedCategory] && item.status !== "GATHERING"
      )
    : gatherData?.filter((item) => item.status !== "GATHERING");

  return (
    <>
      {gather?.map((item) => (
        <GatherLink to={`/gatherlist/${item.gatherId}`} key={item.gatherId}>
          <ItemContainer>
            <Category>{categoryDisplayName[item.category]}</Category>
            <ItemDetail>
              <Text>{item.title}</Text>
              <InfoWrapper>
                <PeriodText
                  createdDate={item.createdAt}
                  deadLine={item.deadline}
                  iconColor={theme.colors.gray500}
                  fontSize={12}
                  fontColor={theme.colors.gray600}
                />
                <ApplicantCountText
                  applicantCount={item.applicantCount}
                  applicantLimit={item.applicantLimit}
                  iconColor={theme.colors.gray500}
                  fontSize={12}
                  fontColor={theme.colors.gray600}
                />
                <ViewText
                  view={item.view}
                  iconColor={theme.colors.gray500}
                  fontSize={12}
                  fontColor={theme.colors.gray600}
                />
              </InfoWrapper>
            </ItemDetail>
            <ProfileBox
              src={item.author?.profileImgUrl}
              name={item.author.name}
              course={item.author.course}
              generation={item.author.generation}
            />
          </ItemContainer>
        </GatherLink>
      ))}
      {finishGather?.map((item) => (
        <GatherLink to={`/gatherlist/${item.gatherId}`} key={item.gatherId}>
          <FinishItemContainer>
            <Finish>모집 마감</Finish>
            <Category>{categoryDisplayName[item.category]}</Category>
            <ItemDetail>
              <Text>{item.title}</Text>
              <InfoWrapper>
                <PeriodText
                  createdDate={item.createdAt}
                  deadLine={item.deadline}
                  iconColor={theme.colors.gray500}
                  fontSize={12}
                  fontColor={theme.colors.gray600}
                />
                <ApplicantCountText
                  applicantCount={item.applicantCount}
                  applicantLimit={item.applicantLimit}
                  iconColor={theme.colors.gray500}
                  fontSize={12}
                  fontColor={theme.colors.gray600}
                />
                <ViewText
                  view={item.view}
                  iconColor={theme.colors.gray500}
                  fontSize={12}
                  fontColor={theme.colors.gray600}
                />
              </InfoWrapper>
            </ItemDetail>
            <ProfileBox
              src={item.author?.profileImgUrl}
              name={item.author.name}
              course={item.author.course}
              generation={item.author.generation}
            />
          </FinishItemContainer>
        </GatherLink>
      ))}
    </>
  );
};

export default GatherList;
