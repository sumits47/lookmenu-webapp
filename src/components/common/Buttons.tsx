import classNames from 'classnames'
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLProps } from 'react'

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function PrimaryButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={classNames(
        'py-2',
        'px-4',
        'rounded-md',
        'bg-emerald-400',
        'hover:bg-emerald-500',
        'text-white',
        'font-medium',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export function SecondaryButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={classNames(
        'py-2',
        'px-4',
        'rounded-md',
        'bg-emerald-100',
        'hover:bg-emerald-300',
        'text-emerald-900',
        'font-medium',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
