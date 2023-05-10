import React from 'react'
import Navbar from '../components/Navbar'
import { Breadcrumb } from 'antd';
import { Box ,Flex,Text,Heading,Image} from '@chakra-ui/react';

const DiscoverMutualFunds = () => {
    
  return (
    <div>
        <Navbar/>
      <Breadcrumb style={{marginTop:"10px", marginLeft:'252px'}}
    items={[
      {
        title: <a href="/">HomePage</a>,
      },
      {
        title: 'Investment',
      },
      {
        title : <a href= "/mutualfundsoverview" >Mutual Funds Overview</a>
      },
      {
        title: 'Discover Mutual Funds',
      },
    ]}
     />
     <Box border="1px solid blue">
        <Flex >
        <Flex direction="column" textAlign="left"  w="43%" ml="250px">
            <Text color="#266D84" fontSize="20px" marginTop="35px" lineHeight="2px"><b>Invest In</b></Text>
            <Heading fontSize="44px" color="#333333">Mutual Funds Schemes In India</Heading>
            <Text fontSize="15px" color="#333333">Through Investify, you can explore and invest in different types of mutual funds instantly. Choose from our selection of the most rewarding schemes. Analyze, compare, and track top mutual fund investments at Investify.</Text>
        </Flex>
    
        <Flex  ml="50px">
            
            <Image src="./images/mutual funds page.svg"/>
        </Flex>
        </Flex>
        <Flex border="1px solid red" w="20%">
            left
        </Flex>
        <Flex border="1px solid green" ml="22%">
            Right
        </Flex>
     </Box>
    </div>
  )
}

export default DiscoverMutualFunds
