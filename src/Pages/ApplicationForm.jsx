import React from 'react';
import { Helmet } from 'react-helmet';

const ApplicationForm = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Applications Closed | BrainBliTz 2025</title>
        <meta name="description" content="BrainBliTz applications are currently closed. Stay tuned for future opportunities to join our neuroscience competition." />
      </Helmet>
      
      <section className="body application-section">
        <div className="body-content">

            <div className="app-form-success" style={{textAlign: 'center'}}>
              <div className="app-success-icon" style={{background: '#950a55', animation: 'none'}}>
                <i className="fas fa-clock" style={{fontSize: '40px'}}></i>
              </div>
              <h2 style={{color: '#950a55', margin: '20px 0'}}>Applications are currently closed</h2>
              <p style={{fontSize: '18px', lineHeight: '1.6', marginBottom: '30px'}}>
                Thank you for your interest in BrainBliTz 2025. The application period has now closed. 
                We're currently reviewing all submitted applications.
              </p>
              
              <div style={{
                background: 'rgba(149, 10, 85, 0.1)', 
                padding: '20px', 
                borderRadius: '10px',
                marginBottom: '30px'
              }}>
                <h3 style={{color: '#950a55', marginBottom: '15px'}}>What's Next?</h3>
                <ul style={{textAlign: 'left', color: '#555', fontSize: '16px', lineHeight: '1.8'}}>
                  <li>We're reviewing all applications submitted before the deadline</li>
                  <li>Selected applicants will be contacted via email</li>
                  <li>Follow our social media for updates on future opportunities</li>
                </ul>
              </div>
              
              <p style={{fontSize: '18px', marginBottom: '30px'}}>
                In the meantime, you can still join our communities to stay updated:
              </p>
              
              <div className="app-whatsapp-links">
                <a href="https://whatsapp.com/channel/0029VafT3tA4SpkPFTDYwQ2X" 
                   className="app-whatsapp-link"
                   target="_blank" 
                   rel="noopener noreferrer">
                  <i className="fab fa-whatsapp" style={{marginRight: '10px'}}></i>
                  WhatsApp Channel
                </a>
                <a href="https://chat.whatsapp.com/GD6B3NRcNtDDvf5XmpsKM8?mode=ac_t" 
                   className="app-whatsapp-link"
                   target="_blank" 
                   rel="noopener noreferrer">
                  <i className="fab fa-whatsapp" style={{marginRight: '10px'}}></i>
                  WhatsApp Group (Arabic)
                </a>
                <a href="https://chat.whatsapp.com/BmhLYEV8YEhC6NEJvDPYwp" 
                   className="app-whatsapp-link"
                   target="_blank" 
                   rel="noopener noreferrer">
                  <i className="fab fa-whatsapp" style={{marginRight: '10px'}}></i>
                  WhatsApp Group (English)
                </a>
              </div>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ApplicationForm;
