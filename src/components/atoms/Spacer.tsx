import React from 'react'

interface Props {
  width?: number
  height?: number
}

export const Spacer: React.FC<Props> = (props) => {
  return (
    <span
      className="block"
      style={{
        width: `${props.width ?? 1}px`,
        height: `${props.height ?? 1}px`,
      }}
    >
      {props.children}
    </span>
  )
}
