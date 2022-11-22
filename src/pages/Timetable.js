import { useEffect, useState } from "react";
import { PageDiv } from "./Recruit";
import axios from "axios";
import { Box } from "../components/Styled/Box";
import StudentsProfile from "../components/Student/StudentsProfile";
import { tempUser } from "../store/temp/tempUserData";
import SelectTimetable from "../components/Student/SelectTimetable";
import { useAuth } from "../Context/auth/auth";
import { tempUser2 } from "../store/temp/tempUserData";
const Timetable = () => {
  const [allUserList, setAllUserList] = useState(tempUser2);
  const auth = useAuth();

  // @ts-ignore

  return (
    <>
      <PageDiv>
        <h1>
          <a
            style={{
              color: "black",
              fontSize: "min(6vw, 30px)",
              fontFamily: "neo",
            }}
          >
            어떤 과목을 들을까?
          </a>
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {allUserList &&
            allUserList.map((user) => (
              <SelectTimetable key={user.id} user={user} />
            ))}
        </div>
      </PageDiv>
    </>
  );
};

export default Timetable;
