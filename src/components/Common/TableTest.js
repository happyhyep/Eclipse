import { PageDiv } from "../Styled/PageDiv";
import { useState, useEffect } from "react";
import { tempUser } from "../../store/temp/tempUserData";
import { UserBox } from "../Styled/UserBox";

import axios from "axios";
const TableTest = () => {
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
  return (
    <PageDiv>
      <h1>
        <a style={{ color: "white", fontSize: "min(6vw, 40px)" }}>
          시간표 추천
        </a>
      </h1>
      <div>
        {timetable.map((subject) => {
          <div key={subject.code} style={{ display: "flex" }}>
            <UserBox>
              {subject.code} : {subject.name} / {subject.professor}
            </UserBox>
          </div>;
        })}
      </div>
    </PageDiv>
  );
};
export default TableTest;

import styled from "styled-components";
