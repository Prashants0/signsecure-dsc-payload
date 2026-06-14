'use client'

import React, { ComponentRef } from 'react'

import type { Header as HeaderType, Blog, UseCase } from '@/payload-types'

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ChevronDown, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const navItems = data?.navItems

  return (
    <div>
      <div className="hidden md:flex md:flex-1">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems?.map(({ navItem }) => {
              if (navItem?.type == 'single') {
                const reference = navItem.singleLink?.reference
                const href =
                  navItem.singleLink?.linkType === 'reference' &&
                  typeof reference?.value === 'object' &&
                  reference.value.slug
                    ? `/${reference?.relationTo}`
                    : navItem.singleLink?.url
                return (
                  <SingleLink
                    key={navItem.singleLink?.id}
                    href={href ?? ''}
                    label={navItem.singleLink?.label ?? ''}
                  />
                )
              }

              if (navItem?.type == 'multiple') {
                return (
                  <MultipleLinks
                    key={navItem.label}
                    label={navItem.label ?? ''}
                    subItems={navItem.multipleLinks ?? []}
                    type="multiple"
                    showMoreItemsButton={navItem.showMoreItemsButton ?? false}
                  />
                )
              }

              if (navItem?.type == 'multipleWithDescription') {
                return (
                  <MultipleLinks
                    key={navItem.label}
                    label={navItem.label ?? ''}
                    subItems={navItem.multipleLinksWithDescription ?? []}
                    type="multipleWithDescription"
                    showMoreItemsButton={navItem.showMoreItemsButton ?? false}
                  />
                )
              }
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
              prefetch
            >
              Home
            </Link>
            {navItems?.map(({ navItem }) => {
              if (navItem?.type == 'single') {
                const reference = navItem.singleLink?.reference
                const href =
                  navItem.singleLink?.linkType === 'reference' &&
                  typeof reference?.value === 'object' &&
                  reference.value.slug
                    ? `/${reference?.relationTo}`
                    : navItem.singleLink?.url
                return (
                  <Link
                    key={navItem.singleLink?.id}
                    href={href ?? ''}
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                    prefetch
                  >
                    {navItem.singleLink?.label ?? ''}
                  </Link>
                )
              }
              if (navItem?.type == 'multiple') {
                return (
                  <MobileAccordion
                    key={navItem.label}
                    label={navItem.label ?? ''}
                    subItems={navItem.multipleLinks ?? []}
                    type="multiple"
                  />
                )
              }

              if (navItem?.type == 'multipleWithDescription') {
                return (
                  <MobileAccordion
                    key={navItem.label}
                    label={navItem.label ?? ''}
                    subItems={navItem.multipleLinksWithDescription ?? []}
                    type="multipleWithDescription"
                  />
                )
              }
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

const SingleLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href={href} className={navigationMenuTriggerStyle()} prefetch>
          {label}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

interface MultipleLinkProps {
  type: 'multiple' | 'multipleWithDescription'
  label: string
  showMoreItemsButton?: boolean
  subItems?: {
    linkType?: ('reference' | 'custom') | null
    reference?:
      | ({
          relationTo: 'blogs'
          value: number | Blog
        } | null)
      | ({
          relationTo: 'use-cases'
          value: number | UseCase
        } | null)
    url?: string | null
    label: string
    description?: string
    id?: string | null
  }[]
}

const MultipleLinks = (props: MultipleLinkProps) => {
  const { showMoreItemsButton = false } = props
  const itemsToShow = showMoreItemsButton ? props.subItems : props.subItems?.slice(0, 10)

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{props.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul
          className={cn(
            'grid w-[400px] gap-3 p-4',
            props.type == 'multipleWithDescription' && 'md:w-[500px] md:grid-cols-2 lg:w-[600px]',
          )}
        >
          {itemsToShow?.map((subItem) => {
            const href =
              subItem.linkType === 'reference' &&
              typeof subItem.reference?.value === 'object' &&
              subItem.reference.value.slug
                ? `/${subItem.reference?.relationTo}/${subItem.reference.value.slug}`
                : subItem.url
            return (
              <ListItem key={subItem.id} title={subItem.label} href={href ?? ''}>
                {subItem.description && subItem.description}
              </ListItem>
            )
          })}
          {showMoreItemsButton && props.subItems && props.subItems.length > 5 && (
            <li>
              <NavigationMenuLink asChild>
                <Link
                  href={`/${props.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                  <div className="text-sm font-medium leading-none">View All {props.label}</div>
                </Link>
              </NavigationMenuLink>
            </li>
          )}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

// Helper component for desktop navigation items
const ListItem = React.forwardRef<ComponentRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, _ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={props.href || '#'}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground h-full',
              className,
            )}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'

function MobileAccordion(props: MultipleLinkProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="border-b pb-4">
      <button
        className="flex w-full items-center justify-between py-2 text-lg font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {props.label}
        <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen ? 'rotate-180' : '')} />
      </button>
      {isOpen && (
        <div className="mt-2 ml-4 flex flex-col space-y-2">
          {props.subItems?.map((item) => {
            const href =
              item.linkType === 'reference' &&
              typeof item.reference?.value === 'object' &&
              item.reference.value.slug
                ? `/${item.reference?.relationTo}`
                : item.url
            return (
              <Link
                prefetch
                key={item.id}
                href={href ?? ''}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
