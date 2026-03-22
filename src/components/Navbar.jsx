import React, { useState } from "react";
import { Search, MessageSquare, Bell, UserRound, Menu, X, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="relative w-full bg-nav-bg border-b-2 border-lime-neon border-opacity-50 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 gap-4 md:gap-6">
        {/* Left Menu / Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <img 
            src="/logo.png" 
            alt="ULTRAHUSTLE Logo" 
            className="h-6 md:h-8 w-auto object-contain"
          />
        </div>

        {/* Hamburger Menu Toggle for Mobile */}
        <button 
          className="md:hidden p-2 text-text-secondary hover:text-text-primary rounded-md focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Center Links - Hidden on extra small screens, visible on md+ */}
        <div className="hidden md:flex items-center justify-start gap-4 lg:gap-8 shrink-0">
          <a href="#" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Marketplace
          </a>
          <div className="flex flex-col items-center gap-1 group">
            <div className="h-2 w-6 lg:w-16 bg-text-primary dark:bg-lime-neon rounded-b-full shrink-0"></div>
            <a href="#" className="text-sm font-bold text-text-primary dark:text-lime-neon transition-colors group-hover:opacity-80">
              Dashboard
            </a>
          </div>
        </div>

        {/* Search Bar - Hidden on mobile, flex 1 on large screens */}
        <div className="hidden w-full md:flex-1 md:flex items-center justify-center order-last md:order-none mt-2 md:mt-0 px-2 lg:px-8">
          <div className="relative w-full max-w-sm lg:max-w-lg">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
            <Input
              type="text"
              placeholder="Search here"
              className="w-full px-12 py-3 bg-search-bg text-text-primary placeholder:text-text-secondary border-none rounded-full text-center focus-visible:ring-1 focus-visible:ring-lime-neon"
            />
          </div>
        </div>

        {/* Right Controls - Hidden on mobile */}
        <div className="hidden md:flex items-center justify-end gap-3 md:gap-6 shrink-0 order-2 md:order-none">
          <Button variant="ghost" className="rounded-full w-12 h-12 p-3 shrink-0 [&_svg]:!w-6 [&_svg]:!h-6 outline-none hover:bg-transparent">
            <MessageSquare className="text-text-secondary hover:text-text-primary transition-colors" />
          </Button>
          <Button variant="ghost" className="rounded-full w-12 h-12 p-3 shrink-0 [&_svg]:!w-6 [&_svg]:!h-6 outline-none hover:bg-transparent">
            <Bell className="text-text-secondary hover:text-text-primary transition-colors" />
          </Button>
          
          <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-lime-neon cursor-pointer overflow-hidden">
            <AvatarFallback className="bg-search-bg w-full h-full flex items-center justify-center">
              <UserRound className="h-5 w-5 md:h-6 md:w-6 text-text-secondary" />
            </AvatarFallback>
          </Avatar>
          
          <Button variant="ghost" onClick={toggleTheme} className="ml-2 rounded-full w-10 h-10 p-2 shrink-0 bg-search-bg hover:bg-muted-card">
            <Moon className="w-5 h-5 text-text-primary" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-nav-bg shadow-md flex flex-col py-2">
          <a href="#" className="px-6 py-3 text-sm font-medium text-text-secondary hover:bg-search-bg hover:text-text-primary">
            Home
          </a>
          <a href="#" className="px-6 py-3 text-sm font-medium text-text-secondary hover:bg-search-bg hover:text-text-primary">
            Marketplace
          </a>
          <a href="#" className="px-6 py-3 text-sm font-bold text-text-primary dark:text-lime-neon bg-gray-100 dark:bg-lime-neon/10 border-l-4 border-text-primary dark:border-lime-neon">
            Dashboard
          </a>
          
          <div className="px-6 py-3 border-t border-search-bg mt-2 flex gap-4">
             <Button variant="ghost" onClick={toggleTheme} className="rounded-full w-10 h-10 p-2 bg-search-bg">
                <Moon className="w-5 h-5 text-text-primary" />
             </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
