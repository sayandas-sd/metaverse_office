import React from "react";
import { Disclosure } from "@headlessui/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
const MoreInfoModal = () => {
  const info = [
    {
      title: "How to use this",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis au.",
    },
    {
      title: "how to use proximity chat?",
      des: "Proximity Chat allows users to communicate with others nearby in a game or virtual environment. It’s activated through the settings, often under audio or communication, and users can adjust the distance at which others can hear or see them.",
    },
    {
      title: "how I can use characters in metaverse?",
      des: " you can customize your character’s appearance, including outfits and accessories. Move your character using arrow keys or WASD. Interact with objects and people by walking close to them, and communicate using proximity-based text or voice chat.",
    },
    {
      title: "How does the games work?",
      des: "games are accessed by approaching interactive objects or spaces within the virtual environment. Players can join mini-games, quizzes, or collaborative challenges, with gameplay depending on proximity, often supporting multiplayer interaction and real-time engagement.",
    },
    {
      title: "Can we do official work here?",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.",
    },
  ];
  return (
    <div className="container mx-auto py-20">
      <p className="text-gray-500 text-2xl font-clash uppercase my-3">
        MORE INFO
      </p>
      <p className="text-cyan-600 text-4xl font-medium capitalize mb-10">
        Common questions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        {info.map((inf, i) => {
          return (
            <Disclosure key={i}>
              {({ open }) => (
                <div className="group">
                  <Disclosure.Button className="flex flex-col group-hover:bg-[#524fd5] group-focus:bg-[#524fd5] w-full justify-between rounded-lg lg:rounded-3xl border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">
                    <div className="flex justify-between items-center w-full">
                      <span className="group-hover:text-white  group-focus:text-white">
                        {inf.title}
                      </span>
                      <BsFillPlusCircleFill
                        className={`${
                          open ? "rotate-180 transform" : ""
                        }  text-[#524fd5] text-2xl group-hover:text-white  group-focus:text-white `}
                      />
                    </div>

                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
                      {inf.des}
                    </Disclosure.Panel>
                  </Disclosure.Button>
                </div>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};

export default MoreInfoModal;
