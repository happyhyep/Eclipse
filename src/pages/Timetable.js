import { useEffect, useState } from "react";
import { PageDiv } from "./Recruit";
import axios from "axios";
import { Box } from "../components/Styled/Box";
import StudentsProfile from "../components/Student/StudentsProfile";
import { tempUser } from "../store/temp/tempUserData";
import SelectTimetable from "../components/Student/SelectTimetable";
const Timetable = () => {
  const [allUserList, setAllUserList] = useState(tempUser);
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
  // @ts-ignore

  return (
    <>
      <PageDiv>
        <h1>
          <a style={{ color: "white", fontSize: "min(6vw, 40px)" }}>
            원하는 시간표 찾기
          </a>
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {allUserList &&
            allUserList.map((user) => (
              <SelectTimetable
                key={user.id}
                user={user}
                timetable={timetable}
              />
            ))}
        </div>
      </PageDiv>
    </>
  );
};

export default Timetable;
