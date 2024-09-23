import React from 'react';

const GalleryFilter = ({ filters, galleryItems }) => (
  <div className="col-md-12">
    <div className="filters isotope_filters topmargin_50">
      {filters.map((filter, index) => (
        <a href="#" data-filter={filter.filter} key={index} className={filter.selected ? 'selected' : ''}>
          {filter.name}
        </a>
      ))}
    </div>
    <div className="columns_padding_5">
      <div className="isotope_container isotope row masonry-layout" data-filters=".isotope_filters">
        {galleryItems.map((item, index) => (
          <div key={index} className={`isotope-item bottommargin_10 col-md-3 col-sm-4 col-xs-6 ${item.category}`}>
            <div className="vertical-item gallery-item content-absolute text-center cs">
              <div className="item-media">
                <img src={item.imageSrc} alt="" />
                <div className="media-links">
                  <a className="prettyPhoto abs-link" title="" data-gal="prettyPhoto[gal]" href={item.imageSrc} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default GalleryFilter;
