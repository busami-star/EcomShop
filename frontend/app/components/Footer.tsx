import FooterBottomBar from "./FooterBottomBar";
import FooterNewsletter from "./FooterNewsletter";
import FooterCompanyInfo from "./FooterCompanyInfo";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterCustomerService from "./FooterCustomerService";
import FooterDownload from "./FooterDownload";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <FooterNewsletter />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FooterCompanyInfo />
          <FooterQuickLinks />
          <FooterCustomerService />
          <FooterDownload />
        </div>
      </div>
      <FooterBottomBar />
    </footer>
  );
};

export default Footer;
