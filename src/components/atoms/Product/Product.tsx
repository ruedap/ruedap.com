// TODO: fix this
import './assets/alfred2-font-awesome-workflow.png'
import './assets/daplog.png'
import './assets/hatenastar.png'
import './assets/inustagram.png'
import './assets/nekostagram.png'
import './assets/sassience.png'
import './assets/uhloop.png'

type Props = {
  className?: string,
  name: string,
  imageLink: string,
  image: string,
  time: string,
  pubdate: string,
  heading: string,
  headingLink: string,
  description: string,
}

const imagePath = (fileName: string) =>
  `./assets/${fileName}`

export const Product = (props: Props) => {
  return (
    <article className={`max-w-[860px] p-8 text-base bg-[#f2f2f2] shadow-[0_0_2px_2px_rgba(0,0,0,0.05),0_0_0_10px_#f7f7f7_inset] ${props.className || ''}`}>
      <h1 className="hidden">{props.name}</h1>
      <a href={props.imageLink} className="block max-w-[1000px] mb-8 lg:-mx-[12%]">
        <img
          src={imagePath(props.image)}
          alt={props.name}
          className="w-full relative shadow-[0_1px_4px_rgba(0,0,0,0.3),0_0_40px_rgba(0,0,0,0.2)_inset]"
        />
      </a>
      <div className="mb-8 text-center">
        <time dateTime={props.pubdate} className="block mb-5 font-[georgia] text-xl">
          {props.time}
        </time>
        <h2 className="text-[23px] font-normal">
          <a
            href={props.headingLink}
            className="no-underline transition-colors duration-200 hover:no-underline"
          >
            {props.heading}
          </a>
        </h2>
        <div
          className="leading-[1.8] text-left"
          dangerouslySetInnerHTML={{__html: props.description}}
        />
        <nav className="mb-5 text-center">
          <a href={props.headingLink} className="transition-colors duration-200">
            続きを読む
          </a>
        </nav>
      </div>
    </article>
  )
}
