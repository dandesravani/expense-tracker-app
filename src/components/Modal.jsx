import {
  Button,
  Container,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react"
import React from "react"

export const ExpenseModal = ({handleSubmit}) => {
  const [transaction, set] = React.useState({
    description: "",
    amount: "",
    radio: "Income"
  })

  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Add New Transaction
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container>
              <form>
                <Stack spacing={3}>
                  <Text mb="8px">Enter Description: </Text>
                  <Input
                    placeholder="Enter Transaction Description"
                    value={transaction.description}
                    onChange={evt =>
                      set({...transaction, description: evt.target.value})
                    }
                  />
                  <Text mb="8px">Enter Amount:</Text>
                  <Input
                    placeholder="Enter Transaction Amount"
                    value={transaction.amount}
                    onChange={evt =>
                      set({...transaction, amount: +evt.target.value})
                    }
                  />
                  <RadioGroup
                    onChange={evt => set({...transaction, radio: evt})}
                    value={transaction.radio}
                  >
                    <Stack direction="row">
                      <Radio
                        value="Income"
                        checked={transaction.radio === "Income"}
                      >
                        Income
                      </Radio>
                      <Radio
                        value="Expense"
                        checked={transaction.radio === "Expense"}
                      >
                        Expense
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </Stack>
              </form>
            </Container>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              onClick={e => {
                e.preventDefault()
                handleSubmit(transaction)
                set({description: "", amount: "", radio: "Income"})
                onClose()
              }}
            >
              Add
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
