import classNames from 'classnames'
import Image from 'next/image'
import { PrimaryButton, SecondaryButton } from '../common/Buttons'

export default function Hero() {
  return (
    <div
      className={classNames(
        'p-4',
        'mt-16',
        'md:mt-0',
        'md:h-[50rem]',
        'max-w-5xl',
        'mx-auto',
        'grid',
        'grid-cols-1',
        'md:grid-cols-2',
        'gap-4',
        'text-center',
        'md:text-start'
      )}
    >
      {/* Left */}
      <div className="h-full flex flex-col gap-8 justify-center">
        {/* Headline */}
        <div className="font-bold text-4xl md:text-5xl text-slate-800">
          Your menu on a QR Code
        </div>
        {/* Subtitle */}
        <div className="text-lg  text-slate-600">
          Meet Lookmenu, the new generation QR-based restaurant menu that will
          take your customer experience to the next level. Are you ready to make
          the leap? Get started today — it's free!
        </div>
        {/* Actions */}
        <div className="flex gap-4 justify-center md:justify-start">
          {/* Demo */}
          <SecondaryButton>View Demo</SecondaryButton>
          {/* Create */}
          <PrimaryButton>Create Menu</PrimaryButton>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col justify-center items-end">
        <Image
          src="https://lookmenu.sgp1.digitaloceanspaces.com/Banner.png"
          alt="Screenshot"
          width={400}
          height={600}
        />
      </div>
    </div>
  )
}
