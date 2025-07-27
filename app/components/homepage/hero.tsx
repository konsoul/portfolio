import { useState, useEffect } from 'react'
import { Download, ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router'

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
      <div>
        <Button
          variant='ghost'
          className='opacity-0 scale-95 hover:opacity-100 hover:scale-100 transition-all duration-300 ease-out'
        >
          <Link
            to='https://music-portfolio-dusky.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Click Me!
          </Link>
        </Button>
      </div>
      {/* Full screen logo container */}

      <div className='h-screen w-full flex items-center justify-center relative px-4 sm:px-6 md:px-8'>
        <div className='relative group flex flex-col items-center w-full max-w-4xl justify-center'>
          <div className='logo-text transition-opacity duration-300 ease-in-out group-hover:opacity-50 text-center leading-none w-full'>
            BR
          </div>

          <div className='mt-4 text-center'>
            <p className='text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground'>
              Full-Stack Developer
            </p>
            <p className='text-sm sm:text-base text-muted-foreground/80 mt-2'>Bradley Rappa</p>
          </div>

          <div className='relative inset-0 bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300 rounded-lg'>
            <p className='text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              Can you find the Easter Egg?
            </p>
          </div>
        </div>

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
