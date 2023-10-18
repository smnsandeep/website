/* eslint-disable @next/next/no-img-element */

const About = () => {
  return (
    <div className="p-4 dark:bg-gray-800 flex justify-center flex-col space-y-4">
      <h2 className="text-5xl lg:text-7xl font-thin text-gray-600 dark:text-white lg:pl-3.5">
        Things I work with
      </h2>
      <img
        src="https://skillicons.dev/icons?i=kotlin,java,swift,js,ts,python,go,html,css,bash,nodejs,postgres,mysql,androidstudio,github,idea,nextjs,redis,tailwind,"
        alt="Skills"
      />
    </div>
  );
};

export default About;
