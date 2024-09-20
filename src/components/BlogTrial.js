import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaGoogle, FaLinkedin, FaPinterest } from 'react-icons/fa';
import '../styles/BlogTrial.css';

// Blog posts data
const blogPosts = [
  {
    title: 'Blog post (video)',
    category: 'Session',
    description: 'Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren.',
    image: '/images/gallery/16.jpg',
    videoUrl: 'https://www.youtube.com/embed/mcixldqDIEQ',
  },
  {
    title: 'Another Blog Post',
    category: 'Workshop',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
    image: '/images/gallery/17.jpg',
    videoUrl: 'https://www.youtube.com/embed/another-video',
  },
  {
    title: 'Third Blog Post',
    category: 'Conference',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    image: '/images/gallery/18.jpg',
    videoUrl: 'https://www.youtube.com/embed/third-video',
  },
  {
    title: 'Fourth Blog Post',
    category: 'Event',
    description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    image: '/images/gallery/19.jpg',
    videoUrl: 'https://www.youtube.com/embed/fourth-video',
  },
  {
    title: 'Fifth Blog Post',
    category: 'Meetup',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    image: '/images/gallery/20.jpg',
    videoUrl: 'https://www.youtube.com/embed/fifth-video',
  },
];

function BlogTrial() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style= {{padding:"-10px 0 -10px 0"}} className="blog-container">
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className={`blog-post ${index === 2 ? 'middle' : 'side'}`}
        >
          <div className="blog-thumbnail">
            <a
              href={post.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={post.image}
                alt="Blog Thumbnail"
              />
            </a>
          </div>

          <div className="blog-content">
            <h2 className="blog-title">
              <a href="blog-single-right.html">
                {post.title}
              </a>
            </h2>
            <div className="blog-category">
              <a href="#!">{post.category}</a>
            </div>
            <p className="blog-description">
              {post.description}
            </p>
            <div className="page-social-icons">
              <a href="#!" title="Facebook">
                <FaFacebook size={16} />
              </a>
              <a href="#!" title="Twitter">
                <FaTwitter size={16} />
              </a>
              <a href="#!" title="Google">
                <FaGoogle size={16} />
              </a>
              <a href="#!" title="LinkedIn">
                <FaLinkedin size={16} />
              </a>
              <a href="#!" title="Pinterest">
                <FaPinterest size={16} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogTrial