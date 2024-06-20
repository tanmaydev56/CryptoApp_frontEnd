import { Container, Flex, Heading,Menu,MenuButton,MenuItem,MenuList,Button, HStack,Box, Icon} from '@chakra-ui/react'
import React from 'react'
import { MdHdrStrong, MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineStorage } from "react-icons/md";
import { Link } from 'react-router-dom';




const Topnav = ({title,onOpen}) => {
  return (
    <Box
        px="4"
          
      bg="white"
    > 
     <HStack
     h="16"
     maxW="70rem"
     mx="60px"  

     justifyContent="space-between"
    
  >
    <Icon as={MdOutlineStorage}
    onClick={onOpen}
    display={{
        base:"block",
        lg:"none"
    }}
    />
    
        <Heading fontSize="34px" fontFamily="sans-serif-Ubuntu">{title}</Heading>
        <Menu>
  <MenuButton as={Button}
  
  _hover={{
    bg:"purple",
   
   
  }}
  bg="black.60"


     >
   <Icon as={FaUserTie} fontSize="24px"/> 

  </MenuButton>
  <MenuList>
    <MenuItem>Logout</MenuItem>
    <Link to="/support" >
    <MenuItem >Support</MenuItem>
    </Link>
    
  </MenuList>
</Menu>
    </HStack>
    </Box>

  
  )
}

export default Topnav
