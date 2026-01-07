// import Nav from '../navigation/Navigation.jsx';
import AnimatedText from './AnimatedText.jsx';


function Home () {

return (
    <>  
        <header className="home">
            
            <section className="hero" id="home">
                <div className="hero__info">
                    <h1 className="hero__title">WELCOME</h1>
                    <p>I'm <span className="animated-word animated-word--under">Laura</span>, Full Stack Developer and Designer from Madrid, currently living in Barcelona. More than 10 years of experience on web design, loving CSS and starting to experience the magic of coding.</p>
                </div>
                <div className="hero__image-container">
                    {/* <img className="home__image" src="https://placehold.co/600x400/343434/FFF" /> */}
                    <AnimatedText />
                </div>
            </section>
        </header>

        
    </>
)
};


export default Home;