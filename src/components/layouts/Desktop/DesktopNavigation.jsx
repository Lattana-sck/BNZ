import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function NavItem({ href, children }) {
  let isActive = useRouter().pathname === href
  return (
    <li className="whitespace-nowrap">
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400'
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  const isLoggin = true

  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/about">A propos</NavItem>
        <NavItem href="/startups">Start-ups</NavItem>
        <NavItem href="/finance_yourself">Se financer</NavItem>
        <NavItem href="/marketplace">Marketplace</NavItem>
        <NavItem href="/roadmap">Roadmap</NavItem>
        <NavItem href="/faq">FAQ & guides</NavItem>
        {!isLoggin && <NavItem href="/register">Inscription</NavItem>}
        {!isLoggin && <NavItem href="/login">Connexion</NavItem>}
      </ul>
    </nav>
  )
}

export default DesktopNavigation
