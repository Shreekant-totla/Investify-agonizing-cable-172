import React from 'react'
// import { useState } from 'react'
import { Box,Flex,IconButton,Input,InputGroup,InputLeftElement,
    Menu,MenuButton,MenuItem,MenuList,Text,useDisclosure,
    Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,
    DrawerContent,DrawerCloseButton,Button,Image,
    Popover,PopoverTrigger,PopoverContent,PopoverHeader,
  PopoverBody,PopoverArrow,PopoverCloseButton,} from '@chakra-ui/react';
    import { FaBars, FaSearch, FaUserCircle, FaShoppingCart, FaBell } from 'react-icons/fa';
// import { Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {
    // const [opentab, setOpenTab] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const linkStyles = {
    color: "black",
    textDecoration: "none",
  };

  const hoverStyles = {
    color: "red",
  };
   
  return (<>
    <Box bg="white" >
        <Flex bg="#266D84" color="white"  alignItems="center"  px={4} py={2} ml="20%" w="100%">
        <Box>
             <Link to="/aboutus">About Us</Link>
          </Box>
          <Box mx={8}>
            <Link to="/contactus">Contact Us</Link>
          </Box></Flex>
          <Flex>
      <Box alignItems="center" width="15%" ml="2%" px={4} >
        {/* Logo */}
        <Image  src="/images/investify logo.png"/></Box>

        {/* Menu */}
        
        <Flex ml="3%"  display={{ base: "none", md: "flex" }} alignItems="center">
          <Box mx={4}>
            <Link>DASHBOARD</Link>
          </Box>
          <Box mx={4}>
            <Popover >
                <PopoverTrigger>
                    <Link style={linkStyles} onMouseOver={(e) => e.target.style = hoverStyles} onMouseLeave={(e) => e.target.style = linkStyles}>INVESTMENT</Link >
                </PopoverTrigger>
                <PopoverContent bg="#CFD8DC" ml="18px" w="1500px">
                    <PopoverArrow />
                    <PopoverBody>
                    {/* <PopoverCloseButton /> */}
                    <Flex alignItems="center" justifyContent="space-evenly">
                    <Link>Mutual Funds</Link>
                    <Link>Insta Redeem Packs</Link>
                    <Link>Curated Packs</Link>
                    <Link>Corporate Fixed Deposits</Link>
                    </Flex>

                   </PopoverBody>
                </PopoverContent>
    </Popover>
          </Box>
          <Box mx={4}>
            <Link>INSURANCE</Link>
          </Box>
          <Box mx={4}>
            <Link>LOANS</Link>
          </Box>
          <Box mx={4}>
            <Link>TOOLS</Link>
          </Box>
          <Box mx={4}>
            <Link>KNOWLEDGE CENTER</Link>
          </Box>
        </Flex>

        {/* Search */}
        <Box  display={{ base: "none", md: "block" }} flex={1}  mx={4} my={3}>
          <InputGroup ml="10%">
            <InputLeftElement pointerEvents="none" children={<FaSearch />} />
            <Input type="text" placeholder="Search" w="200px" />
          </InputGroup>
        </Box>

        {/* Right Side */}
        <Flex alignItems="center" >
          {/* Login */}
          <Box mx={0} mr={2}>
            <Menu>
              <MenuButton as={IconButton} aria-label="Login" icon={<FaUserCircle />} variant="ghost" />
              <MenuList>
                <MenuItem>Login</MenuItem>
                <MenuItem>Sign Up</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          {/* Notification */}
          <Box mx={4}>
            <IconButton aria-label="Notification" icon={<FaBell />} variant="ghost" />
          </Box>

          {/* Cart */}
          <Box mx={4}>
            <IconButton aria-label="Cart" icon={<FaShoppingCart />} variant="ghost" />
          </Box>

          {/* Menu Button */}
          <Box display={{ base: "flex", md: "none" }}>
            <IconButton  ref={btnRef} aria-label="Menu" icon={<FaBars />} variant="ghost" onClick={onOpen} />
            <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    
          </Box>
        </Flex>
        </Flex>
      
    </Box>
    <hr/><hr/></>
  );
}

export default Navbar
