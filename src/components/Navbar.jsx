
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCartShopping} from '@fortawesome/free-regular-svg-icons'
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import "./Navbar.css"
import { Box, Flex, IconButton,Image,useBreakpointValue} from "@chakra-ui/react";
import { HamburgerIcon} from "@chakra-ui/icons";




function Navbar() {
  
    // return (
    //   <>
    //   <Flex align="center" justify="space-between" wrap="wrap" bg="white" p={6} border="1px solid #6a7890">
    //     <Box>
    //       <Link to='/'>
    //       <img src="/trendy object logo.jpg" alt="Logo" width='100px'/></Link>
    //     </Box>
    //     <Box display={{ base: "block", md: "none" }}>
    //       <Menu>
    //         <MenuButton
    //           as={IconButton}
    //           aria-label="Options"
    //           icon={<HamburgerIcon />}
    //           variant="outline"
    //           mr={2}
    //         />
    //         <MenuList>
    //           <Link to='/Login'><MenuItem>NEW ARRIVALS</MenuItem></Link>
    //           <MenuItem>CASES & SLEEVES</MenuItem>
    //           <MenuItem>ACCESSORIES</MenuItem>
    //           <MenuItem>BAGS & WALLETS</MenuItem>
    //           <MenuItem>HOME OFFICE</MenuItem>
    //           <MenuItem>COLLECTIONS</MenuItem>
    //           <MenuItem>GIFTING</MenuItem>
    //         </MenuList>
    //       </Menu>
    //     </Box>
    //     <Box display={{ base: "none", md: "block" }} >
    //       <Flex align="center" fontFamily='Roboto Condensed'  fontSize='13px'>
    //       {/* text-align: left;
    // font-family: Trade Gothic LT Pro,sans-serif!important */}
    //         <Box mr={7}>
    //           <Link to='/Login'>NEW ARRIVALS</Link>
    //         </Box>
    //         <Box mr={7}>
    //           <Link to='/'>CASES & SLEEVES</Link>
    //         </Box>
    //         <Box mr={7}>
    //           <Link to='/'>ACCESSORIES</Link>
    //         </Box>
    //         <Box mr={7}>
    //           <Link to='/'>BAGS & WALLETS</Link>
    //         </Box>
    //         <Box mr={7}>
    //           <Link to='/'>HOME OFFICE</Link>
    //         </Box>
    //         <Box mr={7}>
    //           <Link to='/'>COLLECTIONS</Link>
    //         </Box>
    //         <Box mr={250}>
    //           <Link to='/'>GIFTING</Link>
    //         </Box>
    //         <Box mr={8}>
    //           <Link to='/'>
    //           <i class="fa-solid fa-bag-shopping fa-lg"></i>
    //           </Link>
    //         </Box>
    //         <Box mr={8}>
    //           <Link to='/'>
    //           <i class="fa-sharp fa-regular fa-user fa-bounce fa-lg" style={{color: "#6a7890"}}/>
    //           </Link>
    //         </Box>
    //         <Box mr={10}>
    //           <Link to='/'>
    //             <i class="fa-solid fa-magnifying-glass fa-shake fa-lg"/>
    //           </Link>
    //           </Box>
    //       </Flex>
    //     </Box>
    //   </Flex>
    //   <Flex w='100%'>
    //     <Box>
    //       <img src="/Homepage Banners/discount-animation.gif" alt="discount-animation" />
    //       <img src="/Homepage Banners/pangea_collection_homepage_desktop.webp" alt="Pangea" />
    //       <img src="/Homepage Banners/watchband-homepage-sdesktop.webp" alt="watchbrand" loading="lazy" style={{marginTop:"50px"}}/>
    //     </Box>
    //   </Flex>
    //   </>
    // );

    
    
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);
  
    const variant = useBreakpointValue({ base: "drawer", lg: "inline" });

   
  
    return (
      <>
      <Flex  alignItems="center" bg="white.500" color="black" px={4} py={2} justifyContent='space-between' pt={3} pb={3} borderBottom='1px solid gray'>
        <Box mr={4}>
          <Link to='/'>
          <Image src="/trendy object logo.jpg" alt="logo" width='110px' ml={5}/>
          </Link>
        </Box>
        {variant === "drawer" ? (
          <>
          <Box mb={2}>
                    <Link to='/Login'>
                    <input type="text" placeholder='Search here' style={{borderBottom: "1px solid green" , marginRight:"15px", marginTop:"10px"}}/> <i class="fa-solid fa-magnifying-glass fa-shake fa-lg"/>
                    </Link>
                  </Box>
            <Box color='black'>
              
              <IconButton
                icon={<HamburgerIcon />}
                onClick={toggleDrawer}
                variant="outline"
              />
            </Box>
            <Drawer isOpen={isOpen} onClose={toggleDrawer}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <Box p={4}>
                  <Box mb={2}>
                    <Link to='/Login'>NEW ARRIVALS</Link>
                  </Box>
                  <Box mb={2}>
                    <Link to='/Login'>CASES & SLEEVES</Link>
                  </Box>
                  <Box mb={2}>
                    <Link to='/Login'>ACCESSORIES</Link>
                  </Box>
                  <Box mb={2}>
                    <Link to='/Login'>BAGS & WALLETS</Link>
                  </Box>
                  <Box mb={2}>
                    <Link to='/Login'>HOME OFFICE</Link>
                  </Box>
                  <Box mb={2}>
                    <Link to='/Login'>COLLECTIONS</Link>
                  </Box>
                  <Box mb={2}>
                    <Link to='/Login'>GIFTING</Link>
                  </Box>
                  <Box mb={2}>
                    <Link to='/Login'>
                      <span style={{ marginRight: "8px" }}>CART</span> <i class="fa-solid fa-bag-shopping fa-lg" />
                    </Link>
                  </Box>
                  <Box mb={2}>
                    <Link to='/Login'>
                    <span style={{ marginRight: "8px" }}>SIGN UP / LOGIN</span> <i class="fa-sharp fa-regular fa-user fa-bounce fa-lg" style={{color: "#6a7890"}}/>
                    </Link>
                  </Box>
                  {/* <Box mb={2}>
                    <Link to='/Login'>
                    <span style={{ marginRight: "8px" }}>SEARCH</span> <i class="fa-solid fa-magnifying-glass fa-shake fa-lg"/>
                    </Link>
                  </Box> */}
                  
                </Box>
                
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          // <Flex align="center" fontFamily='Roboto Condensed'  fontSize='13px' bg='tomato'>
          <Box display="flex" alignItems="center" fontSize='13px' className="flex" pt={4} pb={4} >
           <Box mr={7}>
              <Link to='/Login'>NEW ARRIVALS</Link>
             </Box>
             <Box mr={7}>
               <Link to='/'>CASES & SLEEVES</Link>
             </Box>
             <Box mr={7}>
               <Link to='/'>ACCESSORIES</Link>
             </Box>
             <Box mr={7}>
               <Link to='/'>BAGS & WALLETS</Link>
             </Box>
             <Box mr={7}>
               <Link to='/'>HOME OFFICE</Link>
             </Box>
             <Box mr={7}>
               <Link to='/'>COLLECTIONS</Link>
             </Box>
             <Box mr={180} >
               <Link to='/'>GIFTING</Link>
             </Box>
             <Box mr={8}>
               <Link to='/'>
               <i class="fa-solid fa-bag-shopping fa-lg" style={{color: "#6a7890"}}/>
               </Link>
             </Box>
             <Box mr={8}>
               <Link to='/'>
               <i class="fa-sharp fa-regular fa-user fa-bounce fa-lg" style={{color: "#6a7890"}}/>
               </Link>
             </Box>
             <Box mr={5}>
               <Link to='/'>
                 <input type="text" placeholder='Search here' style={{borderBottom: "1px solid green" , marginRight:"15px"}}/><i class="fa-solid fa-magnifying-glass fa-shake fa-lg" style={{color: "#6a7890"}} />
               </Link>
               </Box>
          </Box>
        )}
      </Flex>
      
      </>
    );
  
}

export default Navbar
