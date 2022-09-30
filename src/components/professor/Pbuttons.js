import { useState } from "react";

const Pbuttons = () => {
  const [isRequest, setIsRequest] = useState(false);
  const onRequestHandler = async (targetUserId) => {
    //alert(`❗친구요청실패❗${e}`); //주석지우기 (8/23)
    setIsRequest(true);
    alert("대학원 섭외 완료!"); // 지우기 (8/23)
  };
  const onCancelHandler = () => {
    setIsRequest(false);
    alert("요청 취소 완료!");
  };
  return (
    <>
      {!isRequest ? (
        <button
          onClick={() => {
            onRequestHandler();
          }}
          style={{
            paddingBottom: "1px",
            height: "50px",
            marginTop: "10px",
            fontSize: "13px",
            fontFamily: "Neo",
            color: "black",
            borderRadius: "8px",
          }}
        >
          💌 대학원 섭외하기
        </button>
      ) : (
        <button
          onClick={() => {
            onCancelHandler();
          }}
          style={{ marginTop: "10px", fontSize: "15px", color: "black" }}
        >
          ❌ 섭외 취소하기
        </button>
      )}
    </>
  );
};

export default Pbuttons;
