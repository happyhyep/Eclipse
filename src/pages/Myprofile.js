import { useAuth } from "../Context/auth/auth";
import { Box } from "../components/Styled/Box";
import { Link } from "react-router-dom";
import { PageDiv } from "../components/Styled/PageDiv";
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
  return (
    <PageDiv>
      <h1>
        <a style={{ color: "black", fontSize: "min(6vw, 40px)" }}>
          {user.nickname}
        </a>
      </h1>

      <div>
        {profileImage ? (
          <img src={profileImage} width="300px" height="300px" />
        ) : (
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            width="300px"
            height="300px"
          />
        )}

        <UserBox>{nickname}</UserBox>
        <p>
          <UserBox>
            {department} {student_id}학번 / {department_score} (전공학점)
          </UserBox>
        </p>
        <div style={{ display: "flex" }}>
          <TextareaInput
            name="etc"
            type="text"
            value={inputs.etc}
            onChange={onChange}
            width="100%"
          ></TextareaInput>
          <button>수정하기</button>
        </div>
      </div>
    </PageDiv>
  );
}

export default MyProfile;
