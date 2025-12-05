"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, PlusSquare, User } from "lucide-react";

export default function MobileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-black/80 backdrop-blur-md border-b border-white/10">
                <h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Master Media
                </h1>
                <div className="w-8 h-8 rounded-full bg-gray-800" /> {/* Placeholder for profile/settings */}
            </header>

            {/* Main Content */}
            <main className="flex-1 pb-20 p-4 overflow-y-auto">
                {children}
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-white/10 pb-safe">
                <div className="flex justify-around items-center h-16">
                    <Link
                        href="/"
                        className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive("/") ? "text-purple-500" : "text-gray-500 hover:text-gray-300"
                            }`}
                    >
                        <Home size={24} />
                        <span className="text-xs">Home</span>
                    </Link>
                    <Link
                        href="/create"
                        className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive("/create") ? "text-purple-500" : "text-gray-500 hover:text-gray-300"
                            }`}
                    >
                        <PlusSquare size={24} />
                        <span className="text-xs">Create</span>
                    </Link>
                    <Link
                        href="/profile"
                        className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive("/profile") ? "text-purple-500" : "text-gray-500 hover:text-gray-300"
                            }`}
                    >
                        <User size={24} />
                        <span className="text-xs">Profile</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
