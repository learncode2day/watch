export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'StreamTV',
  description: 'StreamTV is a movie and tv show tracker built by Mohamed Gado.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
      scroll: true,
    },
    {
      title: 'Movies',
      href: '/movies',
      scroll: true,
    },
    {
      title: 'TV Shows',
      href: '/tv-shows',
      scroll: true,
    },
    {
      title: 'Disclaimer',
      href: '/disclaimer',
      scroll: false,
    },
  ],
  personalLogo:
    'https://pbs.twimg.com/profile_images/1704473627649794048/8-7aJMxd_400x400.jpg',
  links: {
    twitter: 'https://twitter.com/enjoyingsmain',
    github: 'https://github.com/heyitsleo',
    website: 'https://stream.starnode.host/',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
  },
  email: 'raymor.biz@gmail.com',
  websiteURL: 'https://stream.starnode.host',
  twitterTag: '@enjoyingsmain',
  image:
    'https://pbs.twimg.com/profile_images/1704473627649794048/8-7aJMxd_400x400.jpg',
  keywords: [
    'Software Engineer',
    'Frontend Engineer',
    'Web Developer',
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'React Developer',
    'React Engineer',
    'React.js',
    'ReactJS',
    'React Developer',
    'Next.js',
    'NextJS',
    'Next.js Developer',
    'Next.js Engineer',
  ],
}
