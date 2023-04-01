import Link from 'next/link'

import { Container } from '@/components/layouts/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="hidden sm:flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/startups">Start-ups</NavLink>
                <NavLink href="/finance_yourself">Se financer</NavLink>
                <NavLink href="/marketplace">Marketplace</NavLink>
                <NavLink href="/faq">FAQ & guides</NavLink>
                <NavLink href="/register">Inscription</NavLink>
                <NavLink href="/login">Connexion</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} BNZ All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
