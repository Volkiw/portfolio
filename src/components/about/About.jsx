// import Nav from '../navigation/Navigation.jsx';

function About () {

return (
    <>  
     <section className="section" id="about">
        <h2 className="section__title">ABOUT</h2>
        <div className="section__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque saepe <span className="animated-word animated-word--bg">totam beatae</span>, rem ex, suscipit dolorum iusto a quam amet vitae sed quidem odio quia, ducimus esse. <span className="animated-word animated-word--under">Voluptatibus</span>, odio?</p>
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