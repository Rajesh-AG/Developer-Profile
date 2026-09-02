import AvailabilityBadge from './AvailabilityBadge'
import HeroHeading from './HeroHeading'
import CTAButtons from './CTAButtons'
import TechStack from './TechStack'

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center text-left">
      {/* Availability Status Badge */}
      <div className="mb-2">
        <AvailabilityBadge />
      </div>

      {/* Name Eyebrow */}
      <div className="mt-4 text-[#20E6A8] text-[14px] font-semibold tracking-[2px] uppercase">
        RAJESH A.G.
      </div>

      {/* Primary Headline */}
      <HeroHeading />

      {/* Supporting Description */}
      <p className="text-[#8B9198] text-[17px] md:text-[18px] leading-[1.65] max-w-[540px] mb-7 font-normal">
        Product-minded Flutter Developer crafting mobile-first experiences that are fast, intuitive, and impactful.
      </p>

      {/* Call to Actions */}
      <CTAButtons />

      {/* Tech Stack Chips */}
      <TechStack />
    </div>
  )
}
