const FooterBottomBar = () => {
  const year = new Date().getFullYear()
  return (
      <div className="flex justify-center items-center w-full">
          {/* Bottom Bar */}
          <div className="mb-12 mt-1 pt-6 border-t border-gray-800 w-full">
              <div className="flex justify-center items-center">
                  <div className="text-sm text-gray-400">
                      © {year} EcomShop. All rights reserved.
                  </div>
              </div>
          </div>
      </div>
  )
}

export default FooterBottomBar