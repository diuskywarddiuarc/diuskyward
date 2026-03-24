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
                    src="/media/images/rocket-launch.png"
                    alt="Rocket Engine Test"
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
                        OCTOBER 14, 2025
                    </div>
                    <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-2 text-rl-white" />
                        TESTING
                    </div>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black text-rl-white mb-8 sm:mb-12 tracking-tighter leading-tight">
                    SR-1 STATIC FIRE A RESOUNDING SUCCESS
                </h1>

                <div className="space-y-6 sm:space-y-8 text-base sm:text-xl text-rl-light-grey font-light leading-relaxed">
                    <p className="first-letter:sm:text-7xl first-letter:sm:font-black first-letter:sm:text-rl-white first-letter:sm:mr-3 first-letter:sm:float-left">
                        The propulsion division of DIU Skyward has successfully completed a full-duration static fire test of the SR-1 solid rocket motor. Conducted at the specialized university test range, the firing lasted exactly 4.2 seconds, matching theoretical performance curves with a 98% accuracy rating.
                    </p>

                    <p>
                        Peak thrust was recorded at 1.2kN, providing the necessary data to proceed with the final integration of the SR-1 flight vehicle. This test marks the culmination of six months of iterative nozzle design and propellant grain geometry optimization.
                    </p>

                    <h2 className="text-3xl font-heading font-bold text-rl-white mt-16 mb-6 uppercase tracking-tight">ENGINEERING DATA</h2>
                    <p>
                        High-bitrate telemetry captured during the burn indicates stable internal pressure profiles throughout the transition from regressive to progressive burn phases. The newly developed ablation-resistant nozzle throat showed minimal material loss, confirming the thermal modeling developed by the structures team.
                    </p>

                    <div className="my-16 border-l-4 border-rl-white pl-8 py-4 bg-rl-dark-grey/30 italic">
                        "The data we've gathered today isn't just a success for the propulsion team—it's a green light for our first suborbital launch attempt."
                        <span className="block mt-4 non-italic font-bold uppercase tracking-widest text-sm text-rl-white">— ALEX JOHNSON, VP OF PROPULSION</span>
                    </div>

                    <p>
                        With the SR-1 certified for flight, focus now shifts to the avionics suite integration and parachute deployment tests scheduled for next month. The team remains on track for the inaugural launch window opening in early 2026.
                    </p>
                </div>
            </article>

            {/* Next Steps CTA */}
            <section className="py-32 bg-rl-dark-grey border-t border-rl-white/10 text-center">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h3 className="text-4xl font-heading font-black text-rl-white mb-10 tracking-tight uppercase">JOIN THE MISSION</h3>
                    <p className="text-xl text-rl-light-grey font-light mb-12 max-w-2xl mx-auto">
                        We are looking for passionate engineers to join our propulsion and structures teams.
                    </p>
                    <Link href="/join" className="inline-block px-12 py-4 bg-rl-white text-rl-black hover:bg-rl-light-grey font-heading font-bold tracking-widest uppercase transition-all duration-300">
                        APPLY NOW
                    </Link>
                </div>
            </section>
        </div>
    );
}
