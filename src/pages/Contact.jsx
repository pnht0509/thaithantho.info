export function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-bg-video" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src="https://customer-y5wgl1yi7h7mp8sa.cloudflarestream.com/96d0da695566266b50c8aeb4070b181e/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-y5wgl1yi7h7mp8sa.cloudflarestream.com%2F96d0da695566266b50c8aeb4070b181e%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
            loading="lazy"
            style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
            title="Contact background video"
          />
        </div>
      </div>
      <div className="contact-center">
        <h1 className="contact-title">GET IN TOUCH</h1>
        {/* <p className="contact-text">For collaborations, commissions, or inquiries:</p> */}
        <p className="contact-text">
          <a href="mailto:pnht.work@gmail.com" className="contact-link">pnht.work@gmail.com</a>
        </p>
        <p className="contact-text">
          <a href="https://www.instagram.com/pnhthai/" target="_blank" rel="noreferrer" className="contact-link">@pnhthai</a>
        </p>
        <p className="contact-text">
          <a href="https://www.linkedin.com/in/pnht/" target="_blank" rel="noreferrer" className="contact-link">Linkedin</a>
        </p>
        <p className="contact-text">Melbourne, Australia</p>
      </div>
    </div>
  );
}
