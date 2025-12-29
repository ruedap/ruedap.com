import AvatarPNG from './avatar.png'

interface Props {
  className?: string
}

export const Avatar = (props: Props) => {
  return (
    <header className={`block w-[120px] h-[120px] p-2.5 bg-[#e4e4e4] rounded-full ${props.className || ''}`}>
      <img src={AvatarPNG} className="w-full rounded-full opacity-80" />
    </header>
  )
}
