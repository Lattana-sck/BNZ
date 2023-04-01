import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
  teal: 'bg-teal-500 hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600',
}

export function Button({
  type,
  value,
  variant = 'primary',
  className,
  href,
  ...props
}) {
  className = clsx(
    'flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props}>
      {value}
    </Link>
  ) : (
    <button type={type} className={className}>
      {value}
    </button>
  )
}
