// Components
import { ToplistBrandLogo } from './ToplistBrandLogo'
import { ToplistRate } from './ToplistRate'
import { ButtonCopy } from '@/component/ButtonCopy'

// Styles
import styles from './styles.module.css'

// Types
import { Content } from '@/types'

export const ToplistLayout = ({ content }: { content: Content }) => {
  return (
    <article className="card">
      <div className="row p-4 gap-3 gap-md-4 align-items-start">
        <div className={`col-md-auto ${styles['avatar-container']}`}>
          <ToplistBrandLogo logo={content.body.ctBrandlogo} />
        </div>
        <div className="col-md order-3 order-md-2 text-center text-md-start d-flex flex-column align-items-center align-items-md-start">
          <p className="fw-bold lh-1">
            <span className="color-primary">
              [{content.body.ctBrandname}] // [{content.body.ctProductgroup}]
            </span>
            <br />
            <span className="font-header fs-3">
              {content.data.ctoffer_type} - {content.data.ctqualifying_bet}
            </span>
          </p>
          <p>Terms &amp; conditions apply.</p>
          <div className="vstack gap-1 w-100 w-sm-75 align-self-center align-self-md-stretch">
            <ButtonCopy text={content.data.ctpromo_code} />
            <a
              role="button"
              href={content.data.externalUrl}
              target="_blank"
              className="btn btn-block btn-secondary"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div className="col-md order-2 order-md-3">
          <ToplistRate rate={Number(content.body.ctUserbrandrating)} />
          <ul className="d-none d-md-block">
            {content.data.ctoffer_tc.split('–').map(item => (
              <li key={item}>{item.trim()}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-footer p-4 color-gray">
        Withdrawal time: {content.body.ctWithdrawaltime} <br/>
        Depositing methods: {content.body.ctDepositingmethods}
      </div>
    </article>
  )
}
