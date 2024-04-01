import { DirectionAwareHover } from "./ui/direction-aware-hover"
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const imageUrl1 = "/car_image.jpg";
  const imageUrl2 = "/nike_image.jpg";
  const imageUrl3 = "/ideaclinic_image.png";
  const imageUrl4 = "/blog_image.jpg";
  return (
    <section className="-mt-16 max-sm:-mt-12 w-[52%]">
        <div className="relative flex items-center justify-evenly flex-wrap mb-6 gap-5">
            <a href="https://car-rental-next-js-ztra.vercel.app/" target="_blank">
              <DirectionAwareHover imageUrl={imageUrl1}>
                <p className="font-bold text-xl">
                  <a href="https://github.com/SaranshBangar/Car_Rental_NextJS" target="_blank">
                    Car Rental Website - Next.js
                  </a>
                </p>
                <a href="https://github.com/SaranshBangar/Car_Rental_NextJS" target='_blank'>
                    <FaGithub className='w-[22px] h-[22px] max-sm:w-[18px] max-sm:h-[18px] mt-2' />
                </a>
              </DirectionAwareHover>
            </a>
            <a href="https://nike-ui-react-js.vercel.app/" target="_blank">
              <DirectionAwareHover imageUrl={imageUrl2}>
                <p className="font-bold text-xl">
                  <a href="https://github.com/SaranshBangar/Nike_UI_ReactJS" target="_blank">
                    Nike UI Clone - ReactJS
                  </a>
                </p>
                <a href="https://github.com/SaranshBangar/Nike_UI_ReactJS" target='_blank'>
                    <FaGithub className='w-[22px] h-[22px] max-sm:w-[18px] max-sm:h-[18px] mt-2' />
                </a>
              </DirectionAwareHover>
            </a>
            <a href="https://ideaclinic-forum.vercel.app/" target="_blank">
              <DirectionAwareHover imageUrl={imageUrl3}>
                <p className="font-bold text-xl">
                  <a href="https://github.com/SaranshBangar/ideaclinic_forum" target="_blank">
                    IdeaClinic Website - Next.js
                  </a>
                </p>
                <a href="https://github.com/SaranshBangar/ideaclinic_forum" target='_blank'>
                    <FaGithub className='w-[22px] h-[22px] max-sm:w-[18px] max-sm:h-[18px] mt-2' />
                </a>
              </DirectionAwareHover>
            </a>
            <a href="https://blog-website-nextjs-saransh-bangar.vercel.app/" target="_blank">
              <DirectionAwareHover imageUrl={imageUrl4}>
                <p className="font-bold text-xl">
                  <a href="https://github.com/SaranshBangar/Blog-Website-NextJS" target="_blank">
                    Blog Website - Next.js
                  </a>
                </p>
                <a href="https://github.com/SaranshBangar/Blog-Website-NextJS" target='_blank'>
                    <FaGithub className='w-[22px] h-[22px] max-sm:w-[18px] max-sm:h-[18px] mt-2' />
                </a>
              </DirectionAwareHover>
            </a>
        </div>
    </section>
  )
}

export default Projects