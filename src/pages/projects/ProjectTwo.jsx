//import Nav from '../../components/navigation/Navigation.jsx';
import Footer from '../../components/footer/Footer.jsx';
import ImageMagnifier from './ImageMagnifier.jsx';


import landing from '../../assets/landing-nadal.jpg';

function ProjectOne () {

return (
    <>  
     
        <section className="project">
            <a href="/" className="project__link">← volver atrás</a>
            <h2 className="project__title">Display Campaign Holaluz</h2>
            <div className="project__text">
                <p className="project__parragraph">As part of the creative team at Holaluz, I design landing pages tailored to each of the company's campaigns. My work involves the full creation process using tools like HubSpot, where I not only build the pages but also implement <span className="animated-word animated-word--under">advanced CSS</span> styling improvements to go beyond the limitations of the CRM. This allows us to deliver more visually appealing and effective landing pages that align with the campaign's goals.</p>

                <p className="project__parragraph">Here's an example from the end-of-year campaign:</p>
            </div>
            <div className="project__image-cointainer">
                <ImageMagnifier imgSrc={landing} zoom={1.5} width={150} height={150}/>
            </div>
        </section>
        <Footer />
    </>
)
};


export default ProjectOne;