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
                    src="/media/images/globe-planet.png"
                    alt="University Symposium"
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
                        JANUARY 10, 2026
                    </div>
                    <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-2 text-rl-white" />
                        EVENTS
                    </div>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black text-rl-white mb-8 sm:mb-12 tracking-tighter leading-tight">
                    INAUGURAL AEROSPACE SYMPOSIUM
                </h1>

                <div className="space-y-6 sm:space-y-8 text-base sm:text-xl text-rl-light-grey font-light leading-relaxed">
                    <p className="first-letter:sm:text-7xl first-letter:sm:font-black first-letter:sm:text-rl-white first-letter:sm:mr-3 first-letter:sm:float-left">
                        DIU Skyward successfully hosted the first university-wide Aerospace Symposium today, bringing together students and faculty to explore the future of rocketry in South Asia. The event showcased the hardware and research developed by Skyward over the past year.
                    </p>

                    <p>
                        The symposium featured live demonstrations of telemetry systems, static displays of the MARK II rover chassis, and a keynote address on the importance of interdisciplinary collaboration in complex engineering projects.
                    </p>

                    <h2 className="text-3xl font-heading font-bold text-rl-white mt-16 mb-6 uppercase tracking-tight">PUBLIC OUTREACH</h2>
                    <p>
                        Over 200 freshmen attended the event, many expressing strong interest in the upcoming recruitment cycle. The goal of the symposium was not just to "show off" hardware, but to demystify aerospace engineering and show that it is accessible to any student with enough dedication.
                    </p>

                    <div className="my-16 border-l-4 border-rl-white pl-8 py-4 bg-rl-dark-grey/30 italic">
                        "Seeing the reactions of the new students to our flight computers and rovers was incredible. We are building a community here, not just a team."
                        <span className="block mt-4 non-italic font-bold uppercase tracking-widest text-sm text-rl-white">— JANE SMITH, CHIEF OPERATIONS OFFICER</span>
                    </div>

                    <p>
                        Due to the overwhelming success of the event, DIU Skyward plans to make the symposium an annual tradition, acting as the flagship event for the start of the academic year.
                    </p>
                </div>
            </article>

            {/* Next Steps CTA */}
            <section className="py-32 bg-rl-dark-grey border-t border-rl-white/10 text-center">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h3 className="text-4xl font-heading font-black text-rl-white mb-10 tracking-tight uppercase">JOIN THE COMMUNITY</h3>
                    <p className="text-xl text-rl-light-grey font-light mb-12 max-w-2xl mx-auto">
                        Missed the symposium? You can still catch up with us at our weekly lab workshops.
                    </p>
                    <Link href="/join" className="inline-block px-12 py-4 bg-rl-white text-rl-black hover:bg-rl-light-grey font-heading font-bold tracking-widest uppercase transition-all duration-300">
                        LEARN MORE
                    </Link>
                </div>
            </section>
        </div>
    );
}
