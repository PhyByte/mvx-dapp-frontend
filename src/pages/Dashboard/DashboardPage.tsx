import {
  Flex,
  Spacer,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

const DashboardPage = () => {
  const userAcount = useGetAccount();

  const available = (Number(userAcount.balance) * Math.pow(10, -18)).toFixed(2);

  return (
    <Flex justify={"center"} align={"center"} direction="column" w="100%">
      <StatGroup w="70%">
        <Stat>
          <StatLabel>Available</StatLabel>
          <StatNumber>{available}</StatNumber>
          <StatHelpText>EGLD</StatHelpText>
        </Stat>
        <Spacer />
        <Stat>
          <StatLabel>Tokens</StatLabel>
          <StatNumber>---</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Spacer />
        <Stat>
          <StatLabel>Positions</StatLabel>
          <StatNumber>---</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Flex>
  );
};

export default DashboardPage;
