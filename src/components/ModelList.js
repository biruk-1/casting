import React, { useState } from 'react';
import '../styles/ModelList.css';

const images = [
  { id: 1, src: 'images/models_portrait/13.jpg', name: 'Samantha Hawk', category: 'fashion' },
  { id: 2, src: 'images/models_portrait/14.jpg', name: 'Lana Anderson', category: 'studio' },
  { id: 3, src: 'images/models_portrait/15.jpg', name: 'Pamela Stonem', category: 'session' },
  { id: 4, src: 'images/models_portrait/16.jpg', name: 'Naomy Olsen', category: 'fashion' },
  { id: 5, src: 'images/models_portrait/17.jpg', name: 'Gillian Rowe', category: 'studio' },
  { id: 6, src: 'images/models_portrait/18.jpg', name: 'Sonya Smith', category: 'session' },
  { id: 7, src: 'images/models_portrait/19.jpg', name: 'Rachel Smalders', category: 'fashion' },
  { id: 8, src: 'images/models_portrait/20.jpg', name: 'Joanne Irwin', category: 'studio' },
  { id: 9, src: 'images/models_portrait/21.jpg', name: 'Sarah Quinn', category: 'session' },
  { id: 10, src: 'images/models_portrait/22.jpg', name: 'Barbara Serney', category: 'fashion' },
  { id: 11, src: 'images/models_portrait/23.jpg', name: 'Pamela Torney', category: 'studio' },
  { id: 12, src: 'images/models_portrait/24.jpg', name: 'Jessica Lee', category: 'session' },
];

const ModelList = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('*'); // Default to show all

  const totalPages = 12;
  const imagesPerPage = 12;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages / 6) {
      setPage(newPage);
    }
  };

  const renderImages = () => {
    const filteredImages = selectedCategory === '*' 
      ? images 
      : images.filter(image => image.category === selectedCategory);

    return filteredImages.slice((page - 1) * imagesPerPage, page * imagesPerPage).map((image) => (
      <div key={image.id} className="image-item">
        <div className="vertical-item content-absolute">
          <div className="item-media">
            <img src={image.src} alt={image.name} />
            <div className="media-links">
              <div className="links-wrap">
                <a className="p-view prettyPhoto" title="" href={image.src} />
                <a className="p-link" title="" href="model.html" />
              </div>
            </div>
          </div>
        </div>
        <div className="item-title text-center">
          <h4>
            <a href="model.html">{image.name}</a>
          </h4>
        </div>
      </div>
    ));
  };

  const renderPagination = () => {
    const maxVisiblePages = 5;
    const startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages / 6, startPage + maxVisiblePages - 1);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className={i === page ? 'active' : ''}>
          <a href="#" onClick={() => setPage(i)}>
            {i}
          </a>
        </li>
      );
    }

    return (
      <ul className="pagination">
        <li>
          <a href="#" onClick={() => handlePageChange(page - 1)}>
            <span className="sr-only">Prev</span>
            <i className="rt-icon2-chevron-thin-left" />
          </a>
        </li>
        {pages}
        <li>
          <a href="#" onClick={() => handlePageChange(page + 1)}>
            <span className="sr-only">Next</span>
            <i className="rt-icon2-chevron-thin-right" />
          </a>
        </li>
      </ul>
    );
  };

  return (
    <section style={{margin:"20px", padding:"15px" }} className="ds ms page_models models_portrait gorizontal_padding section_padding_70">
      <div className="container-fluid">
        {/* Sort and Filter Section */}
        <div className="row boxed-padding bottommargin_40">
          <div className="col-lg-7">
            <div className="filters isotope_filters inline-block margin_0">
              <a href="#" data-filter="*" className={selectedCategory === '*' ? 'selected' : ''} onClick={() => setSelectedCategory('*')}>All</a>
              <a href="#" data-filter=".fashion" className={selectedCategory === 'fashion' ? 'selected' : ''} onClick={() => setSelectedCategory('fashion')}>Fashion</a>
              <a href="#" data-filter=".studio" className={selectedCategory === 'studio' ? 'selected' : ''} onClick={() => setSelectedCategory('studio')}>Studio</a>
              <a href="#" data-filter=".session" className={selectedCategory === 'session' ? 'selected' : ''} onClick={() => setSelectedCategory('session')}>Session</a>
            </div>
          </div>
          <div className="col-lg-5 text-lg-right">
            <form className="form-inline models-orderby">
              <div className="form-group select-group">
                <label className="sr-only" htmlFor="orderby">Sort By:</label>
                <select className="form-control orderby" name="orderby" id="orderby">
                  <option value="default">Default sorting</option>
                  <option value="name">Sort by name</option>
                  <option value="date">Sort by date</option>
                  <option value="random">Random sorting</option>
                </select>
                <i className="rt-icon2-chevron-thin-down form-button" />
              </div>
              <div className="form-group select-group">
                <label className="sr-only" htmlFor="orderby1">Sort By:</label>
                <select className="form-control orderby" name="orderby1" id="orderby1">
                  <option value="descending">Descending</option>
                  <option value="ascending">Ascending</option>
                </select>
                <i className="rt-icon2-chevron-thin-down form-button" />
              </div>
            </form>
          </div>
        </div>

        {/* Images Grid */}
        <div className="isotope_container isotope row masonry-layout">
          {renderImages()}
        </div>

        {/* Pagination */}
        <div className="row">
          <div className="col-sm-12 text-center margin_0">
            {renderPagination()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelList;
