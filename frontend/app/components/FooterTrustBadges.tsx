import { CreditCard, Shield, Award, } from "lucide-react"
const FooterTrustBadges = () => {
  return (
    <div>
        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <CreditCard className="h-8 w-8 text-gray-400" />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Secure Payment</h4>
                <p className="text-sm text-gray-400">All major cards accepted</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Shield className="h-8 w-8 text-gray-400" />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Shop with Confidence</h4>
                <p className="text-sm text-gray-400">Money-back guarantee</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Award className="h-8 w-8 text-gray-400" />
              <div className="ml-4">
                <h4 className="text-white font-semibold">Premium Quality</h4>
                <p className="text-sm text-gray-400">Certified products</p>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default FooterTrustBadges