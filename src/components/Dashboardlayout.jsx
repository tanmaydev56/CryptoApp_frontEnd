import React from 'react'
import { Box, Container, useDisclosure } from '@chakra-ui/react'

import Sidenav from './Sidenav'
import Topnav from './Topnav'
import { Flex } from '@chakra-ui/react'
import Sidedrawer from './Sidedrawer'
const Dashboardlayout = ({title,children}) => {

    const {isOpen,onClose,onOpen} = useDisclosure();
  return (
   
   <Flex>
  
    
      <Box
       display={{
        base:"none",
        lg:"flex"

    }}
      >
          <Sidenav/>

      </Box>
      <Sidedrawer
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      />
    <Box flexGrow={1}>
    <Topnav  title={title}  onOpen={onOpen}  />
      <Container mt="6" maxW="1380px" bg="#F3F3F7"  h="90vh"  >{children}</Container>
      </Box>
      </Flex>
      
      
    
  )
}

export default Dashboardlayout
// toh hum abb responsive banane ke liye ek sidedrawer bana rahe hai toh usme we r using useDIscolore hook and ek sidrawerb.jsx bana liya  and pass those 3 arg to sidedrawer 
