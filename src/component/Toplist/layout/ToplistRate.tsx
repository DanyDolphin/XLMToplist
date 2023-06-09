// Nextjs
import Image, { StaticImageData } from 'next/image'

// Assets
import star from '../../../assets/star.svg'
import starHalf from '../../../assets/star-half.svg'
import placeholderWhite from '../../../assets/placeholder-white.png'

export const ToplistRate = ({ rate }: { rate: number }) => {
  const getStar = (rate: number, position: number): StaticImageData => {
    if (rate >= position) {
      return star
    } else if (rate == position - 0.5) {
      return starHalf
    } else {
      return placeholderWhite
    }
  }

  return (
    <div className="hstack gap-2 pb-md-3 justify-content-center justify-content-md-start">
      <Image src={getStar(rate, 1)} alt="Star" width={20} height={20} />
      <Image src={getStar(rate, 2)} alt="Star" width={20} height={20} />
      <Image src={getStar(rate, 3)} alt="Star" width={20} height={20} />
      <Image src={getStar(rate, 4)} alt="Star" width={20} height={20} />
      <Image src={getStar(rate, 5)} alt="Star" width={20} height={20} />
      <span className="color-primary">Read Review</span>
    </div>
  )
}
