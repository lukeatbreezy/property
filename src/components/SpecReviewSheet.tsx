import { X, Sparkle } from '@phosphor-icons/react'
import { StatusBar } from './StatusBar'
import { GlassButton } from './GlassButton'

const AI_BORDER = '#9875a9'
const AI_GRADIENT = 'linear-gradient(203deg, #9875a9 31.8%, #7f5a90 65.8%, #694b77 95.5%)'
const IMAGE_HEIGHT = 580

export interface SpecReview {
  label: string
  value: string
  photo: string
}

export function SpecReviewSheet({
  review,
  onClose,
  onConfirm,
  onChange,
}: {
  review: SpecReview | null
  onClose: () => void
  onConfirm: () => void
  onChange: () => void
}) {
  const open = !!review

  return (
    <div
      className={`absolute inset-0 bg-[#121212] transition-opacity duration-200 ease-out ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {review && (
        <img src={review.photo} alt="" className="absolute inset-x-0 top-0 object-cover" style={{ height: IMAGE_HEIGHT }} />
      )}

      <div className="relative flex flex-col">
        <StatusBar />
        <div className="flex h-[44px] items-center px-3">
          <GlassButton variant="dark" aria-label="Close" onClick={onClose} className="size-10">
            <X size={17} color="var(--content-inverse)" />
          </GlassButton>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center gap-6 px-6"
        style={{ top: IMAGE_HEIGHT }}
      >
        <Sparkle size={24} weight="fill" color={AI_BORDER} />
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-[15px] leading-[1.26] tracking-[-0.5px]" style={{ color: '#c2a8d6' }}>
            We detected, {review?.label}:
          </p>
          <p className="text-[22px] font-bold leading-[1.26] tracking-[-0.5px] text-[var(--content-inverse)]">
            {review?.value}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onChange}
            className="flex h-11 items-center justify-center rounded-full border px-5"
            style={{ borderColor: 'rgba(253,252,252,0.4)' }}
          >
            <span className="text-[15px] font-bold leading-[1.26] tracking-[-0.5px] text-[var(--content-inverse)]">
              Change
            </span>
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex h-11 items-center justify-center rounded-full px-5"
            style={{ backgroundImage: AI_GRADIENT }}
          >
            <span className="text-[15px] font-bold leading-[1.26] tracking-[-0.5px] text-[var(--content-inverse)]">
              Confirm
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
