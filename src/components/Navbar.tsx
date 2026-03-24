"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useInteractionFeedback } from "@/lib/useInteractionFeedback";

const NAV_LINKS = [
    { href: "/who-we-are", label: "About" },
    { href: "/what-we-do", label: "Engineering" },
    { href: "/programs", label: "Programs" },
    { href: "/missions", label: "Missions" },
    { href: "/news", label: "Updates" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { triggerClick, triggerHover } = useInteractionFeedback();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            <nav className={`fixed w-full z-50 transition-colors duration-300 border-b border-rl-white/10 ${scrolled || isOpen ? 'bg-rl-black/95 backdrop-blur-md' : 'bg-transparent'}`}>
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="flex items-center cursor-pointer" onClick={() => setIsOpen(false)}>
                                <Image
                                    src="/media/images/nav-logo.png"
                                    alt="DIU SKYWARD"
                                    width={180}
                                    height={60}
                                    className="h-10 w-auto brightness-200"
                                />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-10">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-rl-white/80 hover:text-rl-white text-xs font-bold tracking-widest uppercase transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/join" className="ml-4 px-6 py-3 border border-rl-white text-rl-white hover:bg-rl-white hover:text-rl-black text-xs font-bold tracking-widest uppercase transition-all duration-300">
                                Careers / Join
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen((prev) => !prev)}
                                className="text-rl-white hover:text-rl-light-grey transition-colors p-2"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Drawer */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-rl-white/10 bg-rl-black/95 backdrop-blur-md ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="flex flex-col px-6 py-8 space-y-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-rl-white/80 hover:text-rl-white text-sm font-bold tracking-widest uppercase transition-colors py-2 border-b border-rl-white/10"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/join"
                            className="mt-4 w-full text-center px-6 py-4 border border-rl-white text-rl-white hover:bg-rl-white hover:text-rl-black text-xs font-bold tracking-widest uppercase transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Careers / Join
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Backdrop overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-rl-black/50 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
