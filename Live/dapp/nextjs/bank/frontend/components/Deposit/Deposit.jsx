import { Flex, Text } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default Deposit = () => {
  return (
    <Flex p="2rem" justifyContent="space-between" alignItems="center">
      <Text>Logo</Text>
      <ConnectButton />
    </Flex>
  );
};
