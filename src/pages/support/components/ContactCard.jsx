import {
    Card,
    Checkbox,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Box,
    Stack,
    Text,
    Textarea,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  
  const ContactCard = () => {
    return (
      <Card p="6" borderRadius="1rem">
        <Stack spacing={6}>
          <Text fontWeight="medium" fontSize="sm">
            You will receive response within 24 hours of time of submit.
          </Text>
  
          <HStack
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter Your Name.." />
            </FormControl>
            <FormControl>
              <FormLabel>Surename</FormLabel>
              <Input placeholder="Enter Your Surename.." />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter Your Email.." />
          </FormControl>
          <FormControl>
            <FormLabel>Messagee</FormLabel>
            <Textarea placeholder="Enter Your Message.." />
          </FormControl>
          <Checkbox  defaultChecked color="purple">
            <Text fontSize="xs">
              I agree with
              
                Terms & Conditions.
              
            </Text>
          </Checkbox>
          <Stack>
            <Button fontSize="sm" bg="black.60" _hover={{
                bg:"purple",
                color:"white"
            }}>Send a Message</Button>
            <Button fontSize="sm" bg="black.60" _hover={{
                bg:"purple",
                color:"white"
            }}>
              Book a Meeting
            </Button>
          </Stack>
        </Stack>
      </Card>
    );
  };
  
  export default ContactCard;