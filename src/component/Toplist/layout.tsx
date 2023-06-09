// Styles
import styles from './styles.module.css'

export const ToplistLayout = () => {
  return (
    <article className="card">
      <div className="card-body d-flex align-items-start hstack gap-3">
        <div className={styles['avatar-container']}>
          <div className={styles['avatar-background']}>
            <img alt="Avatar" className={styles.avatar} />
            <div className={styles['avatar-hash']}>#</div>
          </div>
        </div>
        <div>
          <p className="color-primary fw-bold">
            [BrandName] // [ProductGroup]
          </p>
          <p className='color-primary font-header fw-bold fs-3 lh-1'>
            Open Account Offer - Bet £10 & Get £50 in Free Bets for new customers
          </p>
          <p>Terms &amp; conditions apply.</p>
          <button className='btn btn-wide btn-outline-dashed'>
            CODE
          </button><br/>
          <button className='btn btn-wide btn-primary'>
            Affiliate link
          </button>
        </div>
      </div>
    </article>
  )
}
