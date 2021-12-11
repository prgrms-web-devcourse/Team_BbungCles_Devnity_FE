import Text from "../base/Text";
import ProfileBox from "../ProfileBox/ProfileBox";
import PeriodText from "../PeriodText";
import ApplicantCountText from "../ApplicantCountText";
import ViewText from "../ViewText";
import theme from "../../assets/theme";
import { GatherData } from "../GatherMain/GatherMain";
import {
  Category,
  Finish,
  ItemContainer,
  ItemDetail,
  InfoWrapper,
  FinishItemContainer,
  GatherLink,
} from "./styles";
import { categoryName } from "../../constants";

interface Props {
  selectedCategory?: string;
  gatherData: Array<GatherData>;
}

const GatherList = ({ selectedCategory, gatherData }: Props) => {
  const gather = selectedCategory
    ? gatherData.filter(
        (item) =>
          categoryName[item.category] === categoryName[selectedCategory] &&
          item.status === "GATHERING"
      )
    : gatherData.filter((item) => item.status === "GATHERING");
  const finishGather = selectedCategory
    ? gatherData.filter(
        (item) =>
          categoryName[item.category] === categoryName[selectedCategory] &&
          item.status !== "GATHERING"
      )
    : gatherData.filter((item) => item.status !== "GATHERING");

  return (
    <>
      {gather?.map((item) => (
        <GatherLink to={`/gatherList/${item.gatherId}`} key={item.gatherId}>
          <ItemContainer>
            <Category>{categoryName[item.category]}</Category>
            <ItemDetail>
              <Text>{item.title}</Text>
              <InfoWrapper>
                <PeriodText
                  createdDate={item.createdDate}
                  deadLine={item.deadLine}
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
              src={item.profileImgUrl}
              name={item.name}
              course={item.course}
              generation={item.generation}
            />
          </ItemContainer>
        </GatherLink>
      ))}
      {finishGather?.map((item) => (
        <GatherLink to={`/gatherList/${item.gatherId}`} key={item.gatherId}>
          <FinishItemContainer>
            <Finish>모집 마감</Finish>
            <Category>{categoryName[item.category]}</Category>
            <ItemDetail>
              <Text>{item.title}</Text>
              <InfoWrapper>
                <PeriodText
                  createdDate={item.createdDate}
                  deadLine={item.deadLine}
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
              src={item.profileImgUrl}
              name={item.name}
              course={item.course}
              generation={item.generation}
            />
          </FinishItemContainer>
        </GatherLink>
      ))}
    </>
  );
};

export default GatherList;
