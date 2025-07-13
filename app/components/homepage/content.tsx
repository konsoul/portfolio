import {
  MapPin,
  Mail,
  Github,
  Linkedin,
  Code,
  Database,
  Server,
  SquareKanban,
  PencilRuler,
} from 'lucide-react'

export default function ContentSection() {
  return (
    <section id='features' className='py-16 md:py-32'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='grid gap-6 md:grid-cols-2 md:gap-12'>
          <div className='space-y-6'>
            <h2 className='text-4xl font-medium pb-4 space-y-6'>
              <span className='text-tea-rose-400'> From Timber to Terminal: </span> Bringing
              Blue-Collar Grit to Modern Development.
            </h2>
            <figure className='relative'>
              <img
                src='../public/monitorsandtrees.jpg'
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

        {/* Resume Section */}
        <div className='mt-24 space-y-12'>
          {/* Key Achievements */}
          <div className='bg-gradient-to-r from-white to-silver-900 dark:from-slate-800/30 dark:to-gray-800/60 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md dark:shadow-gray-900/20 transition-shadow'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-2 h-8 bg-green-600 dark:bg-green-500 rounded-full'></div>
              <h3 className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>
                Key Achievements
              </h3>
            </div>
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 flex-shrink-0'></div>
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-gray-100 mb-1'>
                    Legacy Modernizer
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Migrated AngularJS components to React/Redux, boosting maintainability and
                    reducing load times by 40%
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 flex-shrink-0'></div>
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-gray-100 mb-1'>
                    Infrastructure Fixer
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Resolved a persistent POS crash loop missed by external vendor, improving uptime
                    and team productivity
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 flex-shrink-0'></div>
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-gray-100 mb-1'>
                    System Optimizer
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Cut workstation imaging time by 20% and reduced report generation time by 40%
                    via reusable templates
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 flex-shrink-0'></div>
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-gray-100 mb-1'>
                    Bridge Between Teams
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    Sustained 98% help desk satisfaction, authoring internal docs that cut repeated
                    issues by 80%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className='bg-gradient-to-r from-white to-silver-900 dark:from-charcoal-100/50 dark:to-charcoal-200/30 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md dark:shadow-gray-900/20 transition-shadow'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-2 h-8 bg-purple-600 dark:bg-purple-500 rounded-full'></div>
              <h3 className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>
                Technical Skills
              </h3>
            </div>
            <div className='grid gap-4 md:grid-cols-3'>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <Code className='w-4 h-4 text-purple-600 dark:text-purple-400' />
                  <h4 className='font-medium text-gray-900 dark:text-gray-100'>Frontend</h4>
                </div>
                <div className='flex flex-wrap gap-1'>
                  {['React', 'Redux', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3'].map((skill) => (
                    <span
                      key={skill}
                      className='px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <SquareKanban className='w-4 h-4 text-purple-600 dark:text-purple-400' />
                  <h4 className='font-medium text-gray-900 dark:text-gray-100'>Tools/Platforms</h4>
                </div>
                <div className='flex flex-wrap gap-1'>
                  {['Git', 'Azure DevOps', 'WS', 'CI/CD'].map((skill) => (
                    <span
                      key={skill}
                      className='px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <PencilRuler className='w-4 h-4 text-purple-600 dark:text-purple-400' />
                  <h4 className='font-medium text-gray-900 dark:text-gray-100'>Methods</h4>
                </div>
                <div className='flex flex-wrap gap-1'>
                  {['Agile/Scrum', 'Documenation', 'Troubleshooting'].map((skill) => (
                    <span
                      key={skill}
                      className='px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <Server className='w-4 h-4 text-purple-600 dark:text-purple-400' />
                  <h4 className='font-medium text-gray-900 dark:text-gray-100'>Backend</h4>
                </div>
                <div className='flex flex-wrap gap-1'>
                  {['Node.js', 'Express', 'Python', 'RESTful APIs'].map((skill) => (
                    <span
                      key={skill}
                      className='px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className='flex items-center gap-2 mb-2'>
                  <Database className='w-4 h-4 text-purple-600 dark:text-purple-400' />
                  <h4 className='font-medium text-gray-900 dark:text-gray-100'>Infrastructure</h4>
                </div>
                <div className='flex flex-wrap gap-1'>
                  {['MongoDB', 'SQL', 'Git', 'Azure DevOps', 'VMware'].map((skill) => (
                    <span
                      key={skill}
                      className='px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className='bg-gradient-to-r from-white to-silver-900 dark:from-charcoal-400/30 dark:to-slate-600/35 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md dark:shadow-gray-900/20 transition-shadow'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-2 h-8 bg-orange-600 dark:bg-orange-500 rounded-full'></div>
              <h3 className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>
                Experience
              </h3>
            </div>
            <div className='space-y-6'>
              {/* Current Role */}
              <div className='relative pl-6 border-l-2 border-orange-200 dark:border-orange-700'>
                <div className='absolute -left-2 top-0 w-4 h-4 bg-orange-600 dark:bg-orange-500 rounded-full'></div>
                <div className='flex items-center gap-2 mb-1'>
                  <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                    Technician
                  </h4>
                  <span className='px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full'>
                    Current
                  </span>
                </div>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
                  Seven Feathers Casino Resort • 02/25–Present
                </p>
                <ul className='space-y-1 text-sm text-gray-700 dark:text-gray-300'>
                  <li className='flex items-start gap-2'>
                    <span className='w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0'></span>
                    Resolved a months-old Key Tracer bug by reconfiguring server ports and database
                    settings, reducing future issues by 70%
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0'></span>
                    Upheld 95–98% performance rating on tickets using Dameware remote tools and
                    in-person support
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0'></span>
                    Created reusable VMware server status report templates, cutting reporting time
                    by 40%
                  </li>
                </ul>
              </div>

              {/* Previous Role */}
              <div className='relative pl-6 border-l-2 border-gray-200 dark:border-gray-600'>
                <div className='absolute -left-2 top-0 w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full'></div>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1'>
                  Frontend Developer
                </h4>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
                  Clarity Ventures • 12/22–04/23
                </p>
                <ul className='space-y-1 text-sm text-gray-700 dark:text-gray-300'>
                  <li className='flex items-start gap-2'>
                    <span className='w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0'></span>
                    Migrated legacy AngularJS app components to React/Redux
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0'></span>
                    Configured Docker/WSL environments for cross-platform consistency
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0'></span>
                    Led optimizations in IIS and deployment pipelines using Azure DevOps
                  </li>
                </ul>
              </div>

              {/* Internship */}
              <div className='relative pl-6 border-l-2 border-gray-200 dark:border-gray-600'>
                <div className='absolute -left-2 top-0 w-4 h-4 bg-gray-400 dark:bg-gray-500 rounded-full'></div>
                <h4 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1'>
                  Frontend Intern
                </h4>
                <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>
                  Financial Trading Simulator • 09/22–11/22
                </p>
                <ul className='space-y-1 text-sm text-gray-700 dark:text-gray-300'>
                  <li className='flex items-start gap-2'>
                    <span className='w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0'></span>
                    Implemented Redux actions and grid layouts for responsive UI
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0'></span>
                    Managed deployments and build script validation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Contact */}
          <div className='grid gap-6 md:grid-cols-2'>
            <div className='bg-gradient-to-r from-white to-silver-900 dark:from-slate-800/40 dark:to-gray-800/30 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md dark:shadow-gray-900/20 transition-shadow'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-2 h-8 bg-blue-600 dark:bg-blue-500 rounded-full'></div>
                <h3 className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>
                  Education & Training
                </h3>
              </div>
              <div className='space-y-3'>
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-gray-100'>
                    App Academy / NuCamp / Udemy
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>Feb 2022 – Ongoing</p>
                  <p className='text-sm text-gray-700 dark:text-gray-300 mt-1'>
                    Full-Stack JavaScript, Git, Linux, REST APIs, Web Development, Python, SQL
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gradient-to-r from-white to-silver-900 dark:from-charcoal-100/50 dark:to-charcoal-200/30 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md dark:shadow-gray-900/20 transition-shadow'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-2 h-8 bg-green-600 dark:bg-green-500 rounded-full'></div>
                <h3 className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>Contact</h3>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <Mail className='w-4 h-4 text-gray-600 dark:text-gray-400' />
                  <a
                    href='mailto:bradley.rappa@icloud.com'
                    className='text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-600 transition-colors'
                  >
                    bradley.rappa@icloud.com
                  </a>
                </div>
                <div className='flex items-center gap-3'>
                  <MapPin className='w-4 h-4 text-gray-600 dark:text-gray-400' />
                  <a
                    href='https://www.google.com/maps/@42.9263218,-123.2807039,13669m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='dark:hover:text-rose-500 text-sm text-gray-700 dark:text-gray-300'
                  >
                    Canyonville, OR
                  </a>
                </div>
                <div className='flex items-center gap-3'>
                  <Github className='w-4 h-4 text-gray-600 dark:text-gray-400' />
                  <a
                    href='https://www.linkedin.com/in/bradley-rappa/'
                    className='text-sm dark:hover:text-green-500 text-gray-700 dark:text-gray-300'
                  >
                    GitHub Profile
                  </a>
                </div>
                <div className='flex items-center gap-3'>
                  <Linkedin className='w-4 h-4 text-gray-600 dark:text-gray-400' />
                  <a
                    href='https://github.com/konsoul'
                    className='text-sm dark:hover:text-blue-500 text-gray-700 dark:text-gray-300'
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
