import PageDiv from "./Recruit";
import { useAuth } from "../Context/auth/auth";
import { Box } from "../components/Styled/Box";
import { Link } from "react-router-dom";

function MyProfile() {
  const auth = useAuth();
  const { user } = auth;
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
        <a style={{ color: "white", fontSize: "min(6vw, 40px)" }}>
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

        <div>{nickname}</div>
        <p>
          {department} {student_id}학번 / {department_score} (전공학점)
        </p>
      </div>
    </PageDiv>
  );
}

export default MyProfile;
