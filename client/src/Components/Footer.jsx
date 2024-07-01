import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className=" h-48 bg-slate-200">
      <div className="w-full max-w-7xl mx-auto flex px-28">
        <div className="flex flex-col w-1/2 gap-2">
          <h1 className="font-bold text-2xl">Get in Touch</h1>
          <p className="text-[12px]">
            For any queries, please contact us at For any queries, please
            contact us at For any queries, please contact us at
          </p>
          <div className="flex gap-6 sm:mt-0 mt-8 ">
            <Footer.Icon href="#" className="bg-red-700 " icon={BsFacebook} />
            <Footer.Icon href="#" className="bg-red-700 " icon={BsInstagram} />
            <Footer.Icon href="#" className="bg-red-700 " icon={BsTwitter} />
            <Footer.Icon
              href="https://github.com/sahandghavidel"
              icon={BsGithub}
            />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
        <div className="flex w-1/2 gap-10 mx-auto items-center justify-center">
          <div>
            <div className="bg-[#52555c] absolute z-10 rounded-md w-24 h-24 items-center justify-center flex flex-col gap-3 shadow-md hover:shadow-lg ">
              <Footer.Icon
                href="#"
                className="bg-red-700 text-white"
                icon={BsInstagram}
              />
              <p className="text-[12px] text-white">Instagram here</p>
            </div>
            <div className="bg-[#636467] relative top-2 left-2 rounded-md w-24 h-24"></div>
          </div>
          <div>
            <div className="bg-[#52555c] absolute z-10 rounded-md w-24 h-24 items-center justify-center flex flex-col gap-3 shadow-md hover:shadow-lg ">
              <Footer.Icon
                href="#"
                className="bg-red-700 text-white"
                icon={BsInstagram}
              />
              <p className="text-[12px] text-white">Instagram here</p>
            </div>
            <div className="bg-[#636467] relative top-2 left-2 rounded-md w-24 h-24"></div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
