'use client'

import { useChat } from '@ai-sdk/react'
import Markdown from 'react-markdown'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'
import { Send, Bot, User } from 'lucide-react'
import { useEffect, useRef } from 'react'

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
          <h1 className='text-lg font-semibold text-foreground'>Ai bradley</h1>
        </div>
        <div className='text-sm text-muted-foreground'>
          {messages.length} messages
        </div>
      </div>

      {/* Messages Container */}
      <div className='flex-1 overflow-y-auto p-4 space-y-4 chat-container'>
        {messages.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-full text-center space-y-4'>
            <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
              <Bot className='w-8 h-8 text-primary' />
            </div>
            <div className='space-y-2'>
              <h3 className='text-lg font-medium text-foreground'>Hi, I'm Ai bradley</h3>
              <p className='text-muted-foreground max-w-md'>
                I am an Ai version of Bradley Rappa. Ask me anything about myself!
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
                <div className='flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1'>
                  <Bot className='w-4 h-4 text-primary' />
                </div>
              )}
              
              <div
                className={cn(
                  'max-w-[70%] px-4 py-3 rounded-2xl shadow-sm transition-all duration-200',
                  'hover:shadow-md group-hover:scale-[1.02]',
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-md'
                    : 'bg-card border border-border text-card-foreground rounded-bl-md'
                )}
              >
                {message.parts.map((part) => {
                  switch (part.type) {
                    case 'text':
                      return (
                        <div
                          key={`${message.id}-${i}`}
                          className={cn(
                            'prose prose-sm max-w-none',
                            'prose-p:my-1 prose-li:my-0.5 prose-ul:my-1 prose-ol:my-1',
                            'prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded',
                            'prose-pre:bg-muted prose-pre:border prose-pre:border-border',
                            message.role === 'user'
                              ? 'prose-invert prose-code:bg-primary-foreground/10'
                              : 'prose-slate dark:prose-invert'
                          )}
                        >
                          <Markdown>{part.text}</Markdown>
                        </div>
                      )
                    default:
                      return null
                  }
                })}
              </div>
              
              {message.role === 'user' && (
                <div className='flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1'>
                  <User className='w-4 h-4 text-primary' />
                </div>
              )}
            </div>
          ))
        )}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className='flex justify-start gap-3'>
            <div className='flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1'>
              <Bot className='w-4 h-4 text-primary' />
            </div>
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
        )}
        
        {/* Auto-scroll anchor */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className='p-4 border-t border-border bg-card/50 backdrop-blur-sm'>
        <form onSubmit={handleSubmit} className='flex gap-2 max-w-4xl mx-auto'>
          <div className='flex-1 relative chat-input'>
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder='Type your message...'
              disabled={isLoading}
              className={cn(
                'w-full pr-12 py-3 text-base',
                'bg-background border-border',
                'focus:ring-2 focus:ring-primary/20 focus:border-primary',
                'placeholder:text-muted-foreground',
                'disabled:opacity-50 disabled:cursor-not-allowed'
              )}
            />
            <Button
              type='submit'
              size='sm'
              disabled={!input.trim() || isLoading}
              className={cn(
                'absolute right-2 top-1/2 -translate-y-1/2',
                'h-8 w-8 p-0',
                'bg-primary hover:bg-primary/90',
                'disabled:opacity-50 disabled:cursor-not-allowed'
              )}
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
