import React, { Fragment } from 'react'
import { CustomCard } from '../../../chakra/Customcard'
import { Flex, Stack, Text,Box, Icon,Grid, Divider, Button } from '@chakra-ui/react'
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa6";


const Transaction = () => {
    const transaction = [
        
            {
                id: "1",
                icon: BsCurrencyRupee,
                text: "INR Deposit",
                amount: "+ ₹81,123.10",
                timestamp: "2022-06-09 7:06 PM",
              },
              {
                id: "2",
                icon: FaBtc,
                text: "BTC  Sell",
                amount: "- 12.48513391 BTC",
                timestamp: "2022-06-09 7:06 PM",
              },
              {
                id: "3",
                icon: BsCurrencyRupee,
                text: "INR Deposit",
                amount: "+ ₹81,123.10",
                timestamp: "2022-06-09 7:06 PM",
              },
        
    ];
  return (
   <CustomCard h="full" >
    <Text mb="6" fontSize="sm" color="black.80" >Recent Transactions</Text>
  <Stack spacing={4}>
    {
        transaction.map((transaction,i) => (
            <Fragment   key={transaction.id}>
                {
                    i!== 0 && <Divider />
                }
                <Flex
          
            gap="4"
            w="full"
            >
                <Grid placeItems="center" boxSize={10} borderRadius="full" bg="black.5">
                    <Icon as={transaction.icon} bg="black.60" borderRadius="50%"   
                    p="6px" fontSize="25px"
                    />
                    
                </Grid>
                <Flex justify="space-between "  w="full">
                    <Stack spacing={0}>
                        <Text textStyle="h6" >
                            {transaction.text}
                        </Text>
                        <Text fontSize="sm" color="black.80">
                            {transaction.timestamp}
                        </Text>
                    </Stack>
                    <Text textStyle="h6" >
                            {transaction.amount}
                        </Text>
                </Flex>

            </Flex>
            

            </Fragment>
        ))
    }
  </Stack>
  <Button bg="black.60" w="full" mt="7" color="black" _hover={{
    bg:"purple",
    color:"white"
  }}>View all</Button>
   </CustomCard>
  )
}

export default Transaction
