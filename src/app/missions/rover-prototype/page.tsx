import Image from "next/image";
import { Compass, Settings, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function RoverPrototypePage() {
    return (
        <div className="flex flex-col w-full bg-rl-black min-h-screen">

            {/* Sub-navigation */}
            <div className="w-full bg-rl-dark-grey border-b border-rl-white/10 pt-20 px-6">
                <div className="max-w-[1400px] mx-auto py-4 flex gap-8 overflow-x-auto no-scrollbar">
                    <Link href="/missions" className="text-rl-light-grey hover:text-rl-white text-xs font-heading font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                        ← All Missions
                    </Link>
                    <span className="text-rl-white text-xs font-heading font-bold uppercase tracking-widest">
                        Rover Chassis Val
                    </span>
                </div>
            </div>

            {/* Hero */}
            <section className="relative h-[80vh] min-h-[600px] overflow-hidden flex flex-col items-center justify-center text-center w-full">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-rl-black to-transparent z-10" />
                    <div className="absolute inset-0 bg-rl-black/40 z-10" />
                    <div
                        className="absolute inset-0 bg-[url('/media/images/team-work.png')] bg-cover bg-center bg-fixed opacity-70"
                    />
                </div>
                <div className="relative z-20 max-w-[1400px] px-6">
                    <span className="text-rl-light-grey font-bold tracking-[0.3em] uppercase mb-4 block">Completed Test</span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black text-rl-white mb-6 tracking-tighter mix-blend-difference">
                        CHASSIS VAL
                    </h1>
                </div>
            </section>

            {/* Content Area */}
            <section className="py-24 md:py-32 w-full">
                <div className="max-w-[1400px] mx-auto px-6">

                    {/* Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40">
                        <div>
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black mb-10 tracking-tight leading-none uppercase">
                                Mobility<br />Validation
                            </h2>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-xl md:text-2xl text-rl-light-grey font-light leading-relaxed mb-8">
                                The robotics division conducted the initial mobility validation of the Mark I 6-wheel rocker-bogie suspension system. The chassis was subjected to highly uneven terrain analogs containing deep sand and steep inclines to map motor torque output.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-rl-white/20">
                                <div>
                                    <span className="block text-4xl font-heading font-bold mb-2">35°</span>
                                    <span className="text-rl-light-grey text-sm tracking-widest uppercase">Max Incline Cleared</span>
                                </div>
                                <div>
                                    <span className="block text-4xl font-heading font-bold mb-2">55cm</span>
                                    <span className="text-rl-light-grey text-sm tracking-widest uppercase">Obstacle Clearance</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Objectives */}
                    <div className="mb-40">
                        <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 tracking-tight uppercase border-b border-rl-white/20 pb-6">
                            Test Outcomes
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-rl-white/20">
                            <div className="p-10 border-b md:border-b-0 md:border-r border-rl-white/20 group hover:bg-rl-dark-grey transition-colors">
                                <Settings className="w-12 h-12 text-rl-white mb-8" strokeWidth={1} />
                                <h3 className="text-2xl font-heading font-bold uppercase mb-4 tracking-widest">DRIVETRAIN</h3>
                                <p className="text-rl-light-grey font-light leading-relaxed">
                                    The planetary gearboxes delivered sustained high-torque performance without overheating or stripping teeth during prolonged sandy ascents.
                                </p>
                            </div>

                            <div className="p-10 border-b md:border-b-0 md:border-r border-rl-white/20 group hover:bg-rl-dark-grey transition-colors">
                                <Compass className="w-12 h-12 text-rl-white mb-8" strokeWidth={1} />
                                <h3 className="text-2xl font-heading font-bold uppercase mb-4 tracking-widest">SUSPENSION</h3>
                                <p className="text-rl-light-grey font-light leading-relaxed">
                                    The rocker-bogie mechanism perfectly distributed weight across all 6 wheels, preventing stalling while navigating 50cm tall boulders.
                                </p>
                            </div>

                            <div className="p-10 group hover:bg-rl-dark-grey transition-colors">
                                <AlertTriangle className="w-12 h-12 text-rl-white mb-8" strokeWidth={1} />
                                <h3 className="text-2xl font-heading font-bold uppercase mb-4 tracking-widest">DUST INGRESS</h3>
                                <p className="text-rl-light-grey font-light leading-relaxed">
                                    Identified minor particulate ingress around the steering servo housings, leading to the development of IP68 dust-sealed enclosures for Mark II.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
