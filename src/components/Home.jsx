// import { Carousel, Radio } from 'antd';
// import { useState } from 'react';
// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

// const Home = () => {
//   const [dotPosition, setDotPosition] = useState('bottom');
//   const handlePositionChange = ({ target: { value } }) => {
//     setDotPosition(value);
//   };
//   return (
//     <>
//       <Radio.Group
//         onChange={handlePositionChange}
//         value={dotPosition}
//         style={{
//           marginBottom: 8,
//         }}
//       >
//       </Radio.Group>
//       <Carousel  dotPosition={dotPosition}>
//         <div>
        
//           <img src="./images/homeCarouselimage.png" alt="home image" />
//         </div>
//         <div>
//           <h3 style={contentStyle}>2</h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>3</h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>4</h3>
//         </div>
//       </Carousel>
//     </>
//   );
// };
// export default Home;

import React from 'react';
import MyCarousel from './Carousel';

const Home = () => {
    
  return (
    <div>
        {/* <MyCarousel/> */}
      
    </div>
  )
}

export default Home

