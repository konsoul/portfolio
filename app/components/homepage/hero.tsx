import { useState, useEffect } from 'react'
import { Download, ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'

export default function HeroSection() {
  const [shouldFadeIn, setShouldFadeIn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldFadeIn(true)
    }, 5)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`transition-opacity duration-1000 ease-in-out ${
        shouldFadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Full screen logo container */}
      <div className='h-screen w-full flex items-center justify-center relative px-4 sm:px-6 md:px-8'>
        <img
          src='/logo-transparent.png'
          alt='Portfolio Logo'
          className='w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none object-contain'
        />

        {/* Download button positioned over the logo */}
        <div className='absolute bottom-20 sm:bottom-24 md:bottom-32 left-1/2 transform -translate-x-1/2 px-4'>
          <Button variant='secondary' size='sm' className='sm:size-lg' asChild>
            <a
              href='/Bradley-Rappa-Resume.docx'
              download='Bradley-Rappa-Resume.docx'
              className='inline-flex items-center gap-2 text-sm sm:text-base'
            >
              <Download className='w-3 h-3 sm:w-4 sm:h-4' />
              <span className='hidden xs:inline'>Download </span>Resume
            </a>
          </Button>

         
        </div>
        <div className='absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <ChevronDown className='w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground' />
        </div>
      </div>
    </div>
  )
}
