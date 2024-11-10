
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-10 mt-12 font-serif">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-sm leading-relaxed mb-4">
            Shine Shine is a professional cleaning services company dedicated to providing top-notch, reliable cleaning solutions for homes and businesses. We use eco-friendly products and the latest techniques to ensure your space is spotless and safe. Our experienced team is committed to delivering exceptional service, always prioritizing customer satisfaction.
            </p>
            <p className="text-sm">Our expert technicians are available to help with all types of car issues, no matter how big or small.</p>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-none space-y-2 text-sm">
              <li><Link href="/services" className="text-sky-400 hover:underline">windows cleaning</Link></li>
              <li><Link href="/services" className="text-sky-400 hover:underline">House cleaning</Link></li>
              <li><Link href="/services" className="text-sky-400 hover:underline">office cleaning</Link></li>
              <li><Link href="/services" className="text-sky-400 hover:underline">carpet cleaning</Link></li>
              <li><Link href="/services" className="text-sky-400 hover:underline">furniture cleaning</Link></li>
              <li><Link href="/services" className="text-sky-400 hover:underline">floor cleaning</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm mb-4">Get in touch with us for any inquiries or assistance.</p>
            <p className="text-sm">Email: <Link href="mailto:nh7220869@gmail.com" className="text-sky-400 hover:underline">nh7220869@gmail.com
            </Link></p>
            <p className="text-sm font-serif">Phone: <a href="tel:+92 3021260393" className="text-sky-400 hover:underline">+92 3021260393</a></p>
            <p className="text-sm">Visit us: Industrial Area, Korangi, Karachi</p>

            {/* Social Media Links */}
            <div className="mt-4">
              <Link href="https://www.facebook.com/profile.php?id=100087271853140&rdid=pWg0Pj0xglmsWbnu&share_url=https%3A%2F%2Fwww.faceb" className="text-sky-400 mx-2 hover:underline">Facebook</Link>
              <Link href="https://www.instagram.com/noorulsehar2003/profilecard/?igsh=MWJkeTJyeWZpZzNobA==" className="text-sky-400 mx-2 hover:underline">Instagram</Link>
              <Link href="https://www.linkedin.com/in/noorul-sehar-7468b6246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-sky-400 mx-2 hover:underline">Linkedin</Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-light-cream pt-4 text-center text-sm">
          <p> @shine shine © 2024 All Rights Reserved </p>
          
          
      </div>
      </div>
    </footer>
  );
};

export default Footer;
