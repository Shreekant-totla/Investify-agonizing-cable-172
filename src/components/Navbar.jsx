import React from 'react'
// import { useState } from 'react'
import { Box,Flex,IconButton,Input,InputGroup,InputLeftElement,useDisclosure,
    Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,
    DrawerContent,DrawerCloseButton,Button,Image,
    Popover,PopoverTrigger,PopoverContent,
  PopoverBody,PopoverArrow,} from '@chakra-ui/react';
    import { FaBars, FaSearch, FaUserCircle, FaShoppingCart, FaBell } from 'react-icons/fa';
// import { Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Navbar.css"


const Navbar = () => {
    // const [opentab, setOpenTab] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

   
  return (<>
    <Box bg="white" style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
        <Flex className='flexupper' bg="#266D84"  color="white" alignItems="center"  px={4} py={2} ml="20%" w="100%">
        <Box>
             <Link className="nav-upper" to="/aboutus"><b>About Us</b></Link>
          </Box>
          <Box mx={8}>
            <Link className="nav-upper" to="/contactus"><b>Contact Us</b></Link>
          </Box></Flex>
          <Flex>
      <Box alignItems="center" width="15%" ml="2%" px={4} >
        {/* Logo */}
        <Link to="/"><Image  src="/images/investify logo.png"/></Link></Box>

        {/* Menu */}
        
        <Flex className='flex' ml="3%" color="#455A64" display={{ base: "none", md: "flex" }} alignItems="center">
          <Box mx={4}>
          <Link className="nav-link"><b>DASHBOARD</b></Link>
          </Box>
          <Box mx={4}>
            <Popover >
                <PopoverTrigger>
                    <Link className="nav-link"><b>INVESTMENT</b></Link >
                </PopoverTrigger>
                <PopoverContent bg="#CFD8DC" ml="18px" w="1500px">
                    <PopoverArrow />
                    <PopoverBody>
                    {/* <PopoverCloseButton /> */}
                    <Flex alignItems="center" justifyContent="space-evenly">
                    <Link className="nav-link" to="/mutualfundsoverview"><b>Mutual Funds</b></Link>
                    <Link className="nav-link"><b>Insta Redeem Packs</b></Link>
                    <Link className="nav-link"><b>Curated Packs</b></Link>
                    <Link className="nav-link"><b>Corporate Fixed Deposits</b></Link>
                    </Flex>

                   </PopoverBody>
                </PopoverContent>
    </Popover>
          </Box>
          <Box mx={4}>
            <Link className="nav-link"><b>INSURANCE</b></Link>
          </Box>
          <Box mx={4}>
            <Link className="nav-link"><b>LOANS</b></Link>
          </Box>
          <Box mx={4}>
            <Link className="nav-link"><b>TOOLS</b></Link>
          </Box>
          <Box mx={4}>
            <Link className="nav-link"><b>KNOWLEDGE CENTER</b></Link>
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
            {/* <Menu>
              <MenuButton as={IconButton} aria-label="Login" icon={<FaUserCircle />} variant="ghost" />
              <MenuList>
                <MenuItem>Login</MenuItem>
                <MenuItem>Sign Up</MenuItem>
              </MenuList>
            </Menu> */}
            <Popover>
              <PopoverTrigger>
                <IconButton aria-label="Login" icon={<FaUserCircle />} variant="ghost" />
                  </PopoverTrigger>  
                    <PopoverContent w="200px">
                      <PopoverArrow />
                        <PopoverBody> 
                          <Link to="/login">Login</Link><br/>
                          <Link to="/signup">Sign Up</Link><br/>
                          <Link to="/faq">FAQ's</Link><br/>
                          <Link to="/whishlist">Whishlist</Link><br/>
                      </PopoverBody>
                    </PopoverContent>
            </Popover>
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
    </>
  );
}

export default Navbar
