export function Contact() {
  return (
    <div className="contact-page">
      <video
        className="contact-bg-video"
        autoPlay
        muted
        loop
        playsInline
        src="https://customer-y5wgl1yi7h7mp8sa.cloudflarestream.com/b40e4a27151b125f09052e5f1b95020e/iframe?poster=https%3A%2F%2Fcustomer-y5wgl1yi7h7mp8sa.cloudflarestream.com%2Fb40e4a27151b125f09052e5f1b95020e%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
      />
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
