import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import { Github } from 'lucide-react'
import { ThemeToggle } from '../ui/theme-toggle'

export default function IntegrationsSection({
  loaderData,
}: {
  loaderData?: { isSignedIn: boolean }
}) {
  return (
    <section id='hero'>
      <div className='bg-gradient-to-br from-tea-rose-700 to-desert-sand-800 dark:from-charcoal-200 dark:to-charcoal-400 py-24 md:py-32'>
        <div className='mx-auto max-w-5xl px-6 mt-[2rem]'>
          <div className='grid items-center sm:grid-cols-2'>
            <div className='relative mx-auto w-fit rounded-2xl p-8'>
              <div className='bg-radial absolute z-10'></div>
              <img src='../public/IMG_0098.png' className='rounded-lg' alt='Bradley Rappa' />
            </div>
            <div className='mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left'>
              <h2 className='text-balance text-3xl font-semibold md:text-4xl text-charcoal-600 dark:text-charcoal-900'>
                Bradley Rappa
              </h2>
              <p className='text-charcoal-500 dark:text-charcoal-800'>
                Career transitioner and builder of efficient systems. Former timber cutter turned
                full-stack MERN developer with a decade of hands-on IT operations experience.
              </p>

              <div className='flex gap-3 items-center'>
                <Button size='sm' asChild>
                  <Link to={loaderData?.isSignedIn ? '/dashboard' : '/sign-up'} prefetch='viewport'>
                    {loaderData?.isSignedIn ? 'View Dashboard' : 'Get Started'}
                  </Link>
                </Button>
                <Button variant='outline' size='sm' asChild>
                  <Link to='https://github.com/konsoul' target='_blank' rel='noopener noreferrer'>
                    <Github /> View on GitHub
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
