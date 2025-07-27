import PortfolioSection from './portfolio'
import ResumeSection from './resume'

export default function ContentSection() {
  return (
    <section id='features' className='py-10 md:py-24'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
          <div className='space-y-6'>
            <h2 className='text-4xl font-medium pb-4 space-y-6'>
              <span className='text-tea-rose-400 font-bitcount-muted'>
                {' '}
                From Timber to Terminal:{' '}
              </span>{' '}
              Bringing Blue-Collar Grit to Modern Development.
            </h2>
            <figure className='relative'>
              <img
                loading='lazy'
                decoding='async'
                src='/monitorsandtrees.jpg'
                alt='Monitors and Trees'
                className='w-full h-auto rounded-lg'
              />
            </figure>
          </div>

          <div className='space-y-6 flex flex-col justify-center'>
            <p>
              <span className='font-bold text-charcoal-400  dark:text-desert-sand-500'>
                What I bring to the table:
              </span>
              <br />I solve complex technical problems and build reliable systems that work. From
              modernizing legacy codebases to troubleshooting infrastructure issues, I focus on
              practical solutions that make a real difference for teams and end users.
            </p>
            <p>
              <span className='font-bold text-charcoal-400  dark:text-desert-sand-900'>
                Recent accomplishments:
              </span>
              <br />
              Modernized legacy AngularJS components to React/Redux, improving performance by 40%.
              Resolved critical POS system failures that had persisted for months. Streamlined
              reporting workflows with automated templates, reducing manual work significantly. I
              enjoy tackling the challenging problems that require both technical skill and creative
              thinking.
            </p>
          </div>
        </div>

        <ResumeSection />
      </div>
      <PortfolioSection />
    </section>
  )
}
