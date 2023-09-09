import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { NavItem } from '@/types/navbar'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'

import { buttonVariants } from '../ui/button'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  return (
    <div className="hidden gap-6 md:gap-10 lg:flex">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block text-3xl font-bold text-secondary-foreground">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-base font-medium text-secondary-foreground',
                    pathname === item.href && 'underline underline-offset-4',
                    buttonVariants({
                      size: 'text',
                      variant: 'ghost',
                    }),
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  <motion.span layoutId={item.title}>{item.title}</motion.span>
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
