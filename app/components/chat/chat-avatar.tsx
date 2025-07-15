import { Bot, User } from 'lucide-react'
import { Avatar, AvatarFallback } from '~/components/ui/avatar'

interface ChatAvatarProps {
  type: string
  size?: 'sm' | 'md' | 'lg'
}

export function ChatAvatar({ type, size = 'md' }: ChatAvatarProps) {
  const iconSize = size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-6 h-6'
  const avatarSize = size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-12'
  
  return (
    <Avatar className={`${avatarSize} bg-primary/10 mt-1`}>
      <AvatarFallback className="bg-primary/10 border-0">
        {type === 'assistant' ? (
          <Bot className={`${iconSize} text-primary`} />
        ) : (
          <User className={`${iconSize} text-primary`} />
        )}
      </AvatarFallback>
    </Avatar>
  )
}
