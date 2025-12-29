import React from 'react'

interface Props {
  ligatureName: string
  href: string
}

export const ProfileLink: React.VFC<Props> = (props) => {
  return (
    <a
      href={props.href}
      className="dapicon text-[#b6b6b6] p-4 text-[26px] no-underline transition-colors duration-200 hover:no-underline hover:text-[#434343]"
    >
      {props.ligatureName}
    </a>
  )
}
