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
      <div className='h-screen w-full flex items-center justify-center relative'>
        <img
          src='/logo-transparent.png'
          alt='Portfolio Logo'
          className='w-full h-full object-contain max-w-none'
        />

        {/* Download button positioned over the logo */}
        <div className='absolute bottom-32 left-1/2 transform -translate-x-1/2'>
          <Button variant='secondary' size='lg' asChild>
            <a
              href='/Bradley-Rappa-Resume.docx'
              download='Bradley-Rappa-Resume.docx'
              className='inline-flex items-center gap-2'
            >
              <Download className='w-4 h-4' />
              Download Resume
            </a>
          </Button>

         
        </div>
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <ChevronDown className='w-6 h-6 text-muted-foreground' />
        </div>
      </div>
    </div>
  )
}
