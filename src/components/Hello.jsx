import { ComputersCanvas } from "./Item";
import {styles} from "../styles"

const Hello = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute h-3/4 top-[70px] grid grid-cols-2 justify-center ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className={`h-3`}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm CodeModeOn
          </h1>
          <p className={`${styles.heroSubText} text-white`}>
            I develop 3D Models with Three.js and make some animations
            <span className={`grid text-base mt-2`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, harum?</span>
          </p>
        </div>
      <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hello;