import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Calendar, Tag } from "lucide-react";

export default function NewsArticlePage() {
    return (
        <div className="flex flex-col w-full bg-rl-black min-h-screen">
            {/* Header / Back Link */}
            <div className="pt-32 pb-8 px-6 max-w-[1400px] mx-auto w-full">
                <Link href="/news" className="inline-flex items-center text-rl-light-grey hover:text-rl-white transition-colors font-heading font-bold tracking-widest uppercase text-sm">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back to News
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[200px] sm:min-h-[400px] overflow-hidden">
                <Image
                    src="/media/images/rover-chassis.png"
                    alt="Rover Hardware"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rl-black via-transparent to-transparent" />
            </section>

            {/* Article Content */}
            <article className="py-20 px-6 max-w-[900px] mx-auto w-full">
                <div className="flex flex-wrap gap-6 mb-8 text-rl-light-grey font-heading font-bold tracking-widest uppercase text-xs">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-rl-white" />
                        NOVEMBER 20, 2025
                    </div>
                    <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-2 text-rl-white" />
                        HARDWARE
                    </div>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black text-rl-white mb-8 sm:mb-12 tracking-tighter leading-tight">
                    UNVEILING THE MARK II ROVER CHASSIS
                </h1>

                <div className="space-y-6 sm:space-y-8 text-base sm:text-xl text-rl-light-grey font-light leading-relaxed">
                    <p className="first-letter:sm:text-7xl first-letter:sm:font-black first-letter:sm:text-rl-white first-letter:sm:mr-3 first-letter:sm:float-left">
                        The robotics division has officially unveiled the Mark II "CHRONOS" rover chassis, a significant leap forward in student-led autonomous vehicle design. Moving away from the budget-focused Mark I, the new chassis is constructed primarily from aircraft-grade 6061 aluminum.
                    </p>

                    <p>
                        The defining feature of CHRONOS is its refined rocker-bogie suspension system, which allows the rover to traverse obstacles up to 1.5 times the diameter of its wheels while maintaining a level instrumentation deck.
                    </p>

                    <h2 className="text-3xl font-heading font-bold text-rl-white mt-16 mb-6 uppercase tracking-tight">MECHANICAL INNOVATION</h2>
                    <p>
                        Each of the six custom-machined wheels is powered by an independent high-torque brushless DC motor, providing superior maneuverability in sandy conditions. The chassis also features integrated mounting points for a proposed 4-degree-of-freedom robotic arm currently in development.
                    </p>

                    <div className="my-16 border-l-4 border-rl-white pl-8 py-4 bg-rl-dark-grey/30 italic">
                        "CHRONOS isn't just a toy; it's a mobile laboratory. The torsional rigidity of this new frame allows us to carry significantly heavier sensor payloads than ever before."
                        <span className="block mt-4 non-italic font-bold uppercase tracking-widest text-sm text-rl-white">— MICHAEL BROWN, LEAD SYSTEMS ENGINEER</span>
                    </div>

                    <p>
                        Field testing for CHRONOS is slated to begin in the dry riverbeds of the outskirts next month. These tests will focus on autonomous navigation algorithms and obstacle avoidance protocols using the on-board stereoscopic vision suite.
                    </p>
                </div>
            </article>

            {/* Next Steps CTA */}
            <section className="py-32 bg-rl-dark-grey border-t border-rl-white/10 text-center">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h3 className="text-4xl font-heading font-black text-rl-white mb-10 tracking-tight uppercase">JOIN THE ROBOTICS DIV</h3>
                    <p className="text-xl text-rl-light-grey font-light mb-12 max-w-2xl mx-auto">
                        We are seeking mechanical and computer vision specialists to join the CHRONOS software integration team.
                    </p>
                    <Link href="/join" className="inline-block px-12 py-4 bg-rl-white text-rl-black hover:bg-rl-light-grey font-heading font-bold tracking-widest uppercase transition-all duration-300">
                        APPLY NOW
                    </Link>
                </div>
            </section>
        </div>
    );
}
