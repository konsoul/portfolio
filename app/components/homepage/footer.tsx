export default function FooterSection() {
  return (
    <footer className='pt-4 md:pt-8 pb-20 md:pb-32'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='flex items-center justify-center gap-3'>
          <img src='/logo-transparent.png' className='w-24 h-24' alt='Portfolio Logo' />
          <span className='text-muted-foreground text-sm'>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
