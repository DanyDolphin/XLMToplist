// Nextjs
import Image from 'next/image'

// React
import { useState } from 'react'

// Styles
import styles from './styles.module.css'

// Assets
import iconCopy from '../../assets/icon-copy.svg'

export const ButtonCopy = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)

  const onButtonClick = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
  }

  return (
    <button
      className={`btn btn-block btn-outline-dashed ${
        copied ? styles['btn-copied'] : ''
      }`}
      onClick={onButtonClick}
    >
      {copied ? 'Copied!' : text}&nbsp;
      <Image src={iconCopy} alt="Copy" />
    </button>
  )
}
