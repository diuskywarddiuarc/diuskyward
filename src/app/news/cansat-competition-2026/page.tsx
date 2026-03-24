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
                    src="/media/images/cansat-prototype.png"
                    alt="CanSat Prototype"
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
                        NOVEMBER 02, 2025
                    </div>
                    <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-2 text-rl-white" />
                        COMPETITION
                    </div>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black text-rl-white mb-8 sm:mb-12 tracking-tighter leading-tight">
                    SKYWARD QUALIFIES FOR CANSAT COMPETITION
                </h1>

                <div className="space-y-6 sm:space-y-8 text-base sm:text-xl text-rl-light-grey font-light leading-relaxed">
                    <p className="first-letter:sm:text-7xl first-letter:sm:font-black first-letter:sm:text-rl-white first-letter:sm:mr-3 first-letter:sm:float-left">
                        DIU Skyward's telemetry and avionics division has achieved a major milestone by officially passing the Critical Design Review (CDR) for the 2026 National CanSat Competition. This certification places Skyward among the top university teams in the region qualified for the final flight phase.
                    </p>

                    <p>
                        The CanSat project, codenamed "AETHER," focuses on atmospheric sensing and high-frequency data transmission during a controlled parachute descent. The design integrates a custom-built flight computer, redundant sensor arrays, and a novel mechanical stabilization system.
                    </p>

                    <h2 className="text-3xl font-heading font-bold text-rl-white mt-16 mb-6 uppercase tracking-tight">MISSION ARCHITECTURE</h2>
                    <p>
                        AETHER is designed to measure barometric pressure, temperature, and GPS coordinates while maintaining a stable downlink to the ground station at 433MHz. The system utilizes a dual-core processor to handle real-time sensor fusion and SD-card logging simultaneously.
                    </p>

                    <div className="my-16 border-l-4 border-rl-white pl-8 py-4 bg-rl-dark-grey/30 italic">
                        "Passing the CDR is a testament to the thousands of hours our students have spent in the lab. We aren't just building a satellite; we're building the future of aerospace talent."
                        <span className="block mt-4 non-italic font-bold uppercase tracking-widest text-sm text-rl-white">— SARAH WILLIAMS, LEAD TELEMETRY ENGINEER</span>
                    </div>

                    <p>
                        The final competition is set to take place in mid-2026. Until then, the team will focus on environmental testing, including vacuum chamber simulations and vibration testing, to ensure the flight hardware can survive the high-G launch environment.
                    </p>
                </div>
            </article>

            {/* Next Steps CTA */}
            <section className="py-32 bg-rl-dark-grey border-t border-rl-white/10 text-center">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h3 className="text-4xl font-heading font-black text-rl-white mb-10 tracking-tight uppercase">SUPPORT THE TEAM</h3>
                    <p className="text-xl text-rl-light-grey font-light mb-12 max-w-2xl mx-auto">
                        Help us fund the procurement of aerospace-grade sensors and batteries for the final flight.
                    </p>
                    <Link href="/join" className="inline-block px-12 py-4 bg-rl-white text-rl-black hover:bg-rl-light-grey font-heading font-bold tracking-widest uppercase transition-all duration-300">
                        SPONSOR US
                    </Link>
                </div>
            </section>
        </div>
    );
}
