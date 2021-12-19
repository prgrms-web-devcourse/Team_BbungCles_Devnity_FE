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
import { categoryColor } from "../../constants/categoryName";

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

  if (gatherData && gatherData.length === 0) {
    return (
      <Text size={16} style={{ padding: "12px" }}>
        모집이 없습니다.
      </Text>
    );
  }

  return (
    <>
      {gather
        ?.sort((a, b) => {
          return +new Date(b.createdAt) - +new Date(a.createdAt);
        })
        .map((item) => (
          <GatherLink
            to={`${item?.gatherId ? routes.GATHERLIST : routes.MAPGAKCOLIST}/${
              item?.gatherId ? item?.gatherId : item?.mapgakcoId
            }`}
            key={item?.gatherId ? item?.gatherId : item?.mapgakcoId}
          >
            <ItemContainer>
              <Category
                style={{ backgroundColor: categoryColor[item?.category] }}
              >
                {item?.category
                  ? categoryDisplayName[item?.category]
                  : "맵각코"}
              </Category>
              <ItemDetail>
                <TextContainer page={page}>
                  <Text ellipsisLineClamp={1} size={14}>
                    {item.title}
                  </Text>
                </TextContainer>
                <InfoWrapper page={page}>
                  {item?.meetingAt ? (
                    <PeriodText
                      deadLine={item?.meetingAt.substring(0, 10)}
                      iconColor={theme.colors.gray500}
                      fontColor={theme.colors.gray600}
                    />
                  ) : (
                    <PeriodText
                      createdDate={item.createdAt.substring(0, 10)}
                      deadLine={item?.deadline.substring(0, 10)}
                      iconColor={theme.colors.gray500}
                      fontColor={theme.colors.gray600}
                    />
                  )}
                  <ApplicantCountText
                    applicantCount={item.applicantCount}
                    applicantLimit={item.applicantLimit}
                    iconColor={theme.colors.gray500}
                    fontColor={theme.colors.gray600}
                  />
                  {item?.view ? (
                    <ViewText
                      view={item?.view}
                      iconColor={theme.colors.gray500}
                      fontColor={theme.colors.gray600}
                    />
                  ) : undefined}
                </InfoWrapper>
              </ItemDetail>
              <ProfileBox
                src={item.author?.profileImgUrl}
                name={item.author.name}
                course={item.author.course}
                generation={item.author.generation}
                fontSize={14}
              />
            </ItemContainer>
          </GatherLink>
        ))}
      {finishGather
        ?.sort((a, b) => {
          return +new Date(b.createdAt) - +new Date(a.createdAt);
        })
        .map((item) => (
          <GatherLink
            to={`${item?.gatherId ? routes.GATHERLIST : routes.MAPGAKCOLIST}/${
              item?.gatherId ? item?.gatherId : item?.mapgakcoId
            }`}
            key={item?.gatherId ? item?.gatherId : item?.mapgakcoId}
          >
            <FinishItemContainer>
              <Finish page={page}>모집 마감</Finish>
              <Category
                style={{ backgroundColor: categoryColor[item?.category] }}
              >
                {item?.category
                  ? categoryDisplayName[item?.category]
                  : "맵각코"}
              </Category>
              <ItemDetail>
                <TextContainer page={page}>
                  <Text ellipsisLineClamp={1} size={14}>
                    {item.title}
                  </Text>
                </TextContainer>
                <InfoWrapper page={page}>
                  {item?.meetingAt ? (
                    <PeriodText
                      deadLine={item?.meetingAt.substring(0, 10)}
                      iconColor={theme.colors.gray500}
                      fontColor={theme.colors.gray600}
                    />
                  ) : (
                    <PeriodText
                      createdDate={item.createdAt.substring(0, 10)}
                      deadLine={item?.deadline.substring(0, 10)}
                      iconColor={theme.colors.gray500}
                      fontColor={theme.colors.gray600}
                    />
                  )}
                  <ApplicantCountText
                    applicantCount={item.applicantCount}
                    applicantLimit={item.applicantLimit}
                    iconColor={theme.colors.gray500}
                    fontColor={theme.colors.gray600}
                  />
                  {item?.view ? (
                    <ViewText
                      view={item?.view}
                      iconColor={theme.colors.gray500}
                      fontColor={theme.colors.gray600}
                    />
                  ) : undefined}
                </InfoWrapper>
              </ItemDetail>
              <ProfileBox
                src={item.author?.profileImgUrl}
                name={item.author.name}
                course={item.author.course}
                generation={item.author.generation}
                fontSize={14}
              />
            </FinishItemContainer>
          </GatherLink>
        ))}
    </>
  );
};

export default GatherList;
