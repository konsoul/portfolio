import { memo } from 'react'
import { Link } from 'react-router'
import { LogoIcon } from '~/components/logo'
import { Convex, ReactIcon, ReactRouter, TailwindIcon, Typescript } from '~/components/logos'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
// import { Navbar } from './navbar'
import { Github } from 'lucide-react'
import { ThemeToggle } from '../ui/theme-toggle'

export default function IntegrationsSection({
  loaderData,
}: {
  loaderData?: { isSignedIn: boolean }
}) {
  return (
    <section id='hero'>
      <div className='bg-gradient-to-br from-lavender-blush-700 to-lavender-blush-900 dark:from-dark-purple-200 dark:to-dark-purple-400 py-24 md:py-32'>
        <div className='mx-auto max-w-5xl px-6 mt-[2rem]'>
          <div className='grid items-center sm:grid-cols-2'>
            <div className='bg-lavender-blush-600/20 dark:bg-dark-purple-700/40 relative mx-auto w-fit rounded-2xl p-8 backdrop-blur-sm border border-lavender-blush-300/30 dark:border-dark-purple-500/30'>
              <div className='bg-radial to-lavender-blush-800/80 dark:to-dark-purple-600/60 absolute inset-0 z-10 from-transparent to-75% rounded-2xl'></div>
              <div className='mx-auto mb-2 flex w-fit justify-center gap-2'>
                <IntegrationCard>
                  <ReactRouter />
                </IntegrationCard>
                <IntegrationCard>
                  <Convex />
                </IntegrationCard>
              </div>
              <div className='mx-auto my-2 flex w-fit justify-center gap-2'>
                <IntegrationCard>
                  <ReactIcon />
                </IntegrationCard>
                <IntegrationCard
                  borderClassName='shadow-orchid-500/20 shadow-xl border-orchid-400/50 dark:border-orchid-300/50'
                  className='bg-orchid-50 dark:bg-orchid-900/20'
                >
                  <LogoIcon />
                </IntegrationCard>
                <IntegrationCard>
                  <TailwindIcon />
                </IntegrationCard>
              </div>

              <div className='mx-auto flex w-fit justify-center gap-2'>
                <IntegrationCard>
                  <Typescript />
                </IntegrationCard>
              </div>
            </div>
            <div className='mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left'>
              <h2 className='text-balance text-3xl font-semibold md:text-4xl text-dark-purple-800 dark:text-white'>
                Bradley Rappa Developer
              </h2>
              <p className='text-dark-purple-600 dark:text-gray-300'>
                Career transitioner and builder of efficient systems from forest to source code.
                Former timber cutter turned full-stack MERN developer with a decade of hands-on IT
                operations experience.
              </p>

              <div className='flex gap-3'>
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

const IntegrationCard = memo(
  ({
    children,
    className,
    borderClassName,
  }: {
    children: React.ReactNode
    className?: string
    borderClassName?: string
  }) => {
    return (
      <div
        className={cn(
          'bg-lavender-blush-100 dark:bg-dark-purple-800/70 relative flex size-20 rounded-xl shadow-lg backdrop-blur-sm',
          className,
        )}
      >
        <div
          role='presentation'
          className={cn(
            'absolute inset-0 rounded-xl border border-lavender-blush-300 dark:border-dark-purple-500/50',
            borderClassName,
          )}
        />
        <div className='relative z-20 m-auto size-fit *:size-8'>{children}</div>
      </div>
    )
  },
)
