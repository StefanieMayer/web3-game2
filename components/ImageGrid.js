import React from 'react';

const ImageGrid = () => {
  const images = [
    {
      id: 1,
      base64SVG: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTSXBxXx0Zj6PXtoG_nVuHAm-tBkpY0TFW6C6qF7rRpu4bFFkHD',
      title: 'Name : VAKA Health Foundation',
      shortDescription: 'The VAKA Foundation builds a social enterprise for Healthcare workers.',
      longDescription: ' They provide a medical professional education to ensure universal accessibility and effective communication on trending healthcare matters.',
      goal: 'Target : 10/20 (ETH)  ',

    },

    {
      id: 2,
      base64SVG: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTH8Bv41RNhdLHYOi-lw0SALqP51F5-hTHrTpO1uCSxKdcxLk2y',
      title: 'Name : e.s.g. Transparency Initiative',
      shortDescription: 'The ESG Transparecy Initiative is a human rights organization fighting for a more respectful enviroment',
      longDescription: 'They are building a movement of investors and consumers who can drive corporate social responsibility from the bottom up. They achieved its first campaing win in 2018 when they pushed one of the countries largest pension fund to divest from for-profit companys over their human rights abuses of migrants',
      goal: 'Target : 10/20 (ETH)  ',

    },
 
    {
      id: 3,
      base64SVG: 'https://assets.website-files.com/60f06a88403509115b3328b5/6152d428362df07c4d0b4475_Malampaya%20Foundation%20-%20OG.jpg',
      title: 'Name : Malampaya Foundation',
      shortDescription: 'Marine Biodiversity Conservation helping alleviate poverty',
      longDescription: 'The foundation empowers people by provision of tools to enable productivity, social and economic development to protect the enviroment.',
      goal: 'Target : 10/20 (ETH)  ',

    },
 
    {
      id: 4,
      base64SVG: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDp_HuPaqrJ_REZ7rWXRAmYm2TMng-PQBu-vkUusW1huFladRS',
      title: 'Name : mercyHousing',
      shortDescription: 'Mercy Housing transforming lives through affordable housing.',
      longDescription: 'With your donation you provide affordable housing to vulnerable people, to build up a new live including health education, after-school support and financial literacy classes.',
      goal: 'Target : 10/20 (ETH)  ',

    },

    {
      id: 5,
      base64SVG: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJ5qeytNQCBizkPkFrsmSfLSo6JJWR_gynB9FFIHULIvlyCVxe',
      title: 'Name : Pro Bono SG',
      shortDescription: 'Helps out when you facing a legal problem.',
      longDescription: 'Pro Bono Singapore helps to access to justice when you cannot afford a lawyer.',
      goal: 'Target : 10/20 (ETH)  ',
    },
 
    // {
    //   id: 6,
    //   base64SVG: '/campaignImg6.png',
    //   title: 'Name : Save the Kids',
    //   description: 'Description This is the description for image 1.',
    //   goal: 'Target : 10/20 (ETH)  ',

    // },
 


  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      {images.map((image) => (
        <div key={image.id} className="p-2 border border-gray-300">
          <img src={image.base64SVG} alt={image.title} className="w-full h-auto" />
          <h2 className="text-lg font-bold mt-2">{image.title}</h2>
          <h2 className="text-lg font-bold mt-2">{image.shortDescription}</h2>
          <h2 className="text-lg font-bold mt-2">{image.longDescription}</h2>
          <h2 className="text-lg font-bold mt-2">{image.goal}</h2>

        </div>
      ))}
      <div className="p-2 border border-gray-300" style = {{ textAlign :'center' , margin :'Auto'}}>
        <h1> And many more..</h1>
      </div>

    </div>
  );
};


export default ImageGrid;
