import React from 'react';
import Slider from 'react-slick';
import '../styles/Blogs.css';  // Assuming you have styles

const BlogPost = () => {
  const posts = [
    {
        type: 'video',
        title: 'Blog post (video)',
        category: 'Session',
        description: 'Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren.',
        img: 'images/gallery/17.jpg',
        videoUrl: 'https://www.youtube.com/embed/mcixldqDIEQ',
    },
    {
        type: 'slider',
        title: 'Blog post (slider)',
        category: 'Studio, Session',
        description: 'No sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor a consetetur sadipscing elitr, sed diam.',
        images: [
            'images/gallery/18.jpg',
            'images/gallery/03.jpg',
            'images/gallery/04.jpg',
        ],
    },
    {
        type: 'image',
        title: 'Blog post (image)',
        category: 'Fashion, Studio, Session',
        description: 'Eirmod tempor invidunt labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.',
        img: 'images/gallery/19.jpg',
    },
    {
        type: 'image',
        title: 'Blog post (fashion)',
        category: 'Fashion',
        description: 'Sed diam voluptua vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren no sea takimata sanctus.',
        img: 'images/gallery/20.jpg',
    },
    {
        type: 'slider',
        title: 'Blog post (studio)',
        category: 'Studio',
        description: 'Takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
        images: [
            'images/gallery/21.jpg',
            'images/gallery/22.jpg',
            'images/gallery/23.jpg',
        ],
    },
    {
        type: 'video',
        title: 'Blog post (interview)',
        category: 'Interview',
        description: 'Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd.',
        img: 'images/gallery/24.jpg',
        videoUrl: 'https://www.youtube.com/embed/another-video',
    },
    {
        type: 'image',
        title: 'Blog post (session)',
        category: 'Session',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
        img: 'images/gallery/25.jpg',
    },
    {
        type: 'slider',
        title: 'Blog post (event)',
        category: 'Event',
        description: 'Sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
        images: [
            'images/gallery/26.jpg',
            'images/gallery/27.jpg',
            'images/gallery/28.jpg',
        ],
    },
    {
        type: 'image',
        title: 'Blog post (portfolio)',
        category: 'Portfolio',
        description: 'Magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren.',
        img: 'images/gallery/29.jpg',
    },
];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="blog-post-carousel section-padding-top-80 columns-padding-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <Slider {...settings}>
                            {posts.map((post, index) => (
                                <article key={index} className="vertical-item post with-background">
                                    {post.type === 'video' && (
                                        <div className="entry-thumbnail">
                                            <div className="embed-responsive embed-responsive-3by2">
                                                <a href={post.videoUrl} className="embed-placeholder">
                                                    <img src={post.img} alt={post.title} />
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                    {post.type === 'slider' && (
                                        <div className="entry-thumbnail">
                                            <Slider {...settings}>
                                                {post.images.map((image, idx) => (
                                                    <div key={idx}>
                                                        <img src={image} alt={`Slide ${idx + 1}`} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    )}
                                    {post.type === 'image' && (
                                        <div className="entry-thumbnail">
                                            <img src={post.img} alt={post.title} />
                                        </div>
                                    )}
                                    <div className="item-content entry-content">
                                        <h2 className="topmargin-0">
                                            <a href="blog-single-right.html">{post.title}</a>
                                        </h2>
                                        <div className="highlight fontsize-12 text-uppercase bold bottommargin-25">
                                            <a href="#">{post.category}</a>
                                        </div>
                                        <p>{post.description}</p>
                                        <div className="page-social-icons topmargin-25">
                                            <a className="social-icon color-icon soc-facebook" href="#" title="Facebook" />
                                            <a className="social-icon color-icon soc-twitter" href="#" title="Twitter" />
                                            <a className="social-icon color-icon soc-google" href="#" title="Google" />
                                            <a className="social-icon color-icon soc-linkedin" href="#" title="LinkedIn" />
                                            <a className="social-icon color-icon soc-pinterest" href="#" title="Pinterest" />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPost;
