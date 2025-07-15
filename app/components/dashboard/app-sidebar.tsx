import { IconDashboard, IconSettings, IconMessageCircle } from '@tabler/icons-react'
import { Link } from 'react-router'
import { NavMain } from './nav-main'
import { NavSecondary } from './nav-secondary'
import { NavUser } from './nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '~/components/ui/sidebar'


const data = {
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard,
    },
    {
      title: 'Chat',
      url: '/dashboard/chat',
      icon: IconMessageCircle,
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '/dashboard/settings',
      icon: IconSettings,
    },
  ],
}

interface AppSidebarProps {
  variant: 'sidebar' | 'floating' | 'inset'
  user: {
    firstName: string
    lastName: string
    emailAddresses: Array<{ emailAddress: string }>
    imageUrl: string
  } | null
}

export function AppSidebar({ variant, user }: AppSidebarProps) {
  return (
    <Sidebar collapsible='offcanvas' variant={variant}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link to='/' prefetch='viewport'>
              <span className='text-base font-semibold'>Developer Portfolio</span>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>{user && <NavUser user={user} />}</SidebarFooter>
    </Sidebar>
  )
}
