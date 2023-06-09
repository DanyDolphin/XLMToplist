// Nextjs
import Image from 'next/image'

// Assets
import star from '../../assets/star.svg'
import starHalf from '../../assets/star-half.svg'
import iconCopy from '../../assets/icon-copy.svg'
import placeholderBlue from '../../assets/placeholder-blue.png'

// Styles
import styles from './styles.module.css'

export const ToplistLayout = () => {
  return (
    <article className="card">
      <div className="row p-4 gap-3 gap-md-4 align-items-start">
        <div className={`col-md-auto ${styles['avatar-container']}`}>
          <div className={styles['avatar-background']}>
            <Image src={placeholderBlue} alt="Avatar" className={styles.avatar} />
            <div className={styles['avatar-hash']}>#</div>
          </div>
        </div>
        <div className="col-md order-3 order-md-2 text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
          <p className='fw-bold lh-1'>
            <span className='color-primary'>[BrandName] // [ProductGroup]</span><br/>
            <span className='font-header fs-3'>
              Open Account Offer - Bet £10 & Get £50 in Free Bets for new customers
            </span>
          </p>
          <p>Terms &amp; conditions apply.</p>
          <div className="vstack gap-1 w-75 align-self-center align-self-md-stretch">
            <button className='btn btn-block btn-outline-dashed'>
              CODE&nbsp;
              <Image src={iconCopy} alt="Copy"/>
            </button>
            <button className='btn btn-block btn-secondary'>
              Visit Site
            </button>
          </div>
        </div>
        <div className="col-md order-2 order-md-3">
          <div className="hstack gap-2 pb-md-3 justify-content-center justify-content-md-start">
            <Image src={star} alt="Star" width={20} height={20} />
            <Image src={star} alt="Star" width={20} height={20} />
            <Image src={star} alt="Star" width={20} height={20} />
            <Image src={star} alt="Star" width={20} height={20} />
            <Image src={starHalf} alt="Star half" width={20} height={20} />
            <span className='color-primary'>Read Review</span>
          </div>
          <ul className='d-none d-md-block'>
            <li>Sed ut perspiciatis unde omnis iste natus</li>
            <li>Perspiciatis unde omnis iste natus error sit</li>
            <li>Unde omnis iste natus error sit</li>
          </ul>
        </div>
      </div>
      <div className="card-footer p-4 color-gray">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.
      </div>
    </article>
  )
}
