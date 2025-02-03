"use client"
import { useState, useEffect } from "react"
import { XIcon, ArrowRight, Bell, Timer, Gift, Truck, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  })

  // Multiple banner contents for rotation
  const banners = [
    {
      type: "promotion",
      icon: <Gift className="h-5 w-5" />,
      bgClass: "bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800",
      content: "Special Launch Offer",
      description: "Get 30% off on all premium collections",
      code: "PREMIUM30",
      buttonText: "Shop Premium"
    },
    {
      type: "shipping",
      icon: <Truck className="h-5 w-5" />,
      bgClass: "bg-gradient-to-r from-emerald-800 via-teal-900 to-emerald-800",
      content: "Free Express Shipping",
      description: "On orders over $100 - Limited Time Only",
      buttonText: "View Details"
    },
    {
      type: "flash-sale",
      icon: <Timer className="h-5 w-5" />,
      bgClass: "bg-gradient-to-r from-rose-800 via-red-900 to-rose-800",
      content: "Flash Sale Now Live",
      description: "Up to 50% off on selected items",
      buttonText: "Shop Sale"
    },
    {
      type: "payment",
      icon: <CreditCard className="h-5 w-5" />,
      bgClass: "bg-gradient-to-r from-blue-800 via-indigo-900 to-blue-800",
      content: "Buy Now, Pay Later",
      description: "0% interest on orders over $200",
      buttonText: "Learn More"
    }
  ]

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          return { hours: 24, minutes: 0, seconds: 0 }
        }
        
        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes = prev.minutes - 1
        }
        if (newMinutes < 0) {
          newMinutes = 59
          newHours = prev.hours - 1
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Auto rotate banners
  useEffect(() => {
    const rotationTimer = setInterval(() => {
      setCurrentBannerIndex(prev => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(rotationTimer)
  }, [])

  if (!isVisible) return null

  const currentBanner = banners[currentBannerIndex]

  return (
    <div className={`relative isolate ${currentBanner.bgClass} transition-all duration-500`}>
      {/* Marquee Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex space-x-4 animate-marquee">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="text-white/5 whitespace-nowrap text-[10rem] font-bold transform -rotate-12"
            >
              {currentBanner.code || "SALE"}
            </div>
          ))}
        </div>
      </div>

      {/* Main Banner Content */}
      <div className="relative flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            {currentBanner.icon}
          </div>
          <div className="font-medium text-white">
            <span className="hidden sm:inline">{currentBanner.content} | </span>
            <span>{currentBanner.description}</span>
            {currentBanner.code && (
              <span className="ml-2 inline-flex items-center rounded-full bg-white/20 px-2 py-1 text-sm">
                Code: <span className="font-mono ml-1">{currentBanner.code}</span>
              </span>
            )}
          </div>
        </div>

        {/* Center Section - Timer (for flash sales) */}
        {currentBanner.type === 'flash-sale' && (
          <div className="hidden md:flex items-center space-x-4 text-white">
            <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col">
                  <span className="countdown font-mono text-xl">
                    {String(value).padStart(2, '0')}
                  </span>
                  <span className="text-xs capitalize">{unit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden sm:flex items-center bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 transform transition"
          >
            {currentBanner.buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Banner Navigation Dots */}
          <div className="hidden sm:flex items-center space-x-1">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentBannerIndex 
                    ? 'bg-white scale-100' 
                    : 'bg-white/50 scale-75 hover:scale-90'
                }`}
                onClick={() => setCurrentBannerIndex(index)}
              />
            ))}
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-white/80 transition-colors"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Add the marquee animation to your global CSS
const style = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-marquee {
    animation: marquee 20s linear infinite;
  }
`

export default Banner