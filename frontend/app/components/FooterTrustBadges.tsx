import { CreditCard, Shield, Award } from "lucide-react";

const FooterTrustBadges = () => {
  return (
    <div>
      {/* Trust Badges */}
      <div className="mt-10 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-3 rounded-full mb-2">
              <CreditCard className="h-10 w-10 text-yellow-400 drop-shadow-xl" />
            </div>
            <h4 className="text-white font-semibold">Secure Payment</h4>
            <p className="text-sm text-gray-400">All major cards accepted</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-3 rounded-full mb-2">
              <Shield className="h-10 w-10 text-blue-400 drop-shadow-xl" />
            </div>
            <h4 className="text-white font-semibold">Shop with Confidence</h4>
            <p className="text-sm text-gray-400">Money-back guarantee</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-800 p-3 rounded-full mb-2">
              <Award className="h-10 w-10 text-green-400 drop-shadow-xl" />
            </div>
            <h4 className="text-white font-semibold">Premium Quality</h4>
            <p className="text-sm text-gray-400">Certified products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTrustBadges;
