import { useAuth } from "../Context/auth/auth";
import { Box } from "../components/Styled/Box";
import { Link } from "react-router-dom";
import { PageDiv } from "../pages/Recruit";
import { UserBox } from "../components/Styled/UserBox";
import { useState } from "react";
import { TextareaInput } from "../components/Styled/input";
import { BasicInput } from "../components/Styled/input";
import img1 from "../Layout/img/pixel1.png";

function MyProfile() {
  const auth = useAuth();
  const [inputs, setInputs] = useState({
    etc: auth.auth?.etc,
  });
  const onChange = (e) => {
    if (e.target.name === "etc") {
      setInputs({
        etc: e.target.value,
      });
    }
  };

  const onClick = () => {
    modifyEtc(inputs);
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
      <div>
        <div>
        <a
          style={{
            color: "black",
            fontSize: "min(6vw, 40px)",
            fontFamily: "Neo",
            fontSize: "50px",
          }}
        >
          {auth.auth.Nick_Name}
        </a></div>
        <div><a style={{
            color: "black",
            fontSize: "min(6vw, 40px)",
            fontFamily: "Neo",
            fontSize: "20px",
        }}>{auth.auth.name}</a>
      </div></div>
      <p>
      <div style={{width: '500px', height: '50px', fontSize: "15px", fontFamily: "Neo", alignItems: 'center', textAlign: 'center', display: "flex", justifyContent:'center'}}>
          <div style={{display: 'flow'}}>
          <div>{auth.auth.Hakgwa}</div>
          <div>{auth.auth.score} (전공학점)</div>
          </div>
        </div>
      </p>
      <fieldset style={{ fontSize: "15px", fontFamily: "Neo", alignItems: 'center', textAlign: 'center', display: "flex", justifyContent:'center'}}>
      <div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          {img1 ? (
            <img src={img1} width="300px" height="300px" />
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
            나를 소개해요(자기소개, 관심분야, 수상경력, 배우고 싶은 분야 등){" "}
            {"  "}
            <div style={{ marginTop:'20px', display: "flex" }}>
                <textarea
                id="text100"
                rows="10"
                value={inputs.etc}
                onChange={onChange}
                style={{width: "450px"}}></textarea>         
              <button onClick={onClick}>수정하기</button>
            </div>
          </div>
        </div>
      </div>
      </fieldset>
    </PageDiv>
  );
}

export default MyProfile;
