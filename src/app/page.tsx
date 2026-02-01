"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Agent {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  gradient: string;
  comingSoon?: boolean;
}

const agents: Agent[] = [
  {
    id: "chat",
    name: "AI Chat",
    description: "General AI assistant for conversations and queries",
    url: "https://ai3lines.com",
    gradient: "from-violet-500 to-purple-600",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    id: "careers",
    name: "HR Agent",
    description: "Careers and recruitment assistant",
    url: "https://careers.ai3lines.com",
    gradient: "from-emerald-500 to-teal-600",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "snp",
    name: "Sales & Procurement",
    description: "Sales and procurement management agent",
    url: "https://snp.ai3lines.com",
    gradient: "from-blue-500 to-indigo-600",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "finance",
    name: "Finance Agent",
    description: "Financial analysis and management",
    url: "https://finances.ai3lines.com",
    gradient: "from-amber-500 to-orange-600",
    comingSoon: true,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "legal",
    name: "Legal Agent",
    description: "Legal document analysis and compliance",
    url: "https://legal.ai3lines.com",
    gradient: "from-slate-500 to-gray-600",
    comingSoon: true,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: "support",
    name: "Support Agent",
    description: "Customer support and helpdesk",
    url: "https://support.ai3lines.com",
    gradient: "from-rose-500 to-pink-600",
    comingSoon: true,
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

function AgentCard({ agent, index }: { agent: Agent; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!agent.comingSoon) {
      window.open(agent.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`opacity-0 animate-fade-in-up stagger-${index + 1}`}
      style={{ animationFillMode: "forwards" }}
    >
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          relative group cursor-pointer
          bg-white dark:bg-slate-800 rounded-2xl p-6 lg:p-8
          shadow-lg hover:shadow-2xl
          transform transition-all duration-300 ease-out
          ${isHovered ? "scale-105 -translate-y-2" : "scale-100"}
          ${agent.comingSoon ? "opacity-60" : ""}
          border border-gray-100 dark:border-slate-700
        `}
      >
        {/* Gradient overlay on hover */}
        <div
          className={`
            absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10
            bg-gradient-to-br ${agent.gradient}
            transition-opacity duration-300
          `}
        />

        {/* Coming Soon Badge */}
        {agent.comingSoon && (
          <div className="absolute top-3 right-3 bg-gray-200 dark:bg-slate-600 text-gray-600 dark:text-gray-300 text-xs font-semibold px-2 py-1 rounded-full">
            Coming Soon
          </div>
        )}

        {/* Icon Container */}
        <div
          className={`
            w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 lg:mb-6 rounded-2xl
            bg-gradient-to-br ${agent.gradient}
            flex items-center justify-center text-white
            shadow-lg group-hover:shadow-xl
            transform transition-all duration-300
            ${isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"}
          `}
        >
          {agent.icon}
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-2">
            {agent.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            {agent.description}
          </p>
        </div>

        {/* Arrow indicator */}
        {!agent.comingSoon && (
          <div
            className={`
              absolute bottom-3 right-3
              transform transition-all duration-300
              ${isHovered ? "translate-x-1 opacity-100" : "opacity-0"}
            `}
          >
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-400 via-pink-500 to-pink-400 dark:from-pink-600 dark:via-pink-700 dark:to-pink-600">
      {/* Main Content - Flex grow to push footer down */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Logo */}
        <div className="mb-6">
          <Link href="https://3lines.com.sa" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
            <Image
              src="/3lines_logo.png"
              alt="3Lines Logo"
              width={200}
              height={80}
              className="h-16 lg:h-20 w-auto hover:opacity-80 transition-opacity"
              priority
            />
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-3 text-center">
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-500 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,38,211,0.8)]">
            AI Agents Suite
          </span>
        </h1>
        <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-center mb-8 lg:mb-12">
          Select an agent to get started
        </p>

        {/* Agent Grid */}
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {agents.map((agent, index) => (
              <AgentCard key={agent.id} agent={agent} index={index} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer - Always at bottom */}
      <footer className="py-4 border-t border-gray-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Three Lines for Defense Technology, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
