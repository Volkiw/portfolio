// import Nav from '../navigation/Navigation.jsx';

function About () {

return (
    <>  
     <section className="section" id="about">
        <h2 className="section__title">ABOUT</h2>
        <div className="section__text">
                    <p>I am a web designer with <span className="animated-word animated-word--under">over 10 years of experience</span> blending visual design with HTML and CSS, recently expanding my skill set as a Full Stack Developer. Curious by nature and deeply drawn to code, I enjoy transforming ideas into clean, functional, and engaging digital experiences. I have worked both as a freelancer and in collaboration with companies such as X, X, and X, adapting easily to different teams and creative challenges.</p>
                    <p>This very website has been developed using React and Sass, and you can take a look at its code on my GitHub through this <a className="animated-word animated-word--bg" href="https://github.com/Volkiw/portfolio" target="_blank">link</a>.</p>
        </div>

        <div className="about-grid">
            <div className="about-grid__izq">
                <p><strong>Creative Designer</strong></p>
                <p className="about-grid__text--small">Holaluz, Barcelona</p>
                <p className="about-grid__text--small">since october 2021</p>
            </div>
            <div className="about-grid__dcha">
                <p>Email and web campaign design: HTML/CSS email templates for CRM platforms, creation of banners and landing pages, and brand identity work.</p>
            </div>

            <div className="about-grid__izq">
                <p><strong>Web and Graphic Designer</strong></p>
                <p className="about-grid__text--small">Freelance, Madrid - Barcelona</p>
                <p className="about-grid__text--small">2020-2021</p>
            </div>
            <div className="about-grid__dcha">
                <p>Email and web campaign design: HTML/CSS email templates for CRM platforms, creation of banners and landing pages, and brand identity work.</p>
            </div>
        </div>
        
      </section>

    </>
)
};


export default About;