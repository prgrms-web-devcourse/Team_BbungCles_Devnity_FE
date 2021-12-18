import Text from "../base/Text";
import ProfileBox from "../ProfileBox/ProfileBox";
import PeriodText from "../PeriodText";
import ApplicantCountText from "../ApplicantCountText";
import ViewText from "../ViewText";
import theme from "../../assets/theme";
import { Gather } from "../../types/gather";
import {
  TextContainer,
  Category,
  Finish,
  ItemContainer,
  ItemDetail,
  InfoWrapper,
  FinishItemContainer,
  GatherLink,
} from "./styles";
import { categoryDisplayName, routes } from "../../constants";

interface Props {
  selectedCategory?: string;
  gatherData: Array<Gather>;
  page?: string;
}

const GatherList = ({ selectedCategory, gatherData, page }: Props) => {
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
        <GatherLink
          to={`${routes.GATHERLIST}/${item.gatherId}`}
          key={item.gatherId}
        >
          <ItemContainer>
            <Category>{categoryDisplayName[item.category]}</Category>
            <ItemDetail>
              <TextContainer page={page}>
                <Text ellipsisLineClamp={1}>{item.title}</Text>
              </TextContainer>
              <InfoWrapper page={page}>
                <PeriodText
                  createdDate={item.createdAt}
                  deadLine={item.deadline}
                  iconColor={theme.colors.gray500}
                  fontColor={theme.colors.gray600}
                />
                <ApplicantCountText
                  applicantCount={item.applicantCount}
                  applicantLimit={item.applicantLimit}
                  iconColor={theme.colors.gray500}
                  fontColor={theme.colors.gray600}
                />
                <ViewText
                  view={item.view}
                  iconColor={theme.colors.gray500}
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
        <GatherLink
          to={`${routes.GATHERLIST}/${item.gatherId}`}
          key={item.gatherId}
        >
          <FinishItemContainer>
            <Finish page={page}>모집 마감</Finish>
            <Category>{categoryDisplayName[item.category]}</Category>

            <ItemDetail>
              <TextContainer page={page}>
                <Text>{item.title}</Text>
              </TextContainer>
              <InfoWrapper page={page}>
                <PeriodText
                  createdDate={item.createdAt.substring(0, 10)}
                  deadLine={item.deadline.substring(0, 10)}
                  iconColor={theme.colors.gray500}
                  fontColor={theme.colors.gray600}
                />
                <ApplicantCountText
                  applicantCount={item.applicantCount}
                  applicantLimit={item.applicantLimit}
                  iconColor={theme.colors.gray500}
                  fontColor={theme.colors.gray600}
                />
                <ViewText
                  view={item.view}
                  iconColor={theme.colors.gray500}
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
