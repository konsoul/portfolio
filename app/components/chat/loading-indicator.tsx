import { ChatAvatar } from './chat-avatar'

export function LoadingIndicator() {
  return (
    <div className='flex justify-start gap-3'>
      <ChatAvatar type="assistant" />
      <div className='bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 shadow-sm'>
        <div className='flex items-center gap-2 text-muted-foreground'>
          <div className='flex space-x-1'>
            <div className='w-2 h-2 bg-primary rounded-full animate-bounce'></div>
            <div className='w-2 h-2 bg-primary rounded-full animate-bounce' style={{animationDelay: '0.1s'}}></div>
            <div className='w-2 h-2 bg-primary rounded-full animate-bounce' style={{animationDelay: '0.2s'}}></div>
          </div>
          <span className='text-sm'>Thinking...</span>
        </div>
      </div>
    </div>
  )
}
