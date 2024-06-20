import { Button, Card, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import Dashboardlayout from '../../components/Dashboardlayout'
import { MdOutlineFileDownload } from "react-icons/md";
import { Icon } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab,Tag, TabPanel,Box } from '@chakra-ui/react'
import { Input,InputGroup,InputLeftElement } from '@chakra-ui/react'
import { IoSearch } from "react-icons/io5";

import Tabel from './components/Tabel';
const TransactionPage = () => {
    const tabs =[{
        label:"All",
        count:349

    },
    {
        label:"Deposit",
        count:114
    },{
        label:"Withdraw",
        count:55
    },
    {
        label:"Trade",
        count:50
    }
]
  return (
    
    <Dashboardlayout title="Transactions">
        <Flex justify="end" mt="5">
        <Button bg="black.80" _hover={{
            bg: "purple"
        }} leftIcon={<Icon as={MdOutlineFileDownload}/>}>Export CSV</Button>
    </Flex>
    <Box px="180px" >
    <Card borderRadius="1rem">
    <Tabs>
  <TabList pt="4" display="flex" justifyContent="space-between" >
    <HStack>
    {
        tabs.map((item)=>(
            <Tab textStyle="h6" key={item.label} display="flex" gap="2" >{item.label} <Tag colorScheme="gray" borderRadius="full" >{item.count}</Tag></Tab>
        ))
    }
    </HStack>
     <InputGroup maxW="250px" pb="2" pr="2" borderColor="white" >
    <InputLeftElement pointerEvents='none'>
      <Icon as={IoSearch}/>
    </InputLeftElement>
    <Input type='tel' placeholder='Search by ID or destination' />
  </InputGroup>
   
  </TabList>

  <TabPanels>
    <TabPanel>
     <Tabel/>
    </TabPanel>
    <TabPanel>
    <Tabel/>
    </TabPanel>
    <TabPanel>
    <Tabel/>
    </TabPanel>
    <TabPanel>
    <Tabel/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Card>
    </Box>
    </Dashboardlayout>
  )
}

export default TransactionPage
