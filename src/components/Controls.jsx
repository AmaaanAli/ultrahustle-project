import React from "react";
import { Search, Briefcase, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function Controls({ mode, setMode }) {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Top Row: Title, Toggles, Filters */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
        <h3 className="text-xl font-bold text-heading w-full lg:w-auto text-center lg:text-left">Contracts</h3>
        
        {/* Grouped Toggles and Filters */}
        <div className="flex flex-col md:flex-row w-full lg:w-auto items-center justify-center lg:justify-end gap-6 md:gap-16">
          {/* Toggle Solo / Teams */}
          <div className="flex w-full sm:w-auto justify-center items-center p-1 bg-lime-neon border border-card-border rounded-lg shadow-sm">
            
            <Button 
              onClick={() => setMode('solo')}
              className={`px-6 py-2 rounded-md font-semibold ${mode === 'solo' ? 'bg-card-bg text-text-primary hover:bg-card-bg shadow-sm' : 'bg-transparent text-black hover:bg-[#b3e600] shadow-none'}`}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Solo
            </Button>
            <Button 
              onClick={() => setMode('teams')}
              className={`px-6 py-2 rounded-md font-semibold ${mode === 'teams' ? 'bg-card-bg text-text-primary hover:bg-card-bg shadow-sm' : 'bg-transparent text-black hover:bg-[#b3e600] shadow-none'}`}
            >
              <Users className="w-4 h-4 mr-2" />
              Teams
            </Button>
          </div>
          
          {/* Status Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Badge className="px-4 py-3 text-sm bg-lime-neon text-black hover:bg-lime-neon cursor-pointer rounded-full font-bold">
              Active
            </Badge>
            <Badge variant="secondary" className="px-4 py-3 text-sm text-text-secondary bg-gray-200 hover:bg-gray-300 dark:bg-card-border dark:hover:bg-search-bg cursor-pointer rounded-full font-semibold border-none transition-colors">
              Completed
            </Badge>
            <Badge variant="secondary" className="px-4 py-3 text-sm text-text-secondary bg-gray-200 hover:bg-gray-300 dark:bg-card-border dark:hover:bg-search-bg cursor-pointer rounded-full font-semibold border-none transition-colors">
              Disputed
            </Badge>
          </div>
        </div>
      </div>

      {/* Bottom Row: Search & Dropdown */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
          <Input 
            placeholder="Search product" 
            className="pl-10 h-12 text-base rounded-lg border-card-border bg-card-bg text-text-primary focus-visible:ring-lime-neon"
          />
        </div>
        
        <Select defaultValue="recent">
          <SelectTrigger className="w-[200px] h-12 py-6 rounded-lg border-card-border bg-card-bg text-text-primary text-base font-medium focus:ring-lime-neon">
            <SelectValue placeholder="Sort activity" />
          </SelectTrigger>
          <SelectContent className="bg-card-bg border-card-border text-text-primary">
            <SelectItem value="recent" className="focus:bg-search-bg focus:text-text-primary">Recent activity</SelectItem>
            <SelectItem value="oldest" className="focus:bg-search-bg focus:text-text-primary">Oldest activity</SelectItem>
            <SelectItem value="name" className="focus:bg-search-bg focus:text-text-primary">Project name</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
