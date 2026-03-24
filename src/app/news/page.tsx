"use client";

import Card from "@/components/Card";
import { Newspaper } from "lucide-react";
import { useState } from "react";

const INITIAL_NEWS_COUNT = 4;

const ALL_NEWS_ITEMS = [
    {
        href: "/news/sr1-static-fire-success",
        title: "SR-1 STATIC FIRE A RESOUNDING SUCCESS",
        description: "The propulsion team successfully completed the full-duration static fire of the SR-1 solid motor, achieving a peak thrust of 1.2kN.",
        category: "TESTING"
    },
    {
        href: "/news/cansat-competition-2026",
        title: "SKYWARD QUALIFIES FOR CANSAT COMPETITION",
        description: "Our telemetry division has officially passed the Critical Design Review (CDR) phase for the upcoming 2026 National CanSat Competition.",
        category: "COMPETITION"
    },
    {
        href: "/news/new-rover-chassis",
        title: "UNVEILING THE MARK II ROVER CHASSIS",
        description: "The robotics team presents the newly machined aluminum 6-wheel rocker-bogie suspension system designed for extraterrestrial analog environments.",
        category: "HARDWARE"
    },
    {
        href: "/news/recruitment-drive-sp26",
        title: "SPRING 2026 RECRUITMENT DRIVE OPENS",
        description: "Applications are now open for students across all engineering disciplines to join the DIU Skyward initiative for the upcoming semester.",
        category: "ANNOUNCEMENT"
    },
    // Older Stories (Revealed by button)
    {
        href: "/news/avionics-pcb-v3",
        title: "AVIONICS BOARD V3 MANUFACTURED",
        description: "The new deeply miniaturized flight controller has arrived from fabrication, featuring redundant altimeters and enhanced thermal protection.",
        category: "HARDWARE"
    },
    {
        href: "/news/university-grant-secured",
        title: "UNIVERSITY RESEARCH GRANT SECURED",
        description: "DIU Skyward has been awarded a core faculty research grant to expand composite material testing for upcoming suborbital missions.",
        category: "FUNDING"
    },
    {
        href: "/news/inaugural-symposium",
        title: "INAUGURAL AEROSPACE SYMPOSIUM",
        description: "The team hosted the first university-wide symposium demonstrating rocketry principles to incoming freshmen, boosting program visibility.",
        category: "EVENTS"
    }
];

export default function NewsPage() {
    const [visibleCount, setVisibleCount] = useState(INITIAL_NEWS_COUNT);

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, ALL_NEWS_ITEMS.length));
    };

    const hasMore = visibleCount < ALL_NEWS_ITEMS.length;

    return (
        <div className="flex flex-col w-full bg-rl-black min-h-screen">

            {/* Hero */}
            <section className="relative py-40 overflow-hidden flex flex-col items-center justify-center text-center w-full bg-rl-dark-grey border-b border-rl-white/10">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-[url('/media/images/rocket-launch.png')] bg-cover bg-center" />
                <div className="relative z-20 max-w-[1400px] px-6 mt-16">
                    <span className="text-rl-light-grey font-bold tracking-[0.3em] uppercase mb-4 block">Updates</span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black text-rl-white mb-6 tracking-tighter">
                        NEWS
                    </h1>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-32 w-full">
                <div className="max-w-[1400px] mx-auto px-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {ALL_NEWS_ITEMS.slice(0, visibleCount).map((item, index) => (
                            <div key={index} className="h-auto sm:h-[400px] md:h-[500px]">
                                <Card
                                    href={item.href}
                                    title={item.title}
                                    description={item.description}
                                    icon={<Newspaper className="w-16 h-16" />}
                                    category={item.category}
                                />
                            </div>
                        ))}
                    </div>

                    {hasMore && (
                        <div className="mt-20 text-center">
                            <button
                                onClick={loadMore}
                                className="px-12 py-4 bg-transparent border border-rl-white text-rl-white hover:bg-rl-white hover:text-rl-black font-heading font-bold tracking-widest uppercase transition-all duration-300"
                            >
                                LOAD OLDER STORIES
                            </button>
                        </div>
                    )}

                </div>
            </section>

        </div>
    );
}
