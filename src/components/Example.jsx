import React from "react"
import {Radio, RadioGroup, Stack, Text} from "@chakra-ui/react"

export const RadioExample = () => {
  const [value, setValue] = React.useState("1")
  return (
    <>
      <RadioGroup
        onChange={evt => {
          setValue(evt)
        }}
        value={value}
      >
        <Stack direction="row">
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Stack>
      </RadioGroup>
      <Text>{value}</Text>
    </>
  )
}
