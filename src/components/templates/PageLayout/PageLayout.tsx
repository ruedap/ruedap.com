import React from 'react'
import bgPattern from './assets/bg-pattern.png'
import bgLines from './assets/bg-lines.png'

interface Props {
  header: React.ReactNode,
  blog: React.ReactNode,
}

export const PageLayout: React.FC<Props> = (props) => {
  return (
    <div className="max-h-screen bg-repeat" style={{ backgroundImage: `url(${bgPattern})` }}>
      <div className="flex flex-col items-center bg-repeat-y bg-[center_top]" style={{ backgroundImage: `url(${bgLines})` }}>
        <div className="flex items-center min-h-screen py-24">{props.header}</div>
        <div>{props.blog}</div>
        <div>{props.children}</div>
        <div className="flex items-center min-h-screen py-24">{props.header}</div>
      </div>
    </div>
  )
}
