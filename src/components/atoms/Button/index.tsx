import React, { useMemo } from 'react'
import clsx from 'clsx'
import Image from 'next/image' // Imported Image from 'next/image'
import styles from './index.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  linkTo?: string
  buttonType?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed'
  icon?: string // Added icon prop
  iconAlt?: string // Added iconAlt prop
  iconWidth?: number // Added iconWidth prop
  iconHeight?: number // Added iconHeight prop
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  const { buttonType = 'primary', title, className, children, linkTo, icon, iconAlt, iconWidth, iconHeight, ...rest } = props

  const component = useMemo(() => {
    let component = children
    if (typeof children === 'string' || title) {
      component = <span>{children || title}</span>
    }

    if (linkTo) {
      return (
        <a href={linkTo} className={styles.link_tag}>
          {icon && ( // Added icon rendering logic
            <Image
              src={icon}
              alt={iconAlt || 'Button icon'}
              width={iconWidth || 20}
              height={iconHeight || 20}
            />
          )}
          {component}
        </a>
      )
    }
    return component
  }, [linkTo, children, title, icon, iconAlt, iconWidth, iconHeight]) // Added icon-related props to dependency array

  const iconElement = icon ? ( // Added iconElement for rendering the icon
    <Image
      src={icon}
      alt={iconAlt || 'Button icon'}
      width={iconWidth || 20}
      height={iconHeight || 20}
    />
  ) : null

  return (
    <button ref={ref} className={clsx(className, styles.button, styles[buttonType])} {...rest}>
      {iconElement}
      {component}
    </button>
  )
})

export { Button }