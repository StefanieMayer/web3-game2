import React from 'react';

const ImageGrid = () => {
  const images = [
    {
      id: 1,
      base64SVG: '/landing.png',
      title: 'Name : Save the World',
      description: 'Description This is the description for image 1.',
      goal: 'Target : 10/20 (ETH)  ',

    },
    {
      id: 2,
      base64SVG: '/landing.png',
      title: 'Name : Save the Farm',
      description: 'Description This is the description for image 1.',
      goal: 'Target : 10/20 (ETH)  ',

    },
 
    {
      id: 3,
      base64SVG: '/landing.png',
      title: 'Name : Save the Tree',
      description: 'Description This is the description for image 1.',
      goal: 'Target : 10/20 (ETH)  ',

    },
 
    {
      id: 4,
      base64SVG: '/landing.png',
      title: 'Name : Save the Man',
      description: 'Description This is the description for image 1.',
      goal: 'Target : 10/20 (ETH)  ',

    },
    {
      id: 5,
      base64SVG: '/landing.png',
      title: 'Name : Save the Woman',
      description: 'Description This is the description for image 1.',
      goal: 'Target : 10/20 (ETH)  ',

    },
 
    {
      id: 6,
      base64SVG: '/landing.png',
      title: 'Name : Save the Kids',
      description: 'Description This is the description for image 1.',
      goal: 'Target : 10/20 (ETH)  ',

    },
 


  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      {images.map((image) => (
        <div key={image.id} className="p-2 border border-gray-300">
          <img src={image.base64SVG} alt={image.title} className="w-full h-auto" />
          <h2 className="text-lg font-bold mt-2">{image.title}</h2>
          <h2 className="text-lg font-bold mt-2">{image.description}</h2>
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
