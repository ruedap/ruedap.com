import { ProfileLink } from '../atoms/ProfileLink'
import json from '../../assets/json/data.json'

export const ProfileLinks = () => {
  return (
    <nav className="flex flex-col">
      {
        json.profile_links.map(link => {
          return (
            <ProfileLink
              key={ link.id }
              ligatureName={ link.name }
              href={ link.href }
            />
          )
        })
      }
    </nav>
  )
}
