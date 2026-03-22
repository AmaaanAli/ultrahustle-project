import React from "react";
import { MessageSquare, Paperclip, ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function ContractCard({ mode = "solo" }) {
  const data = mode === "solo" 
    ? {
        title: "Brand Identity + Landing Page",
        type: "Solo",
        client: "Ava (Client)",
        nextAction: "Next: Logo directions",
        dueDateShort: "Feb 20, 2026",
        dueDateLong: "Mar 15, 2026",
        daysLeft: "12 days left",
        messages: 34,
        files: 12,
        progressText: "1/4",
        progressWidth: "w-1/4",
        showExtension: false
      }
    : {
        title: "Monthly Content Ops (Retainer)",
        type: "Teams",
        client: "Acme Corp",
        nextAction: "Next: April Editorial Calendar",
        dueDateShort: "Mar 30, 2026",
        dueDateLong: "Apr 2, 2026",
        daysLeft: "15 days left",
        messages: 89,
        files: 24,
        progressText: "2/4",
        progressWidth: "w-2/4",
        showExtension: true
      };

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      {/* Left Section - Main Project Details */}
      <div className="flex-1 border border-card-border rounded-xl p-5 flex flex-col justify-between bg-card-bg shadow-sm">
        <div>
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 min-w-0">
            <h4 className="text-base sm:text-lg font-bold text-heading truncate">{data.title}</h4>
            <div className="flex items-center gap-2 shrink-0">
              <Badge className="bg-lime-neon hover:bg-lime-neon text-black font-bold px-2 !py-2 text-xs rounded-sm shrink-0">
                Active
              </Badge>
              {data.showExtension && (
                <Badge className="bg-muted-card hover:bg-search-bg text-text-primary font-bold px-2 !py-2 text-xs rounded-sm shrink-0 border-none">
                  Extension
                </Badge>
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs sm:text-sm text-text-secondary font-medium">
            <span className="text-text-primary">{data.type}</span>
            <span className="w-1 h-1 rounded-full bg-muted-card shrink-0"></span>
            <span className="truncate text-text-primary">{data.client}</span>
            <span className="w-1 h-1 rounded-full bg-muted-card shrink-0"></span>
            <span className="truncate text-text-primary">contract id</span>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-heading">Milestones</span>
            <span className="text-sm font-bold text-text-primary">{data.progressText}</span>
          </div>
          {/* Progress bar container */}
          <div className="w-full h-3 bg-muted-card rounded-full overflow-hidden flex">
            <div className={`h-full bg-lime-neon ${data.progressWidth}`}></div>
          </div>
          <div className="mt-2 text-sm text-text-secondary font-medium flex items-center gap-2">
            <span>{data.nextAction}</span>
            <span className="w-1 h-1 rounded-full bg-muted-card"></span>
            <span>due {data.dueDateShort}</span>
          </div>
        </div>
      </div>

      {/* Middle Section - Due Info */}
      <div className="w-full lg:w-64 border border-card-border rounded-xl p-5 flex flex-col justify-start bg-card-bg shadow-sm">
        <h5 className="font-bold tracking-tight text-heading mb-2 text-base">Due</h5>
        <div className="flex flex-col gap-3">
          <div className="flex items-center text-text-secondary font-medium text-sm">
            <Calendar className="w-4 h-4 mr-3 opacity-70" />
            <span className="text-text-primary">{data.dueDateLong}</span>
          </div>
          <div className="flex items-center text-text-secondary font-medium text-sm">
            <Clock className="w-4 h-4 mr-3 opacity-70" />
            <span className="text-text-primary">{data.daysLeft}</span>
          </div>
        </div>
      </div>

      {/* Right Section - Collaboration */}
      <div className="w-full lg:w-72 border border-card-border rounded-xl p-5 flex flex-col justify-start bg-card-bg shadow-sm">
        <div>
          <h5 className="font-bold tracking-tight text-heading mb-2 text-base">Collaboration</h5>
          <div className="flex gap-3 mb-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-muted-card rounded-md text-sm font-semibold text-text-primary">
              <MessageSquare className="w-4 h-4 text-text-secondary dark:text-lime-neon" />
              {data.messages}
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-muted-card rounded-md text-sm font-semibold text-text-primary">
              <Paperclip className="w-4 h-4 text-text-secondary dark:text-lime-neon" />
              {data.files}
            </div>
          </div>
        </div>
        <Button className="w-full bg-lime-neon py-5 hover:bg-[#b3e600] text-black font-semibold shadow-sm justify-between group mt-2">
          Open Workroom
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
