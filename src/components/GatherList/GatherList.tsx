/* eslint-disable @typescript-eslint/no-explicit-any */
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
  GatherLink,
  Container,
  FinishItem,
} from "./styles";
import { categoryDisplayName, routes } from "../../constants";
import CommentText from "../CommentText";

interface Props {
  gatherData: Array<Gather>;
  pagee?: string;
  pages?: any;
  gatherRef?: any;
}

interface GathersProps {
  gatherData: Gather[];
  isGathering: boolean;
}

const getGathers = ({ gatherData, isGathering = true }: GathersProps) => {
  return isGathering
    ? gatherData?.filter((item) => item.status === "GATHERING")
    : gatherData?.filter((item) => item.status !== "GATHERING");
};

const GatherList = ({ gatherData, pagee, pages, gatherRef }: Props) => {
  const gather = getGathers({ gatherData, isGathering: true });
  const finishGather = getGathers({ gatherData, isGathering: false });

  if (!pages && gatherData && gatherData.length === 0) {
    return (
      <Text size={16} style={{ padding: "12px" }}>
        모집이 없습니다.
      </Text>
    );
  }

  return (
    <>
      {pages?.pages.map((page, pageIndex) => (
        // eslint-disable-next-line
        <Container key={`${page}/${pageIndex}`}>
          {page.data.data.values.map((item) => (
            <div key={item.gatherId} ref={gatherRef}>
              <GatherLink
                to={`${
                  item?.gatherId ? routes.GATHERLIST : routes.MAPGAKCOLIST
                }/${item?.gatherId ? item?.gatherId : item?.mapgakcoId}`}
                key={item?.gatherId ? item?.gatherId : item?.mapgakcoId}
              >
                <ItemContainer
                  style={item.status !== "GATHERING" ? FinishItem : null}
                >
                  {item.status !== "GATHERING" ? (
                    <Finish page={pagee}>모집 마감</Finish>
                  ) : null}
                  <Category
                    style={{
                      backgroundColor: theme.colors[item.category],
                      color: "black",
                    }}
                  >
                    {item?.category
                      ? categoryDisplayName[item?.category]
                      : "맵각코"}
                  </Category>
                  <ItemDetail>
                    <TextContainer page={pagee}>
                      <Text ellipsisLineClamp={1} size={14}>
                        {item.title}
                      </Text>
                    </TextContainer>
                    <InfoWrapper page={pagee}>
                      {item?.meetingAt ? (
                        <PeriodText
                          deadLine={item?.meetingAt.substring(0, 10)}
                          iconColor={theme.colors.gray500}
                          fontColor={theme.colors.gray600}
                        />
                      ) : (
                        <PeriodText
                          createdDate={item?.createdAt.substring(0, 10)}
                          deadLine={item?.deadline.substring(0, 10)}
                          iconColor={theme.colors.gray500}
                          fontColor={theme.colors.gray600}
                        />
                      )}
                      <ApplicantCountText
                        applicantCount={item?.applicantCount}
                        applicantLimit={item?.applicantLimit}
                        iconColor={theme.colors.gray500}
                        fontColor={theme.colors.gray600}
                      />
                      <ViewText
                        view={item?.view || 0}
                        iconColor={theme.colors.gray500}
                        fontColor={theme.colors.gray600}
                      />
                      <CommentText
                        commentCount={item?.commentCount || 0}
                        iconColor={theme.colors.gray500}
                        fontColor={theme.colors.gray600}
                      />
                    </InfoWrapper>
                  </ItemDetail>
                  <ProfileBox
                    src={item?.author?.profileImgUrl}
                    name={item?.author.name}
                    course={item?.author.course}
                    generation={item?.author.generation}
                    fontSize={14}
                  />
                </ItemContainer>
              </GatherLink>
            </div>
          ))}
        </Container>
      ))}

      {pagee || gatherData
        ? gather
            ?.sort((a, b) => {
              return +new Date(b.createdAt) - +new Date(a.createdAt);
            })
            .map((item) => (
              <GatherLink
                to={`${
                  item?.gatherId ? routes.GATHERLIST : routes.MAPGAKCOLIST
                }/${item?.gatherId ? item?.gatherId : item?.mapgakcoId}`}
                key={item?.gatherId ? item?.gatherId : item?.mapgakcoId}
              >
                <ItemContainer
                  style={item?.status !== "GATHERING" ? FinishItem : null}
                >
                  {item.status !== "GATHERING" ? (
                    <Finish page={pagee}>모집 마감</Finish>
                  ) : null}
                  <Category
                    style={{
                      backgroundColor: theme.colors[item?.category],
                      color: "black",
                    }}
                  >
                    {item?.category
                      ? categoryDisplayName[item?.category]
                      : "맵각코"}
                  </Category>
                  <ItemDetail>
                    <TextContainer page={pagee}>
                      <Text ellipsisLineClamp={1} size={14}>
                        {item?.title}
                      </Text>
                    </TextContainer>
                    <InfoWrapper page={pagee}>
                      {item?.meetingAt ? (
                        <PeriodText
                          deadLine={item?.meetingAt.substring(0, 10)}
                          iconColor={theme.colors.gray500}
                          fontColor={theme.colors.gray600}
                        />
                      ) : (
                        <PeriodText
                          createdDate={item?.createdAt.substring(0, 10)}
                          deadLine={item?.deadline.substring(0, 10)}
                          iconColor={theme.colors.gray500}
                          fontColor={theme.colors.gray600}
                        />
                      )}
                      <ApplicantCountText
                        applicantCount={item?.applicantCount}
                        applicantLimit={item?.applicantLimit}
                        iconColor={theme.colors.gray500}
                        fontColor={theme.colors.gray600}
                      />
                      <ViewText
                        view={item?.view || 0}
                        iconColor={theme.colors.gray500}
                        fontColor={theme.colors.gray600}
                      />
                      <CommentText
                        commentCount={item?.commentCount || 0}
                        iconColor={theme.colors.gray500}
                        fontColor={theme.colors.gray600}
                      />
                    </InfoWrapper>
                  </ItemDetail>
                  <ProfileBox
                    src={item?.author?.profileImgUrl}
                    name={item?.author.name}
                    course={item?.author.course}
                    generation={item?.author.generation}
                    fontSize={14}
                  />
                </ItemContainer>
              </GatherLink>
            ))
        : null}

      {pagee || gatherData
        ? finishGather
            ?.sort((a, b) => {
              return +new Date(b.createdAt) - +new Date(a.createdAt);
            })
            .map((item) => (
              <GatherLink
                to={`${
                  item?.gatherId ? routes.GATHERLIST : routes.MAPGAKCOLIST
                }/${item?.gatherId ? item?.gatherId : item?.mapgakcoId}`}
                key={item?.gatherId ? item?.gatherId : item?.mapgakcoId}
              >
                <ItemContainer
                  style={item.status !== "GATHERING" ? FinishItem : null}
                >
                  {item.status !== "GATHERING" ? (
                    <Finish page={pagee}>모집 마감</Finish>
                  ) : null}
                  <Category
                    style={{
                      backgroundColor: theme.colors[item.category],
                      color: "black",
                    }}
                  >
                    {item?.category
                      ? categoryDisplayName[item?.category]
                      : "맵각코"}
                  </Category>
                  <ItemDetail>
                    <TextContainer page={pagee}>
                      <Text ellipsisLineClamp={1} size={14}>
                        {item.title}
                      </Text>
                    </TextContainer>
                    <InfoWrapper page={pagee}>
                      {item?.meetingAt ? (
                        <PeriodText
                          deadLine={item?.meetingAt.substring(0, 10)}
                          iconColor={theme.colors.gray500}
                          fontColor={theme.colors.gray600}
                        />
                      ) : (
                        <PeriodText
                          createdDate={item?.createdAt.substring(0, 10)}
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
                      <ViewText
                        view={item?.view || 0}
                        iconColor={theme.colors.gray500}
                        fontColor={theme.colors.gray600}
                      />
                      <CommentText
                        commentCount={item.commentCount || 0}
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
                    fontSize={14}
                  />
                </ItemContainer>
              </GatherLink>
            ))
        : null}
    </>
  );
};

export default GatherList;
