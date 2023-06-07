import React, {useEffect, useContext} from 'react';
import { context } from '../../global';
import "./navbar.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils,faShoppingCart,faSearch,faTimes, faBars, faHeart } from '@fortawesome/free-solid-svg-icons'
const Navbar = ({windowSize, setWindowSize}) => {
    const { setUserInput} = useContext(context);

    const [search, setSearch] = React.useState("");
    const [pageOffset, setPageOffset] = React.useState(window.pageYOffset);
    
    const handleSearch = (e) => {
        e.preventDefault();
        setUserInput(search);
        hideSearchForm();
        document.getElementById("link").click();
    }
    const showSearchForm = () => {
        document.querySelector(".search-form").classList.add("down")
    }

    const hideSearchForm = () => {
        document.querySelector(".search-form").classList.remove("down")
    }

    const showSmallLinks = () => {
        document.querySelector(".small-nav-links").classList.add("show-small-links")
    }

    const hideSmallLinks = () => {
        document.querySelector(".small-nav-links").classList.remove("show-small-links")
    }

    window.onresize = () => {
        setWindowSize(window.innerWidth)
    }


    useEffect(() => {
        window.onscroll = () => {
            setPageOffset(window.pageYOffset)
        }
    },[pageOffset])


    const LargeLinks = () => {
        return (
            <div className="nav-links">
                <ul className="list-links">
                    <li><a href="/Food_Restaurant#main">Home</a></li>
                    <li><a href="/Food_Restaurant#shop">Dishes</a></li>
                    <li><a href="/Food_Restaurant#about">About</a></li>
                    <li><a href="/Food_Restaurant#dishes">Menu</a></li>
                    <li><a href="/Food_Restaurant#Reviews">Reviews</a></li>
                    <li><a href="/Food_Restaurant#orderForm">Order</a></li>
                </ul>
            </div>
        )
    }

    const SmallLinks = () => {
        return (
            <div className="nav-links">
                
                <div className="menu-icon" onClick={showSmallLinks}>
                    <div><FontAwesomeIcon icon={faBars} /></div>
                </div>
                <div className="small-nav-links">
                    <div className="close" onClick={hideSmallLinks}>
                        <button><FontAwesomeIcon icon={faTimes} /></button>
                    </div>
                    <ul className="list-small-links">
                        <li><a href="/Food_Restaurant#main">Home</a></li>
                        <li><a href="/Food_Restaurant#about">About</a></li>
                        <li><a href="/Food_Restaurant#shop">Dishes</a></li>
                        <li><a href="/Food_Restaurant#dishes">Menu</a></li>
                        <li><a href="/Food_Restaurant#Reviews">Reviews</a></li>
                        <li><a href="/Food_Restaurant#orderForm">Order</a></li>
                    </ul>
                </div>
            </div>
        )
    }
    
  return (
    <header style={{background: "#fff" ,
    boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 10%)"}}>
        <nav style={{padding: windowSize > 1200 ? "0 9%" : "1rem"}}>
            <div className="search-form">
                <div className="inner-search-form">
                    <div className="close" onClick={hideSearchForm}>
                    <button><FontAwesomeIcon icon={faTimes} /></button>
                    </div>
                    <form className='header-form' onSubmit={handleSearch}>
                        <input 
                        onChange={(e)=>{setSearch(e.target.value)}} 
                        type="text" 
                        name='search' 
                        placeholder='search with first letter or main ingrediant'
                        value={search}
                        />
                        <button type='submit'><FontAwesomeIcon className='search-icon' icon={faSearch} /></button>
                    </form>
                </div>
            </div>
            <div className="logo">
                <FontAwesomeIcon icon={faUtensils} color="#219150"/>
                Resto.
            </div>
            <div className="links-btns">
            {windowSize > 940 ? <LargeLinks /> : <SmallLinks />}
            <div className="nav-icons nav-spinning-icons">
                <div onClick={showSearchForm}><FontAwesomeIcon icon={faSearch} /></div>
                <div><FontAwesomeIcon icon={faHeart} /></div>
                <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar