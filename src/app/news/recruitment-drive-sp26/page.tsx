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
                    src="/media/images/meeting-people.png"
                    alt="Team Recruitment"
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
                        DECEMBER 05, 2025
                    </div>
                    <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-2 text-rl-white" />
                        ANNOUNCEMENT
                    </div>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black text-rl-white mb-8 sm:mb-12 tracking-tighter leading-tight">
                    SPRING 2026 RECRUITMENT DRIVE OPENS
                </h1>

                <div className="space-y-6 sm:space-y-8 text-base sm:text-xl text-rl-light-grey font-light leading-relaxed">
                    <p className="first-letter:sm:text-7xl first-letter:sm:font-black first-letter:sm:text-rl-white first-letter:sm:mr-3 first-letter:sm:float-left">
                        DIU Skyward is officially opening applications for the Spring 2026 semester. As we prepare for our most ambitious year yet—featuring multiple rocket launches and international competitions—we are looking for the next generation of aerospace leaders at Daffodil International University.
                    </p>

                    <p>
                        We aren't just looking for rocket scientists. Our organization operates like a real-world aerospace startup, requiring talent in software engineering, embedded systems, strategic communications, financial management, and visual design.
                    </p>

                    <h2 className="text-3xl font-heading font-bold text-rl-white mt-16 mb-6 uppercase tracking-tight">AVAILABLE DIVISIONS</h2>
                    <ul className="list-disc list-inside space-y-4">
                        <li><strong>Propulsion & Structures:</strong> Design high-power solid and hybrid rocket motors.</li>
                        <li><strong>Avionics & Telemetry:</strong> Develop custom flight control systems and ground station software.</li>
                        <li><strong>Robotics & AI:</strong> Build autonomous rovers and computer vision algorithms.</li>
                        <li><strong>Operations & Media:</strong> Manage logistics, sponsorship, and organizational storytelling.</li>
                    </ul>

                    <div className="my-16 border-l-4 border-rl-white pl-8 py-4 bg-rl-dark-grey/30 italic">
                        "Skyward gave me the chance to apply classroom theory to actual flight hardware. It's the most challenging—and rewarding—experience I've had in university."
                        <span className="block mt-4 non-italic font-bold uppercase tracking-widest text-sm text-rl-white">— ALEX JOHNSON, FOUNDER</span>
                    </div>

                    <p>
                        Information sessions will be held throughout the first week of next month in the main engineering block. Interested students are encouraged to bring their portfolios and a willingness to learn. No prior aerospace experience is required.
                    </p>
                </div>
            </article>

            {/* Next Steps CTA */}
            <section className="py-32 bg-rl-dark-grey border-t border-rl-white/10 text-center">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h3 className="text-4xl font-heading font-black text-rl-white mb-10 tracking-tight uppercase">READY TO LAUNCH?</h3>
                    <p className="text-xl text-rl-light-grey font-light mb-12 max-w-2xl mx-auto">
                        Fill out the application form before the deadline on January 15th.
                    </p>
                    <Link href="/join" className="inline-block px-12 py-4 bg-rl-white text-rl-black hover:bg-rl-light-grey font-heading font-bold tracking-widest uppercase transition-all duration-300">
                        APPLY TO JOIN
                    </Link>
                </div>
            </section>
        </div>
    );
}
