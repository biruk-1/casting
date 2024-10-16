import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import {Link} from  'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import  DropdownMenu from './UserProfile'
 
const Header = () => {
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const addComponent = document.querySelector('.adds'); // Adjust this selector if needed
            const addComponentHeight = addComponent ? addComponent.offsetHeight : 0;

            // Shrink header after scrolling past the '.adds' component (or any height you define)
            if (window.scrollY > addComponentHeight) {
                setIsShrunk(true);
            } else {
                setIsShrunk(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`page_header ${isShrunk ? 'shrink' : ''}`}>
            <div className="container-fluid">
                <div className="col-md-3 col-sm-6 text-center">
                    <a href="./" className="logo logo_image">
                        <h1>
                            casting
                            <span className="muellerhoff">Agency</span>
                        </h1>
                    </a>
                </div>
                <div className="col-md-6 text-center">
                    <nav className="mainmenu_wrapper">
                        <ul className="mainmenu nav sf-menu">
                            <li className="active">
                                <Link to={'./'}>
                                <a href="index.html">Home</a>
                                </Link>
                                
                            </li>
                            <li>
                                <a href="about.html">Pages</a>
                                <ul>
                                    <Link to = {'./'}>
                                    <li> <a> Home </a> </li>
                                    </Link>
                                    <Link to = {'./preview'}>
                                    <li><a href="blog-right.html">Preview</a></li>
                                    </Link>
                                    <Link to = {'./model-List'}>
                                    <li><a href="gallery-regular.html">ModelList</a></li>
                                    </Link>
                                    <Link to = {'./EmailUs'}>
                                    <li><a href="header1.html">EmailUs</a></li>
                                    </Link>
                                    <Link to = {'./Details'}>
                                    <li><a href="breadcrumbs1.html">Details</a></li>
                                    </Link>
                                    <Link to = {'./blog'}>
                                    <li><a href="footer1.html">Blogs</a></li>
                                    </Link>
                                    <Link to = {'./copyright'}>
                                    <li><a href="copyright1.html">Copyright</a></li>
                                    </Link>
                                </ul>
                            </li>
                            <li>
                                <a href="models.html">Catagories</a>
                                <ul>
                                    <li><a href="models.html">Fashion Models Castings</a></li>
                                    <li><a href="models2.html">Movies and Tv Castings</a></li>
                                    <li><a href="model.html">Song Models Castings</a></li>
                                    <li><a href="model.html">Comercial Castings</a></li>
                                </ul>
                            </li>
                            <li>
                                <Link to = {'/user-status'}>
                                <a href="userStats.html">myStats</a>
                                </Link>
                            </li>
                           
                        </ul>
                    </nav>
                    <span className="toggle_menu">
                        <span />
                    </span>
                </div>
                <div className="col-md-3 col-sm-6 header-contacts text-center hidden-xs">
                    <div className="highlight inline-block fontsize_30 thin">
                        (800) 543 4625
                    </div>
                    <div className="fontsize_20 grey topmargin_-5">24/7 free calls</div>
                </div>
                <div>   
                
                   <DropdownMenu />
                

                </div>
                
            </div>
        </header>
    );
};

export default Header;
