import SectionBlogSVG from './section-blog.svg'
import LogoBlogSVG from './logo-blog.svg'
import { Spacer } from '../../atoms/Spacer'

export const Blog = () => {
  return (
    <div className="flex flex-col items-center mt-[50px] mb-[200px] px-4">
      <SectionBlogSVG />
      <Spacer height={ 20 } />
      <a href="https://blog.ruedap.com" className="opacity-75 transition-opacity duration-200 hover:opacity-95 max-[499px]:scale-[0.64]">
        <LogoBlogSVG />
      </a>
    </div>
  )
}
