
import hero1 from './omar.png';
import hero2 from './Bunmi.png';
import hero3 from './ranti.png';

import './App.css';


import linkedin from './linkedin.png';
import mail from './email.png';
import twitter from './twitter.png';
import instagram from './instagram1.png';

function App() {
  return (
    <div className="App-banner">

    <div className='header'>
    
        <h2>
          About Omar's Team
        </h2>
        <p>Our media buying team is proficient in leveraging strategic skills to enhance sales and amplify brand visibility through targeted advertising campaigns. 
        With a proven track record spanning diverse industries and niches, we have honed our expertise through numerous successful projects.</p>
        
        <p>Our collective wealth of experience and specialized knowledge ensures that your message resonates with the intended audience, driving meaningful engagement and eliciting desired actions. Trust us to optimize your advertising initiatives and achieve unparalleled results.</p>
    </div>

    <span className='divider' style={{}}> </span>

      <div className='inner-banner'>
          
          <div className="banner-image" >
          <img src={hero1} alt='Omar team' className='camera'/>
          </div>
          
          <div className="banner-caption" >
          <h3>Omar Gourashi </h3>
          <h4>Team Lead, Media & Marketing Professional</h4>
                      <p>Omar Gourashi' Master's degree in Global Business Management, is complemented by his specialized certifications in Media Buying Strategy and Marketing and Advertisement. 
                      With a keen understanding of market dynamics and consumer behavior, Omar excels in crafting strategic media buying plans to optimize advertising budgets and maximize brand exposure. 
                      His expertise lies in developing targeted campaigns that resonate with diverse audiences, driving tangible results for his clients. With a meticulous approach and a passion for innovation, Omar consistently delivers impactful solutions that exceed expectations in today's competitive media landscape.</p>

                      <ul className='skills'>
                      <h4>Skills and Certifications</h4>
                        <li>Master's degree, Global business management</li>
                        <li>Media Buying Strategy</li>
                        <li>Marketing and Advertisement Specialization</li>
                      </ul>
                    <div className="about-socials">
                    <a href="https://www.linkedin.com/in/omar-qurashi-/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Instagram"/></a>
                    <a href="mailto:omar@omarsalesteam.com" target="_blank" rel="noreferrer"><img src={mail} alt="TikTok"/></a>
                   
                   </div>
  
          </div>
          
        
        </div>

        <div className='inner-banner' id='bunmi'>
          
        <div className="banner-caption" >
        <h3>Bunmi Oladipupo </h3>
        <h4>Digital Marketer and Target Analyst</h4>

                    <p>Bunmi Oladipupo is a seasoned Digital Marketer and Target Analyst with a passion for driving impactful marketing strategies. 
                    With a comprehensive background in digital marketing, data analysis, and audience targeting, Bunmi excels in crafting tailored campaigns that deliver measurable results. 
                    Leveraging a keen understanding of consumer behavior and market trends, Bunmi consistently optimizes marketing efforts to achieve business objectives and enhance brand presence. 
                    With a proven track record of success, Bunmi is dedicated to driving growth and maximizing ROI for clients across various industries.</p>
                    <ul className='skills'>
                      <h4>Certifications</h4>
                        <li>Strategic CRM & Sales Technique Specialization</li>
                        <li>Google Digital Marketing & E-Commerce Specialization</li>
                        <li>Display & Video 360 Certification</li>
                      </ul>
                    <div className="about-socials">
                    <a href="https://www.linkedin.com/in/bunmioladipupo" target="_blank" rel="noreferrer"><img src={linkedin} alt="Instagram"/></a>
                    <a href="https://twitter.com/hi_ola" target="_blank" rel="noreferrer"><img src={twitter} alt="TikTok"/></a>
                   </div>
        </div>
        <div className="banner-image" >
        <img src={hero2} alt='Omar team' className='camera'/>
        </div>
      
      </div>

      <div className='inner-banner'>
          
        <div className="banner-image" >
        <img src={hero3} alt='Omar team' className='camera'/>
        </div>
        
        <div className="banner-caption" >
        <h3>Ranti Fabilola </h3>
        <h4>Media Display and Graphics Strategist</h4>

                    <p>Rantimi Fabilola is a professional graphics designer and illustrator with over 5 years of experience in crafting unique brand identities, stationary designs, and digital illustrations for a diverse range of brands and companies. 
                    With a seasoned approach, Rantimi goes beyond mere design creation; instead, she offers comprehensive brand solutions by meticulously crafting identities tailored to each brand or company's unique essence. 
                    Through her expertise and dedication, Rantimi consistently delivers impactful designs that resonate with clients and effectively communicate their brand message.</p>
                    <ul className='skills'>
                      <h4>Skills </h4>
                        <li>Brand Design</li>
                        <li>Graphics Design</li>
                        <li>Illustration</li>
                        <li>Photo Manipulation</li>
                      </ul>
                    <div className="about-socials">
                    <a href="https://instagram.com/rantimisparks" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram"/></a>
                    <a href="https://twitter.com/rantidadesigner" target="_blank" rel="noreferrer"><img src={twitter} alt="TikTok"/></a>
                      
                   </div>
        </div>
        
      
      </div>
    </div>
  );
}

export default App;
