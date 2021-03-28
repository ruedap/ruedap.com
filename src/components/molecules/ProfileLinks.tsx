import { styled } from '@compiled/react';
import { ProfileLink } from '../atoms/ProfileLink'
import json from '../../assets/json/data.json'

export const ProfileLinks = () => {
  return (
    <Root>
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
    </Root>
  )
}

const Root = styled.nav`
  display: flex;
  flex-direction: column;
`
