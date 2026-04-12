import type React from 'react'

type ContainerProps = {
  children: React.ReactNode
  className: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`container mx-auto px-4 flex ${className}`}>{children}</div>
  )
}

export default Container
