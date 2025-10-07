import arrow from '../../assets/arrow-up.svg';

function Footer () {
    return (
        <>
            <footer className="section footer" id="footer">
                <div>
                    <p>footer</p> 
                </div>
                <div>
                     <img className="footer__arrow" src={arrow} />
                </div>
            </footer>
        </>

    )
};

export default Footer;