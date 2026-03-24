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
                    src="/media/images/pcb-electronics.png"
                    alt="Embedded Electronics"
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
                        DECEMBER 14, 2025
                    </div>
                    <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-2 text-rl-white" />
                        HARDWARE
                    </div>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black text-rl-white mb-8 sm:mb-12 tracking-tighter leading-tight">
                    AVIONICS BOARD V3 MANUFACTURED
                </h1>

                <div className="space-y-6 sm:space-y-8 text-base sm:text-xl text-rl-light-grey font-light leading-relaxed">
                    <p className="first-letter:sm:text-7xl first-letter:sm:font-black first-letter:sm:text-rl-white first-letter:sm:mr-3 first-letter:sm:float-left">
                        The highly anticipated V3 flight controller from the avionics division has arrived from the fabrication house. This 4-layer PCB represents the most compact and feature-dense computing system DIU Skyward has ever developed for launch vehicle control.
                    </p>

                    <p>
                        Version 3 was designed to solve the space constraints identified during the SR-1 initial mockups. By utilizing a More-Than-Moore approach to component density, the team managed to reduce the board's volume by 40% while adding redundant altimeters and an integrated IMU.
                    </p>

                    <h2 className="text-3xl font-heading font-bold text-rl-white mt-16 mb-6 uppercase tracking-tight">TECHNICAL SPECIFICATIONS</h2>
                    <ul className="list-disc list-inside space-y-4">
                        <li><strong>Redundancy:</strong> Dual BMI270 6-axis IMUs and BMP388 pressure sensors.</li>
                        <li><strong>Connectivity:</strong> Integrated LoRa module for 20km+ telemetry range.</li>
                        <li><strong>Processing:</strong> High-performance ARM Cortex-M4 core running a custom RTOS.</li>
                        <li><strong>Protection:</strong> Enhanced ESD protection on all I/O pins and a conformal coating for moisture resistance.</li>
                    </ul>

                    <div className="my-16 border-l-4 border-rl-white pl-8 py-4 bg-rl-dark-grey/30 italic">
                        "V3 is the brain our rockets deserve. The level of integration we've achieved here is comparable to commercial aerospace solutions."
                        <span className="block mt-4 non-italic font-bold uppercase tracking-widest text-sm text-rl-white">— JESSICA GARCIA, VP OF SOFTWARE ENGINEERING</span>
                    </div>

                    <p>
                        Functional bench testing has already begun. The firmware team expects to have a stable build ready for the first HIL (Hardware-In-the-Loop) simulations by the end of next week.
                    </p>
                </div>
            </article>

            {/* Next Steps CTA */}
            <section className="py-32 bg-rl-dark-grey border-t border-rl-white/10 text-center">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h3 className="text-4xl font-heading font-black text-rl-white mb-10 tracking-tight uppercase">DEVELOP WITH US</h3>
                    <p className="text-xl text-rl-light-grey font-light mb-12 max-w-2xl mx-auto">
                        Interested in embedded systems or RTOS development? Join the avionics team.
                    </p>
                    <Link href="/join" className="inline-block px-12 py-4 bg-rl-white text-rl-black hover:bg-rl-light-grey font-heading font-bold tracking-widest uppercase transition-all duration-300">
                        JOIN AVIONICS
                    </Link>
                </div>
            </section>
        </div>
    );
}
