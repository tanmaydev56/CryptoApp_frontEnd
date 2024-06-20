import { Flex, HStack, Heading, Icon, Stack, useDisclosure,Tag } from '@chakra-ui/react'
import { FaArrowDown } from "react-icons/fa";

import { FaArrowUp } from "react-icons/fa";

import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,Button,ButtonGroup,Text
  } from '@chakra-ui/react'
  import { VscQuestion } from "react-icons/vsc";
const Portfolio = () => {
   
  return (
   
<HStack bg="white" borderRadius="xl" p="6"  align={{
  base:"flex-start"
  ,xl:"center"
}} maxW="1380px"  justifyContent="space-between"  flexDirection={{
base:"column",
xl:"row"
}}
mt="19px" >
   <HStack gap="50px" >
    <Stack>
        <HStack flexDirection="column" gap="15px">
      <HStack  color="black.80" >  
              <Text fontSize="14px ">Total Portfolio Value.</Text>
        <Popover >
  <PopoverTrigger>
   
       

       <Icon as={VscQuestion}/>
    
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    
    
    <PopoverBody>
    Total Portfolio Value (TPV) in the context of cryptocurrencies refers to the aggregate worth of all the crypto assets held within a portfolio. 
    This metric provides an overview of the entire portfolio’s value, taking into account the current market prices of each asset.
    </PopoverBody>
  </PopoverContent>
</Popover>

</HStack>
<Text textStyle="h2" fontWeight="bold">₹ 112,312.24</Text>
</HStack>


 

      
      

    </Stack>
    <Stack   >
      <HStack  color="black.80" flexDirection="column" gap="11px"  align={{
  base:"flex-start"
  ,xl:"center"
}}   >  
              <Text fontSize="14px ">Wallet Balances</Text>
              <HStack>
              <Text textStyle="h2" fontWeight="bold">22.39401000</Text> <Tag>BTC</Tag>
              </HStack>
</HStack>

    </Stack>
   
    <Stack mt="20px" >
      <HStack  color="black.80" flexDirection="column" gap="11px" >  
              <Text fontSize="14px "></Text>
              <HStack>
              <Text textStyle="h2" fontWeight="bold">₹ 1,300.00</Text> <Tag>INR</Tag>
              </HStack>
</HStack>
    </Stack>
    </HStack>

    <HStack >
    <Button bg="black.60" color="black" _hover={{
        bg:"purple",
        color:"white"}} > 
       <Icon as={FaArrowDown}/>
        Deposite</Button>
    <Button bg="black.60" color="black" _hover={{
        bg:"purple",
        color:"white"
    }}><Icon as={FaArrowUp}/>
        Withdraw</Button>
        </HStack>
        
      
     
 
</HStack>

  )
}

export default Portfolio
