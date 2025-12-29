import { Logo } from '../atoms/Logo'
import { Avatar } from '../atoms/Avatar'
import { ProfileLinks } from '../molecules/ProfileLinks'
import { Spacer } from '../atoms/Spacer'

export const PageHeader = () => {
  return (
    <header className="flex flex-col items-center">
      <Logo />
      <Avatar className="mt-16" />
      <Spacer height={ 24 } />
      <ProfileLinks />
    </header>
  )
}
