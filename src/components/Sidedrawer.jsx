import React from 'react'
import { Button,Drawer,DrawerBody,DrawerOverlay,DrawerContent,DrawerHeader,Input,DrawerFooter,DrawerCloseButton } from '@chakra-ui/react'
import Sidenav from './Sidenav'
const Sidedrawer = ({isOpen,onClose}) => {
  return (
   


    <>
      
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
        

          <DrawerBody>
            <Sidenav/>
          </DrawerBody>

        
        </DrawerContent>
      </Drawer>
    </>
  )
}
   
  

export default Sidedrawer
