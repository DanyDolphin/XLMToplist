// Next
import Image from 'next/image'

// Styles
import styles from './styles.module.css'

export const ToplistBrandLogo = ({ logo }: { logo: string }) => {
  return (
    <div className={styles['avatar-background']}>
      <Image
        src={logo}
        alt="Avatar"
        className={styles.avatar}
        width={134}
        height={134}
      />
      <div className={styles['avatar-hash']}>#</div>
    </div>
  )
}
