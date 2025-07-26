import { getAuth } from '@clerk/react-router/ssr.server'
import ContentSection from '~/components/homepage/content'
import Footer from '~/components/homepage/footer'
import Integrations from '~/components/homepage/integrations'
import type { Route } from './+types/home'
import HeroSection from '../components/homepage/hero'

export function meta({}: Route.MetaArgs) {
  const title = 'Developer Portfolio'
  const description = 'Personal developer portfolio showcasing projects, skills, and experience.'
  const keywords = 'Developer, Portfolio, React, TypeScript, Full Stack'
  const siteUrl = 'https://portfolio-seven-jet-18.vercel.app/'
  const imageUrl = 'https://portfolio-seven-jet-18.vercel.app/logo.png'

  return [
    { title },
    {
      name: 'description',
      content: description,
    },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:url', content: siteUrl },
    { property: 'og:site_name', content: 'Developer Portfolio' },
    { property: 'og:image', content: imageUrl },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    {
      name: 'twitter:description',
      content: description,
    },
    { name: 'twitter:image', content: imageUrl },
    {
      name: 'keywords',
      content: keywords,
    },
    { name: 'author', content: 'Developer' },
    { name: 'favicon', content: imageUrl },
  ]
}

export async function loader(args: Route.LoaderArgs) {
  const { userId } = await getAuth(args)

  return {
    isSignedIn: !!userId,
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <HeroSection />
      <Integrations loaderData={loaderData} />

      <ContentSection />
      <Footer />
    </>
  )
}
