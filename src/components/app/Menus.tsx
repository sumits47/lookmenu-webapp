import classNames from 'classnames'
import { HTMLProps } from 'react'

export function MenuItem({
  children,
  className,
  ...rest
}: HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      className={classNames(
        'p-2',
        'text-slate-600',
        'font-medium',
        'rounded-md',
        'hover:bg-slate-200',
        'hover:text-slate-800',
        'cursor-pointer',
        className
      )}
      {...rest}
    >
      {children}
    </a>
  )
}

export function DesktopMenu() {
  return (
    <div className="hidden md:flex gap-4">
      {/* Benefits */}
      <MenuItem href="#benefits">Benefits</MenuItem>
      {/* Features */}
      <MenuItem href="#features">Features</MenuItem>
      {/* FAQs */}
      <MenuItem href="#faqs">FAQs</MenuItem>
    </div>
  )
}
