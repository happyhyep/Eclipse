import { useAuth } from "../Context/auth/auth";
import { Box } from "../components/Styled/Box";
import { Link } from "react-router-dom";
import { PageDiv } from "../pages/Recruit";
import { UserBox } from "../components/Styled/UserBox";
import { useState } from "react";
import { TextareaInput } from "../components/Styled/input";

function MyProfile() {
  const auth = useAuth();
  const { user } = auth;
  const [inputs, setInputs] = useState({
    etc: "",
  });
  const onChange = (e) => {
    if (e.target.name === "etc") {
      setInputs({
        etc: e.target.value,
      });
    }
  };
  const {
    profileImage,
    name,
    email,
    nickname,
    department,
    department_score,
    all_score,
    student_id,
  } = user;
  const onClick = () => {
    alert("수정완료");
    setInputs({ etc: "" });
  };
  return (
    <PageDiv
      style={{
        position: "fixed",
        bottom: "10%",
        width: "100%",
      }}
    >
      <h1>
        <a
          style={{
            color: "black",
            fontSize: "min(6vw, 40px)",
            fontFamily: "Neo",
            fontSize: "50px",
          }}
        >
          {user.nickname}
        </a>
      </h1>
      <p>
        <UserBox width="300px">
          {department} {student_id}학번 / {department_score} (전공학점)
        </UserBox>
      </p>

      <div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          {profileImage ? (
            <img src={profileImage} width="300px" height="300px" />
          ) : (
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              width="300px"
              height="300px"
            />
          )}
          <div
            style={{
              fontFamily: "Neo",
              fontSize: "15px",
              marginLeft: "40px",
              marginRight: "30px",
            }}
          >
            나를 소개해요 {"  "}
            <div style={{ display: "flex" }}>
              <TextareaInput
                name="etc"
                type="text"
                value={inputs.etc}
                onChange={onChange}
                width="100%"
              ></TextareaInput>
              <button onClick={onClick}>수정하기</button>
            </div>
          </div>
        </div>
      </div>
    </PageDiv>
  );
}

export default MyProfile;
