import React from 'react';
import ModelProfile from './ModelProfile';
import AboutModel from './AboutModel';
import GalleryFilter from './GalleryFilter';

const ModelPage = () => {
  const modelData = {
    imageSrc: 'images/models_square/17.jpg',
    name: 'Whitney Seether',
    socialLinks: [
      { icon: 'soc-facebook', url: '#', title: 'Facebook' },
      { icon: 'soc-twitter', url: '#', title: 'Twitter' },
      { icon: 'soc-google', url: '#', title: 'Google' },
      { icon: 'soc-linkedin', url: '#', title: 'LinkedIn' },
      { icon: 'soc-pinterest', url: '#', title: 'Pinterest' }
    ],
    parameters: [
      { label: 'Height', value: '185' },
      { label: 'Bust', value: '79' },
      { label: 'Waist', value: '59' },
      { label: 'Hips', value: '87' },
      { label: 'Shoe', value: '39' },
      { label: 'Eyes', value: 'blue' }
    ],
    address: 'Jackson’s Street 567, San Diego, California, United States',
    phone: '8 (800) 456-2698',
    email: 'example@example.com'
  };

  const bio = [
    'At vero eos et accusam et justo duo dolores et ea rebum...',
    'At accusam aliquyam diam diam dolore dolores duo eirmod eos...'
  ];

  const filters = [
    { name: 'All', filter: '*', selected: true },
    { name: 'Tests', filter: '.tests', selected: false },
    { name: 'Editorials', filter: '.editorials', selected: false },
    { name: 'Snaps', filter: '.snaps', selected: false }
  ];

  const galleryItems = [
    { imageSrc: 'images/models_square/01.jpg', category: 'tests' },
    { imageSrc: 'images/models_square/02.jpg', category: 'editorials' },
    { imageSrc: 'images/models_square/03.jpg', category: 'snaps' },
    { imageSrc: 'images/models_square/04.jpg', category: 'tests' },
    { imageSrc: 'images/models_square/05.jpg', category: 'editorials' },
    { imageSrc: 'images/models_square/06.jpg', category: 'snaps' },
    // Add more images here
  ];

  return (
    <section className="ds model-page section_padding_70 section_padding_bottom_60 columns_padding_25">
      <div className="container">
        <div className="row">
          <ModelProfile {...modelData} />
          <AboutModel bio={bio} />
          <GalleryFilter filters={filters} galleryItems={galleryItems} />
        </div>
      </div>
    </section>
  );
};

export default ModelPage;
