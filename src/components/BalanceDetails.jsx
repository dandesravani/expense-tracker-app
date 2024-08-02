import {Box, Container, Flex, Spacer, Text, VStack} from "@chakra-ui/react"
import React from "react"

export const BalanceDetails = ({totalIncome, totalExpense, balance}) => {
  return (
    <>
      <VStack>
        <Text fontSize={"md"} fontWeight={"bold"}>
          Balance is {balance} $
        </Text>
        <Container bgColor={"gray.200"} mt="20" p="5">
          <VStack mt="5">
            <Box>
              <Text fontSize={"xl"} fontWeight={"bold"}>
                {totalIncome} $
              </Text>
              <Text fontSize={"md"} color={"gray.500"}>
                Total Income
              </Text>
            </Box>
          </VStack>
          <VStack mt="5">
            <Box>
              <Text fontSize={"xl"} fontWeight={"bold"}>
                {totalExpense} $
              </Text>
              <Text fontSize={"md"} color={"gray.500"}>
                Total Expense
              </Text>
            </Box>
          </VStack>
        </Container>
      </VStack>
    </>
  )
}
