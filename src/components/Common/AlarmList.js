import { Box } from "../Styled/Box";

const AlarmList = ({ alarm }) => {
  return (
    <div style={{ color: "black", flexDirection: "column" }}>
      <Box
        width="370px"
        height="10px"
        color="black"
        style={{ flexDirection: "row" }}
      >
        {alarm.message}
        <button>확인하기</button>
      </Box>
    </div>
  );
};

export default AlarmList;
