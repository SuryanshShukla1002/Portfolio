import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-col md:flex-row justify-between items-center md:items-start px-5 py-6">
        <div className="flex flex-col justify-center md:items-start items-center mb-4 md:mb-0">
          <p className="font-semibold text-white">Suryansh Shukla</p>
        </div>

        <div className="flex gap-4 mb-4 md:mb-0">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon hover:scale-110 transition-transform"
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-white text-sm">
            © {new Date().getFullYear()} Suryansh Shukla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
