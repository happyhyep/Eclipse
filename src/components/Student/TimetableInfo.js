import { useParams } from "react-router-dom";
import { PageDiv } from "../Styled/PageDiv";
import { useState, useEffect } from "react";
import { UserBox } from "../Styled/UserBox";
import axios from "axios";
const TimetableInfo = () => {
  const { id } = useParams();
  const [timetable, setTimeTable] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-50-18-22-205.us-west-1.compute.amazonaws.com:8080/time_table"
      )
      .then((r) => {
        setTimeTable(r.data);
        console.log(r.data);
      });
  }, []);
  return (
    <div>
      <PageDiv>
        <h1>
          <a
            style={{
              color: "black",
              fontSize: "min(6vw, 40px)",
              fontFamily: "neo",
            }}
          >
            시간표 들여다보기
          </a>
        </h1>
        <div>
          {timetable.map((table, idx) => {
            return (
              <UserBox height="5px" key={table.code}>
                {table.code} {table.name} / {table.professor} / {table.time}
              </UserBox>
            );
          })}
        </div>
      </PageDiv>
    </div>
  );
};

export default TimetableInfo;
