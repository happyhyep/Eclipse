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
          결제페이지
        </a>
      </h1>
    </PageDiv>
  );
}

export default Payment;
