import {Box, Flex, Heading, Spacer} from "@chakra-ui/react"
import React from "react"
import {ExpenseModal} from "./Modal"

export const Navbar = ({handleSubmit}) => {
  return (
    <Box bg="gray.100" w="100%" p={4} color="white">
      <Flex>
        <Heading color={"blue.400"}>Expense Tracker</Heading>
        <Spacer />
        <ExpenseModal handleSubmit={handleSubmit} />
      </Flex>
    </Box>
  )
}
