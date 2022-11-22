import React, { useEffect } from "react";
import { PageDiv } from "./../components/Styled/PageDiv";

function Payment() {
  return (
    <PageDiv>
      <h1>
        <a
          style={{
            color: "black",
            fontSize: "min(6vw, 40px)",
            fontFamily: "Neo",
            fontSize: "50px",
          }}
        >
          [ 결제페이지 ]
        </a>
      </h1>
      <h2>
      <a
          style={{
            color: "black",
            fontSize: "min(6vw, 40px)",
            fontFamily: "Neo",
            fontSize: "30px",
          }}
        >
        서비스 준비중....💨
        </a>
      </h2>

      <a
          style={{
            color: "black",
            fontSize: "min(6vw, 40px)",
            fontFamily: "Neo",
            fontSize: "20px",
          }}
        >
        조금만 기다려주세요 🙌
        </a>
    </PageDiv>
  );
}

export default Payment;
