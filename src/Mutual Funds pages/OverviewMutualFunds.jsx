import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Breadcrumb } from 'antd';
import { Box ,Flex,Text,Heading,Image, Button} from '@chakra-ui/react';


const OverviewMutualFunds = () => {
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
        title : 'Mutual Funds Overview'
      },
      
    ]}
     />
     <Box >
        <Flex >
        <Flex direction="column" textAlign="left"  w="27%" ml="250px">
            <Text color="#266D84" fontSize="20px" marginTop="45px" lineHeight="2px"><b>Grow your wealth with</b></Text>
            <Heading fontSize="44px" color="#333333">Mutual Funds Investments Online</Heading>
            <Text fontSize="17px" color="#333333" fontFamily="Raleway.400">Build a mutual fund portfolio to meet your financial goals with Investify. Mutual funds are one of the most popular investment vehicles in India.</Text>
            
        </Flex>
    
        <Flex  ml="50px"  bg="#266D84" borderRadius="15px" mt="15px">
          <Box w="50%" >
          <Text fontSize="28px" paddingLeft="25px" pt="7%" textAlign="left" color="white" fontFamily="Raleway"><b>Start an SIP at Rs. 500/month</b></Text>
            <Text fontSize="19px" paddingLeft="25px" textAlign="left" color="white" fontWeight="450" fontFamily="Raleway">Start taking small steps to secure your future!</Text>
            <Button ml="-120px" borderRadius="20px" color="#266D84">Start Investing</Button>
            </Box>
            <Image w="33%" ml="13%" mt="8%" src="./images/mfoverview.svg"/>
        </Flex>
        
        </Flex>
        <Button mt="10px" ml="-846px" borderRadius="20px" bg="#266D84" color="white">Explore Mutual Funds</Button>
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

export default OverviewMutualFunds
