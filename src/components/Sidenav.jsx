import React from 'react'
import {Box, HStack, Icon, Stack,Text} from '@chakra-ui/react'
import { RiDashboardLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from 'react-router-dom';
const Sidenav = () => {
    const navlinks = [
        {
            icon:RiDashboardLine,
            text:"Dashboard",
            link:"/"

        },
        {
            icon:GrTransaction,
            text:"Transaction",
            link:"/transaction"

        },
       
      
    ]
    //we created a array for the two elements that r present in dashboard and dashboard me bhi sidenav me joh hai 

  return (
    //toh stack isiilye use kiya kyuki stack ki properties joh hai woh yeh hai display -flex and flex-direction:column; toh taki yeh properties na lagni pade we used Stack

    <Stack
    bg="white"
   
    // lg:flex matlab large devices par waps se full screen ajaye ga
    // base matlb sabse chota screen
    boxShadow={{
        base:"none"
        ,lg:"xl"
    }}
    w={{
        base:"full",
        lg:"16rem"
    }}
    h="full"
    >

        {
            navlinks.map((nav)=>(
                <Link to={nav.link}
                key={nav.text}
                >
                <HStack
                mx="15px"
                mt="10px"
               

                px={{
                    base:"5px",
                    lg:"14px"
                }}
                py="16px"
                _hover={{
                    bg:"#F3F3F7",
                    color:"purple",
                    transition:"all 0.3s"

                }}
                color="#797E82"
                borderRadius="12px"
                transition="all 0.3s"
                >
                    {/* key pass karna jaruri hai */}
                    <Icon
                    as={nav.icon}/>
                    <Text fontSize="14px" fontWeight="600">{nav.text}</Text>

                </HStack>
                </Link>
            ))
        }
        {/* ab now we r mapping over those elements and we want to render them and instantly return karrhe hai upar wale function me we r using () brakets not {} 
        and hstack kke andar 2 properties hai display-flex , and align items center*/}
          {
           

               <Link to="/support">
                 <HStack 
                mx="15px"
                mt="70vh"
               
                px="14px"
                py="16px"
                _hover={{
                    bg:"#F3F3F7",
                    color:"purple",
                    transition:"all 0.3s"

                }}
                transition="all 0.3s"
                color="#797E82"
                borderRadius="12px"
                >
                    {/* key pass karna jaruri hai */}
                    <Icon
                    as={MdOutlineSupportAgent}/>
                    <Text fontSize="14px" fontWeight="600">Support</Text>

                </HStack>
                </Link>
            
        }
    </Stack>
  )
}

export default Sidenav
