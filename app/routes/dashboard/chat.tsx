'use client'

import { useChat } from '@ai-sdk/react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'
import { Send, Bot } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ChatAvatar } from '~/components/chat/chat-avatar'
import { MessageBubble } from '~/components/chat/message-bubble'
import { LoadingIndicator } from '~/components/chat/loading-indicator'

const CONVEX_SITE_URL = import.meta.env.VITE_CONVEX_URL!.replace(/.cloud$/, '.site')

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    maxSteps: 10,
    api: `${CONVEX_SITE_URL}/api/chat`,
  })
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <div className='flex flex-col h-full w-full relative'>
      {/* Chat Header */}
      <div className='flex items-center justify-between p-4 border-b border-border bg-card/50 backdrop-blur-sm'>
        <div className='flex items-center gap-2'>
          <Bot className='w-5 h-5 text-primary' />
          <h1 className='text-lg font-semibold text-foreground'>AI Bradley</h1>
        </div>
        <div className='text-sm text-muted-foreground'>
          {messages.length} messages
        </div>
      </div>

      {/* Messages Container */}
      <div className='flex-1 overflow-y-auto p-4 space-y-4 chat-container'>
        {messages.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full text-center space-y-4'>
            <ChatAvatar type="assistant" size="lg" />
            <div className='space-y-2'>
              <h3 className='text-lg font-medium text-foreground'>Hi, I'm AI Bradley</h3>
              <p className='text-muted-foreground max-w-md'>
                I am an AI version of Bradley Rappa. Ask me anything about myself!
              </p>
            </div>
          </div>
        ) : (
          messages.map((message, i) => (
            <div
              key={message.id}
              className={cn(
                'flex w-full gap-3 group chat-message',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'assistant' && (
                <ChatAvatar type="assistant" />
              )}
              
              {message.parts.map((part) => {
                switch (part.type) {
                  case 'text':
                    return (
                      <MessageBubble
                        key={`${message.id}-${i}`}
                        role={message.role}
                        content={part.text}
                        messageId={message.id}
                        partIndex={i}
                      />
                    )
                  default:
                    return null
                }
              })}
              
              {message.role === 'user' && (
                <ChatAvatar type="user" />
              )}
            </div>
          ))
        )}
        
        {/* Loading indicator */}
        {isLoading && <LoadingIndicator />}
        
        {/* Auto-scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className='p-4 border-t border-border bg-card/50 backdrop-blur-sm'>
        <form onSubmit={handleSubmit} className='flex gap-2 max-w-4xl mx-auto'>
          <div className='flex-1 relative'>
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder='Type your message...'
              disabled={isLoading}
              className='w-full pr-12 py-3 text-base h-12 bg-background'
            />
            <Button
              type='submit'
              size='sm'
              disabled={!input.trim() || isLoading}
              className='absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0'
            >
              <Send className='w-4 h-4' />
            </Button>
          </div>
        </form>
        <div className='flex items-center justify-center mt-2'>
          <p className='text-xs text-muted-foreground'>
            Press Enter to send • AI may make mistakes
          </p>
        </div>
      </div>
    </div>
  )
}
