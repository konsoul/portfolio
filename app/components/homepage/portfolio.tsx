import React from 'react'

export default function PortfolioSection() {
  const projects = [
    {
      title: 'The Gospel Toolkit',
      description: 'Comprehensive Christian Learning Platform.',
      link: 'https://gospel-toolkit.vercel.app/',
    },

    // Add more projects here
  ]

  return (
    <section id='portfolio' className='py-10 md:py-24'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='flex items-center gap-3 mb-8'>
          <div className='w-2 h-8 bg-tea-rose-400 dark:bg-tea-rose-600 rounded-full'></div>
          <h2 className='text-4xl font-medium text-gray-900 dark:text-gray-100'>My Portfolio</h2>
        </div>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-gradient-to-r from-white to-silver-900 dark:from-charcoal-100/50 dark:to-charcoal-200/30 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md dark:shadow-gray-900/20 transition-shadow overflow-hidden'
            >
              {/* Project Image */}
              <div className='relative h-48 overflow-hidden'>
                <img
                  loading='lazy'
                  decoding='async'
                  src='/Gospel-Toolkit-Page.png'
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
              </div>

              {/* Project Content */}
              <div className='p-6'>
                <h3 className='text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4 leading-relaxed'>
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center text-tea-rose-400 dark:text-tea-rose-600 hover:text-rosy-brown-400 dark:hover:text-rosy-brown-600 transition-colors font-medium group'
                >
                  View Project
                  <span className='ml-1 transition-transform duration-200 group-hover:translate-x-1'>
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
