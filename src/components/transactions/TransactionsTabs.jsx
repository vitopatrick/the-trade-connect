import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DepositTable from "../deposit/DepositTable";
import WIthdrawalTable from "../withdrawal/WIthdrawalTable";

const Panel = (props) => {
  const { children, value, index } = props;
  return (
    <Box sx={{ width: { xs: "50%", md: "100%" } }}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
};

const TransactionTabs = () => {
  const [index, setIndex] = useState(0);

  const onIndexChange = (event, indexValue) => {
    setIndex(indexValue);
  };

  return (
    <Box>
      <Box>
        <Tabs
          value={index}
          onChange={onIndexChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          centered
        >
          <Tab label="Withdraws" />
          <Tab label="Deposits" />
        </Tabs>
      </Box>
      <Panel value={index} index={0}>
        <WIthdrawalTable />
      </Panel>
      <Panel value={index} index={1}>
        <DepositTable />
      </Panel>
      <Box sx={{ mt: 10 }}>
        <Typography variant="caption">
          All Rights Reserved © the trade connect 2022
        </Typography>
      </Box>
    </Box>
  );
};

export default TransactionTabs;
