import { Card, Icon } from '@chakra-ui/react'
import React from 'react'
import { CustomCard } from '../../../chakra/Customcard'
import { Stack,HStack,Text,Tag,Button ,Image} from '@chakra-ui/react'
import { BsArrowUpRight, } from "react-icons/bs";
import { Flex } from '@chakra-ui/react';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { FaArrowUp } from "react-icons/fa";


const Pricesection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
const week = ["1H", "1D", "1W", "1M"];
  return (
    <CustomCard  height="350px">
      <Flex justify="space-between" align="start">
        <Stack  >
    <HStack  color="black.80" flexDirection="column" gap="11px"  align="flex-start" >  
            <Text fontSize="14px ">Wallet Balances</Text>
            <HStack>
            <Text textStyle="h2" fontWeight="bold">22.39401000</Text>
            <HStack fontWeight="medium"  color="green.500">
                <Icon as={BsArrowUpRight}/> 
            <Text fontSize="sm" fontWeight="bold">22%</Text> 

            </HStack>
            </HStack>
</HStack>

  </Stack>
  <HStack >
    <Button bg="black.60" color="black" _hover={{
        bg:"purple",
        color:"white"}} > 
       <Icon as={FaCirclePlus}/>
        Buy</Button>
    <Button bg="black.60" color="black" _hover={{
        bg:"purple",
        color:"white"
    }}><Icon as={FaCircleMinus}/>
        Sell</Button>
        </HStack>
        </Flex>
        
        <Tabs variant='soft-rounded' colorScheme='purple' >
 <Flex justify="end" >
 <TabList bg="black.5">
  {
    week.map((week)=>(
      <Tab key={week} _hover={{
        bg:"purple",color:"white"
      }} _selected={{bg:"purple",color:"white"}} bg="black.60" color="black" fontSize="sm" borderRadius="1" p="2">{week}</Tab>
    ))
  }
  
  </TabList>
 </Flex>
  <TabPanels>
    <TabPanel>
    <Image 
      src="/Graph.svg"
      width="100%"
     mt="-15px"
      />
        <HStack justify="space-between">{
        timestamps.map((timestamps)=>(
          <Text
          key={timestamps}
          fontSize="sm"
          color="black.80"
          fontWeight="bold"
         
          >{timestamps}</Text>

        ))
        }</HStack>
     
    </TabPanel>
    
  </TabPanels>
</Tabs>

      
    
       
   </CustomCard>
  )
}

export default Pricesection
