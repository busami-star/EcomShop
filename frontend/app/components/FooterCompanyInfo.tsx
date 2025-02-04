import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
const FooterCompanyInfo = () => {
  return (
    <div>
      {/* Company Info */}
      <div>
        <h3 className="text-xl font-bold text-white mb-6">About EcomShop</h3>
        <p className="text-gray-400 mb-6">
          Premium shopping destination for modern lifestyle essentials. Curating
          quality products since 2025 with a focus on sustainability and style.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-3 text-gray-400" />
            <span>123 Fashion Street, NY 10001</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-3 text-gray-400" />
            <span>+254 (101) 457-598</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-3 text-gray-400" />
            <span>victorbusami1@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-3 text-gray-400" />
            <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
        <div>
          
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCompanyInfo;
