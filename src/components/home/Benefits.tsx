import classNames from 'classnames'
import Image from 'next/image'
import { HTMLProps } from 'react'

interface BenefitCardProps extends HTMLProps<HTMLDivElement> {
  imgSrc: string
  title: string
}

function BenefitCard({
  imgSrc,
  title,
  children,
  className,
  ...rest
}: BenefitCardProps) {
  return (
    <div
      className={classNames(
        'bg-white',
        'drop-shadow-2xl',
        'rounded-3xl',
        'p-8',
        'flex',
        'flex-col',
        'gap-4',
        'text-slate-600'
      )}
      {...rest}
    >
      <Image src={imgSrc} alt="Benefit" width={96} height={96} />
      <div className="font-semibold text-xl text-slate-800">{title}</div>
      {children}
    </div>
  )
}

export default function Benefits({
  className,
  ...rest
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={classNames(
        'bg-slate-100',
        'min-h-[50rem]',
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        className
      )}
      {...rest}
    >
      <div
        className={classNames(
          'p-8',
          'max-w-7xl',
          'mx-auto',
          'flex',
          'flex-col',
          'gap-8'
        )}
      >
        {/* Headline */}
        <div className="font-semibold text-4xl text-slate-800 text-center">
          Benefits of using Lookmenu
        </div>
        <div
          className={classNames(
            'grid',
            'grid-cols-1',
            'md:grid-cols-3',
            'gap-8'
          )}
        >
          {/* CX */}
          <BenefitCard
            imgSrc="/img/star.png"
            title="Enhance Customer Experience"
          >
            <div>
              A QR code menu allows your guests to order faster. Less waiting
              for a waiter - better guests reviews.
            </div>
            <div>
              Working with a digital menu is easier. Loading of the menu is
              faster. There is more useful information in digital menu.
            </div>
          </BenefitCard>
          {/* Sales */}
          <BenefitCard imgSrc="/img/sales.png" title="Increase Sales">
            <div>
              A Digital menu sells more. Photos increase the appetite - the
              appetite increases the average check.
            </div>
            <div>
              Making an order becomes easier. Less time to wonder, more
              spontaneous purchases - higher average check.
            </div>
          </BenefitCard>
          {/* Cost */}
          <BenefitCard imgSrc="/img/saving.png" title="Save on Costs">
            <div>
              No need to install applications, buy terminals or wait for
              confirmation. Just register and use.
            </div>
            <div>
              Updating your menu is a breeze. Easily edit items, upload images &
              see the updates in real-time
            </div>
          </BenefitCard>
        </div>
      </div>
    </div>
  )
}
