import classNames from 'classnames'
import Image from 'next/image'
import { HTMLProps } from 'react'

interface FeatureCardProps extends HTMLProps<HTMLDivElement> {
  imgSrc: string
  title: string
  description: string
}

function FeatureCard({
  imgSrc,
  title,
  description,
  className,
  ...rest
}: FeatureCardProps) {
  return (
    <div
      className={classNames('relative', 'flex', 'gap-6', className)}
      {...rest}
    >
      {/* Image */}
      <Image
        src={imgSrc}
        alt="Feature"
        height={64}
        width={64}
        style={{ objectFit: 'contain', alignSelf: 'start', marginTop: 4 }}
      />
      {/* Right */}
      <div className="grow">
        <div className="flex flex-col gap-2">
          {/* Heading */}
          <div className="font-semibold text-2xl text-slate-800">{title}</div>
          {/* Description */}
          <div className="text-slate-600">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default function Features({
  className,
  ...rest
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={classNames(
        'p-8',
        'md:h-[32rem]',
        'max-w-5xl',
        'mx-auto',
        'flex',
        'flex-col',
        'gap-8',
        'justify-center',
        'items-center',
        className
      )}
      {...rest}
    >
      {/* Heading */}
      <div className="font-semibold text-4xl text-slate-800 text-center">
        Features you will love!
      </div>
      {/* Features */}
      <div
        className={classNames(
          'md:mt-8',
          'grid',
          'grid-cols-1',
          'md:grid-cols-2',
          'gap-8'
        )}
      >
        {/* Link */}
        <FeatureCard
          imgSrc="/img/link.png"
          title="Link based"
          description="An access to your menu by the link (for social networks, your website or google maps)"
        />
        {/* QR */}
        <FeatureCard
          imgSrc="/img/qr-code.png"
          title="QR code"
          description="An access to your menu by QR code (for placement on tables, windows, showcases, doors etc.)"
        />
        {/* Info */}
        <FeatureCard
          imgSrc="/img/information.png"
          title="Extra Information"
          description="Additional restaurant information feature (Address, Phone number, Wi-Fi password)"
        />
        {/* Unlimited editing */}
        <FeatureCard
          imgSrc="/img/infinite.png"
          title="Unlimited usage"
          description="Unlimited viewings of menu, photos & descriptions, number of QR scans, categories & items"
        />
      </div>
    </div>
  )
}
