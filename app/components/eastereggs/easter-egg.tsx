export default function EasterEgg() {
  return (
    <footer className='pt-4 md:pt-8 pb-10 md:pb-16 bg-neutral-100 dark:bg-neutral-900'>
      <div className='mx-auto max-w-3xl sm:max-w-5xl px-4 sm:px-6'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
          <img
            src='/logo-transparent.png'
            className='w-16 h-16 sm:w-24 sm:h-24'
            alt='Portfolio Logo'
          />
          <span className='text-muted-foreground text-xs sm:text-sm text-center md:text-left'>
            © {new Date().getFullYear()} Bradley Rappa. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
