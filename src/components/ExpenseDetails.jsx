import {
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react"
import React from "react"

export const ExpenseDetails = ({transactions}) => {
  return (
    <Container mt="250">
      <Flex>
        <Heading size={"md"} color={"red.700"}>
          Income
        </Heading>
        <Spacer />
        <Heading size={"md"} color={"red.700"}>
          Expense
        </Heading>
      </Flex>
      <Flex>
        {transactions?.map(transaction => (
          <HStack justifyContent={"space-between"} h="20" bg="papayawhip">
            <Flex justifyContent="space-between" p="6">
              <Text color={"red.800"} fontSize={"md"} fontWeight="bold">
                {transaction.description === "income" ? "Income" : "Expense"}
              </Text>
              <Text fontWeight="bold" color={"gray.800"}>
                {transaction.amount}
              </Text>
            </Flex>
          </HStack>
        ))}
      </Flex>
    </Container>
  )
}
