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
                    src="/media/images/graduation-people.png"
                    alt="University Campus"
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
                        DECEMBER 28, 2025
                    </div>
                    <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-2 text-rl-white" />
                        FUNDING
                    </div>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black text-rl-white mb-8 sm:mb-12 tracking-tighter leading-tight">
                    UNIVERSITY RESEARCH GRANT SECURED
                </h1>

                <div className="space-y-6 sm:space-y-8 text-base sm:text-xl text-rl-light-grey font-light leading-relaxed">
                    <p className="first-letter:sm:text-7xl first-letter:sm:font-black first-letter:sm:text-rl-white first-letter:sm:mr-3 first-letter:sm:float-left">
                        DIU Skyward is proud to announce that it has been awarded a core faculty research grant for the upcoming fiscal year. This funding represents the university's strongest commitment to date towards student-led aerospace research and will directly support our composite material testing programs.
                    </p>

                    <p>
                        The grant will be used to establish a new carbon fiber layup station and an environmental testing chamber within the university engineering block. This allows the team to manufacture and certify their own airframe components, significantly reducing the lead time for rocket production.
                    </p>

                    <h2 className="text-3xl font-heading font-bold text-rl-white mt-16 mb-6 uppercase tracking-tight">STRATEGIC GROWTH</h2>
                    <p>
                        Beyond simple hardware procurement, a portion of the grant is dedicated to sponsoring students for international aerospace certifications. This move aims to elevate the baseline engineering capability of our team and ensure our flight operations adhere to the highest safety standards.
                    </p>

                    <div className="my-16 border-l-4 border-rl-white pl-8 py-4 bg-rl-dark-grey/30 italic">
                        "This grant isn't just a financial win—it's a validation of the hard work and rigor DIU Skyward students bring to their research every single day."
                        <span className="block mt-4 non-italic font-bold uppercase tracking-widest text-sm text-rl-white">— DR. TOUHID BHUIYAN, TECHNICAL GUIDE</span>
                    </div>

                    <p>
                        Initial procurement for the new lab equipment has already commenced. We expect the composite fabrication station to be fully operational by the start of the next semester.
                    </p>
                </div>
            </article>

            {/* Next Steps CTA */}
            <section className="py-32 bg-rl-dark-grey border-t border-rl-white/10 text-center">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h3 className="text-4xl font-heading font-black text-rl-white mb-10 tracking-tight uppercase">INVEST IN THE FUTURE</h3>
                    <p className="text-xl text-rl-light-grey font-light mb-12 max-w-2xl mx-auto">
                        Corporate sponsorship opportunities are still available for our 2026 launch manifests.
                    </p>
                    <Link href="/join" className="inline-block px-12 py-4 bg-rl-white text-rl-black hover:bg-rl-light-grey font-heading font-bold tracking-widest uppercase transition-all duration-300">
                        BECOME A SPONSOR
                    </Link>
                </div>
            </section>
        </div>
    );
}
