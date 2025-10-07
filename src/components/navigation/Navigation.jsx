
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';

function Nav () {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 100); 
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <>  
                <section className="menu">
                 <button className={`menu__hamburguer ${isScrolled ? 'menu__hamburguer--scrolled' : ''}`} onClick={toggleMenu}>☰</button>
                
                <ul className={`menu__nav ${(!isScrolled) ? 'menu__nav--open' : (menuOpen && isScrolled) ? 'menu__nav--open menu__nav--open-scrolled' : 'menu__nav--scrolled'}`}>
                    <span onClick={toggleMenu} className={`menu__close ${(menuOpen && isScrolled) ? 'menu__close--scrolled' : ''}`}>x</span>
                    <ScrollLink 
                    to="home"
                    smooth={true}  
                    duration={100}   
                    offset={-120}         
                    >
                         <li className="menu__li">
                            <span className="menu__link" data-word="Home">Home</span>
                        </li>
                    </ScrollLink>
                    <ScrollLink 
                    to="projects"
                    smooth={true}  
                    duration={100}   
                    offset={-120}         
                    >
                        <li className="menu__li">
                            <span className="menu__link" data-word="Projects">Projects</span>
                        </li>
                    </ScrollLink>
                    <ScrollLink 
                    to="about"
                    smooth={true}  
                    duration={100}   
                    // offset por si pongo la nav fija: offset={-70}         
                    >
                        <li className="menu__li">
                            <span className="menu__link" data-word="About">About</span>
                        </li>
                    </ScrollLink>
                    <ScrollLink 
                    to="contact"
                    smooth={true}  
                    duration={100}   
                    // offset por si pongo la nav fija: offset={-70}         
                    >
                        <li className="menu__li">
                            <span className="menu__link" data-word="Contact">Contact</span>
                        </li>
                    </ScrollLink>
                </ul>
            </section>

        </>
    )
}


export default Nav;