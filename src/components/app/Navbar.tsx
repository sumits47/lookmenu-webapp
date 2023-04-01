import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { PrimaryButton } from '../common/Buttons'
import { DesktopMenu } from './Menus'

export default function Navbar() {
  return (
    <div
      className={classNames(
        'block',
        'fixed',
        'inset-x-0',
        'top-0',
        'bottom-auto',
        'h-16',
        'z-20',
        'bg-white'
      )}
    >
      <div
        className={classNames(
          'p-4',
          'max-w-5xl',
          'mx-auto',
          'flex',
          'items-center',
          'justify-between'
        )}
      >
        {/* Name */}
        <Link href="/" className="font-semibold text-xl flex gap-2">
          <Image src="/img/logo.png" alt="Logo" height={32} width={32} />
          <span>Lookmenu</span>
        </Link>
        {/* Menu */}
        <DesktopMenu />
        {/* Login */}
        <PrimaryButton>Login</PrimaryButton>
      </div>
    </div>
  )
}
