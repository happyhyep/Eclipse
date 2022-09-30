import { useParams } from "react-router-dom";
import { PageDiv } from "../Styled/PageDiv";

const TimetableInfo = () => {
  const { id } = useParams();
  return (
    <div>
      <PageDiv>시간표 상세 페이지</PageDiv>
    </div>
  );
};

export default TimetableInfo;
