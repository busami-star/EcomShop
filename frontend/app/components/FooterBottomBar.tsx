
const FooterBottomBar = () => {
    const year = new Date().getFullYear()
  return (
    <div>
         {/* Bottom Bar */}
         <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {year} EcomShop. All rights reserved.
            </div>
          </div>
        </div>
    </div>
  )
}

export default FooterBottomBar