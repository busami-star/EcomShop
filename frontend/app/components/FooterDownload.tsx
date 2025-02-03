import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,

} from "lucide-react"
const FooterDownload = () => {
    return (
        <div>
            <div>
                <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
                <div className="mb-8">
                    <p className="text-gray-400 mb-4">Download our mobile app</p>
                    <div className="space-y-3">
                        <a href="#" className="block">
                            <img
                                src="/api/placeholder/200/60"
                                alt="Download on App Store"
                                className="h-10 w-auto"
                            />
                        </a>
                        <a href="#" className="block">
                            <img
                                src="/api/placeholder/200/60"
                                alt="Get it on Google Play"
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>
                </div>
                <div>
                    <p className="text-gray-400 mb-4">Follow us on social media</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Youtube className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default FooterDownload