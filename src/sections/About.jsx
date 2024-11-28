import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import {useState} from "react";


const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText("anjalivaish343@gmail.com");

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/pfp.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div className="grid-headtext">
                            <p>Hi, I'm Anjali Vaish</p>
                            <p className="grid-subtext">I’m all about geeking out with technology and unleashing my creativity—  I have honed my skills in frontend and backend development along with strong community building and leadership skills.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I am proficient in various languages and frameworks, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                            height ={325}
                            width={326}
                            backgroundColor="rgba(0, 0, 0, 0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: 28, lng: 77,
                                text: "I'm here!",
                                color: "white",
                                size: 20,
                            }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I'm open to working across the globe.</p>
                            <p className="grid-subtext">I'm based in India and actively seeking opportunities, whether remote or on-site.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My passion for Coding</p>
                            <p className="grid-subtext">I love solving problems and building things through code. I'm
                                always eager to learn and explore new technologies.</p>
                            <div className="space-y-2">
                                <p className="grid-subtext">Check out my profiles:</p>
                                <div className="flex space-x-4">
                                    <a href="https://leetcode.com/u/anjali_vaish/"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-blue-500 hover:underline">
                                        LeetCode Profile
                                    </a>
                                    <a href="https://www.hackerrank.com/anjalivaish343"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="text-blue-500 hover:underline">
                                        HackerRank Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4"
                             className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">anjalivaish343@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About
