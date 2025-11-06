export function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-bg-video" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <video
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://files.thaithantho.info/Timeline1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="contact-center">
        <h1 className="contact-title">GET IN TOUCH</h1>
        {/* <p className="contact-text">For collaborations, commissions, or inquiries:</p> */}
        <p className="contact-text">
          Email: <a href="mailto:pnht.work@gmail.com" className="contact-link">pnht.work@gmail.com</a>
        </p>
        <p className="contact-text">
          Instagram: <a href="https://www.instagram.com/pnhthai/" target="_blank" rel="noreferrer" className="contact-link">@pnhthai</a>
        </p>
        <p className="contact-text">
          LinkedIn: <a href="https://www.linkedin.com/in/pnht/" target="_blank" rel="noreferrer" className="contact-link">Thai Phan</a>
        </p>
        <p className="contact-text">
          CV: <a href="https://files.thaithantho.info/Thai%20Phan%20Resume.pdf" target="_blank" rel="noreferrer" className="contact-link">Resume.pdf</a>
        </p>
        <p className="contact-text">Melbourne, Australia</p>
      </div>
    </div>
  );
}
