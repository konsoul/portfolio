import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import { Github, Linkedin } from 'lucide-react'
import { ThemeToggle } from '../ui/theme-toggle'

export default function IntegrationsSection({
  loaderData,
}: {
  loaderData?: { isSignedIn: boolean }
}) {
  return (
    <section id='hero'>
      <div className='py-16 px-4 sm:px-6 md:py-24 md:px-8'>
        <div className='mx-auto max-w-3xl sm:max-w-5xl mt-[2rem]'>
          <div className='grid items-center gap-8 sm:grid-cols-2'>
            <div className='relative mx-auto w-full max-w-xs sm:max-w-none rounded-2xl p-4 sm:p-8'>
              <div className='bg-radial absolute z-10'></div>
              <img
                src='/IMG_0098.png'
                className='drop-shadow-lg rounded-lg border-x-2 border-fuchsia-700'
                alt='Bradley Rappa'
              />
            </div>
            <div className='mx-auto mt-6 max-w-lg space-y-4 text-center sm:mt-0 sm:text-left'>
              <h2 className='font-bitcount text-2xl sm:text-3xl font-semibold text-charcoal-600 dark:text-charcoal-900'>
                Bradley Rappa
              </h2>
              <p className='text-sm sm:text-base text-charcoal-500 dark:text-charcoal-800'>
                Career transitioner and builder of efficient systems. Former timber cutter turned
                full-stack MERN developer with a decade of hands-on IT operations experience.
              </p>

              <div className='flex flex-wrap gap-2 sm:gap-3 items-center justify-center sm:justify-start'>
                <Button variant='default' size='sm' asChild>
                  <Link
                    to='https://www.linkedin.com/in/bradley-rappa/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin className='w-4 h-4' /> LinkedIn
                  </Link>
                </Button>

                <Button variant='outline' size='sm' asChild>
                  <Link to='https://github.com/konsoul' target='_blank' rel='noopener noreferrer'>
                    <Github className='w-4 h-4' /> GitHub
                  </Link>
                </Button>

                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
