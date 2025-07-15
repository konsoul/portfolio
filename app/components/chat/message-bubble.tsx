import { cn } from '~/lib/utils'
import Markdown from 'react-markdown'

interface MessageBubbleProps {
  role: string
  content: string
  messageId: string
  partIndex: number
}

export function MessageBubble({ role, content, messageId, partIndex }: MessageBubbleProps) {
  return (
    <div
      className={cn(
        'max-w-[70%] px-4 py-3 rounded-2xl shadow-sm transition-all duration-200',
        'hover:shadow-md group-hover:scale-[1.02]',
        role === 'user'
          ? 'bg-primary text-primary-foreground rounded-br-md'
          : 'bg-card border border-border text-card-foreground rounded-bl-md'
      )}
    >
      <div
        key={`${messageId}-${partIndex}`}
        className={cn(
          'prose prose-sm max-w-none',
          'prose-p:my-1 prose-li:my-0.5 prose-ul:my-1 prose-ol:my-1',
          'prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded',
          'prose-pre:bg-muted prose-pre:border prose-pre:border-border',
          role === 'user'
            ? 'prose-invert prose-code:bg-primary-foreground/10'
            : 'prose-slate dark:prose-invert'
        )}
      >
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}
