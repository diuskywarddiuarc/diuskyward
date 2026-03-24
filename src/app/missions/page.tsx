import Card from "@/components/Card";
import { Play } from "lucide-react";

export default function MissionsPage() {
    return (
        <div className="flex flex-col w-full bg-rl-black min-h-screen">

            {/* Hero */}
            <section className="relative py-40 overflow-hidden flex flex-col items-center justify-center text-center w-full bg-rl-dark-grey border-b border-rl-white/10">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-[url('/media/images/galaxy-space.png')] bg-cover bg-center" />
                <div className="relative z-20 max-w-[1400px] px-6 mt-16">
                    <span className="text-rl-light-grey font-bold tracking-[0.3em] uppercase mb-4 block">Operations</span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black text-rl-white mb-6 tracking-tighter">
                        MISSIONS
                    </h1>
                </div>
            </section>

            {/* Content Area */}
            <section className="py-32 w-full">
                <div className="max-w-[1400px] mx-auto px-6">

                    <div className="mb-32 flex flex-col items-center border-b border-rl-white/20 pb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 tracking-tight flex items-center justify-center gap-4 w-full border-b border-rl-white/20 pb-8 text-center pt-16 uppercase">
                            <span className="w-4 h-4 rounded-full bg-rl-white animate-pulse" />
                            ACTIVE MISSIONS
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full">
                            <div className="h-auto sm:h-[500px] md:h-[600px]">
                                <Card
                                    href="/missions/rocket-test-1"
                                    title="INQUILAB 2"
                                    description="INQUILAB 2 suborbital test flight aimed at validating solid propulsion performance and aerodynamic stability at transonic speeds."
                                    icon={<Play className="w-16 h-16" />}
                                    category="UPCOMING LAUNCH"
                                    image="/media/images/mission-rocket-test-new.jpg"
                                />
                            </div>
                            <div className="h-[600px]">
                                <Card
                                    href="/missions/cansat-alpha"
                                    title="CANSAT ALPHA DROP"
                                    description="High-altitude drone drop to test primary telemetry acquisition systems, barometric sensors, and parachute descent rates."
                                    icon={<Play className="w-16 h-16" />}
                                    category="UPCOMING TEST"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 tracking-tight text-rl-light-grey uppercase border-b border-rl-white/20 pb-8 text-center">
                            PAST MISSIONS
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="h-auto sm:h-[400px] md:h-[500px]">
                                <Card
                                    href="/missions/static-fire-1"
                                    title="STATIC FIRE TEST #1"
                                    description="Successful ground testing of custom KN03/Sugar solid propellant mix, measuring specific impulse and thrust curves."
                                    category="COMPLETED"
                                />
                            </div>
                            <div className="h-[500px]">
                                <Card
                                    href="/missions/avionics-test"
                                    title="AVIONICS HIGH ALT BALLOON"
                                    description="Weather balloon launch to 30km exposing the custom flight computer PCB to near-space thermal vacuum conditions."
                                    category="COMPLETED"
                                />
                            </div>
                            <div className="h-[500px]">
                                <Card
                                    href="/missions/rover-prototype"
                                    title="ROVER CHASSIS VAL"
                                    description="Initial mobility validation of the 6-wheel rocker-bogie suspension system on uneven sandy terrain analogs."
                                    category="COMPLETED"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}
