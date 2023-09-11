import React from 'react';
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";

const ImageGrid = () => {
  const images = [
    {
      id: 1,
      base64SVG: '/campaignImg1.png',
      title: 'Name : Save the World by The VAKAV Foundation',
      description: 'The VAKAV Foundation builds a social enterprise for Healthcare workers. \n They provide a medical professional education to ensure universal accessibility and effective communication on trending healthcare matters.',
      goal: 'Target : 10/20 (ETH)  ',
      pageroute :'/mintpage'

    },
    {
      id: 2,
      base64SVG: '/campaignImg2.png',
      title: 'Name : Save the Farm by The ESG Transparecy',
      description: 'The ESGZ Transparecy Initiative is a human rights organization fighting for a more respectful enviroment. They are building a movement of investors and consumers who can drive corporate social responsibility from the bottom up.',
      goal: 'Target : 12/23 (ETH)  ',
      pageroute :'/mintpage'

    },
 
    {
      id: 3,
      base64SVG: '/campaignImg3.png',
      title: 'Name : Save the Tree',
      description: 'Mercyful Housing transforming lives through affordable housing. With your donation you provide affordable housing to vulnerable people, to build up a new live including health education, after-school support and financial literacy classes.',
      goal: 'Target : 1/3 (ETH)  ',
      pageroute :'/mintpage'

    },
 
    {
      id: 4,
      base64SVG: '/campaignImg4.png',
      title: 'Name : Save the Man',
      description: 'Pro Bodoz Singapore helps to access to justice when you cannot afford a lawyer.',
      goal: 'Target : 1/5 (ETH)  ',
      pageroute :'/mintpage'

    } 

  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      {images.map((image) => (
        <div key={image.id} className="p-2 border border-gray-300">
          <img src={image.base64SVG} alt={image.title} className="w-full h-auto" />
          <h2 className="text-lg font-bold mt-2">{image.title}</h2>
          <h2 className="text-lg font-bold mt-2">{image.description}</h2>
          <h2 className="text-lg font-bold mt-2">{image.goal}</h2>
          <Link href={image.pageroute}>
            <Text display="block">
                Visit Page
            </Text>
        </Link>
        </div>
      ))}
      <div className="p-2 border border-gray-300" style = {{ textAlign :'center' , margin :'Auto'}}>
        <h1> Coming soon.</h1>
      </div>

    </div>
  );
};


export default ImageGrid;
