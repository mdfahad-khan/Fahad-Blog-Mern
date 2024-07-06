import { Button } from "flowbite-react";

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3  justify-center items-center   text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Something About me</h2>
        <p className="text-gray-500 my-2 text-[20px] text-justify">
          Traveling has always been a passion of mine, and I've been fortunate
          to visit many amazing places. I love sharing my travel experiences and
          stories with others. This enthusiasm for exploration extends to my
          professional life as well. Recently, I graduated with a Bachelor's
          degree in Computer Science Engineering from American International
          University, where I delved into algorithms, data structures, and
          software engineering. I thrive on innovation and quick learning,
          evident from the various projects I've undertaken. As a web
          development enthusiast, I'm seeking dynamic roles to channel my tech
          skills and drive innovation. I'm open to opportunities in software
          development, system analysis, and more.
        </p>
      </div>
      <div class="p-7 flex-1 relative group cursor-pointer">
        <img src="/fahad.jpg" alt="Sreemangal" class="w-full block" />

        <div class="absolute bottom-20 left-[55px] text-center w-10/12 bg-black cursor-pointer bg-opacity-50 text-white opacity-0 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200 h-56">
          <div class="py-4">
            <h1 class="text-4xl font-bold">Sreemangal</h1>
            <p class="text-lg">
              Sreemangal is often referred to as the "Tea Capital of
              Bangladesh." The rolling hills covered in tea bushes are a sight
              to behold. A visit to a tea estate, like the Finlay Tea Estate, is
              a must. You can learn about the tea-making process and enjoy a cup
              of freshly brewed tea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
