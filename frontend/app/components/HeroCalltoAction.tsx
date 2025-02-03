import { Button } from "@/components/ui/button";
import Link from "next/link";
const HeroCalltoAction = () => {
  return (
    <div>
      {/* Call to Action */}
      <div className="mt-20 text-center">
        <Link href="/products">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg">
            View All Collections
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroCalltoAction;
