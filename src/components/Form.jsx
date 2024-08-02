import {
  Container,
  Input,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Stack,
  Text
} from "@chakra-ui/react"
import React from "react"

export const ExpenseForm = ({handleSubmit}) => {
  const [description, setDescription] = React.useState("")
  const [amount, setAmount] = React.useState(0)
  const [radio, setRadio] = React.useState("Income")

  return (
    <Container>
      <form>
        <Stack spacing={3}>
          <Text mb="8px">Enter Description: </Text>
          <Input
            placeholder="Enter Transaction Description"
            value={description}
            onChange={evt => setDescription(evt.target.value)}
          />
          <Text mb="8px">Enter Amount:</Text>
          <NumberInput>
            <NumberInputField
              placeholder="Enter Transaction Amount"
              value={amount}
              onChange={evt => setAmount(evt.target.value)}
            />
          </NumberInput>
          <RadioGroup value={radio} onChange={setRadio}>
            <Stack direction="row">
              <Radio value="Income">Income</Radio>
              <Radio value="Expense">Expense</Radio>
            </Stack>
          </RadioGroup>
        </Stack>
      </form>
    </Container>
  )
}
