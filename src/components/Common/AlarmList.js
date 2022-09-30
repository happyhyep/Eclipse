import { Box } from "../Styled/Box";

const AlarmList = ({ alarm }) => {
  return (
    <div style={{ color: "black", flexDirection: "column" }}>
      <Box
        width="350px"
        height="10px"
        color="black"
        style={{ flexDirection: "row" }}
      >
        {alarm.message}
      </Box>
    </div>
  );
};

export default AlarmList;
