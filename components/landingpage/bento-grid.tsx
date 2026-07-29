"use client"

import type React from "react"

import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { TbLayoutGrid } from 'react-icons/tb';
import { Button } from "../ui/button"
// import EventCard from "./ui/event-card"
// import GlideSelect from "./ui/glide-select";
type TaskRow = {
  task: string
  assignees: string[]
  status: "Progress" | "Done" | "Paused" | "Not started"
  priority: "High" | "Medium" | "Low"
}
function SectionIntro() {
  return (
    <header className="pt-10 ml-8 sm:pt-16 lg:pt-20">
      <div className="mb-4">
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <TbLayoutGrid className="size-4" />
          Adaptive
        </Button>
      </div>
      <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        Stay agile with adaptive workflows
      </h1>
      <p className="mt-4 max-w-3xl text-pretty text-base text-muted-foreground sm:text-lg">
        AI streamlines your processes to adjust as priorities shift.
      </p>
    </header>
  )
}

function FeatureColumn({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("flex flex-col gap-6 p-6 sm:p-8", className)}>
      <div>
        <p className="text-sm text-neutral-800 dark:text-neutral-300">{eyebrow}</p>
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        <div className="mt-3 text-neutral-800 dark:text-neutral-300 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </section>
  )
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mt-6 rounded-xl border border-border bg-neutral-50 dark:bg-neutral-950 text-card-foreground shadow-sm", className)}>
      {children}
    </div>
  )
}

function TasksCard() {
  const rows: TaskRow[] = useMemo(
    () => [
      { task: "Main Flow Design", assignees: ["AB", "RA"], status: "Progress", priority: "High" },
      { task: "Prototype", assignees: ["AB"], status: "Progress", priority: "Medium" },
      { task: "User Onboarding", assignees: ["AB", "RA"], status: "Progress", priority: "Medium" },
      { task: "User Flow", assignees: ["AB"], status: "Done", priority: "Low" },
      { task: "Brand Guideline", assignees: ["AB"], status: "Paused", priority: "Low" },
      { task: "Defining MVP", assignees: [], status: "Not started", priority: "High" },
    ],
    [],
  )

  return (
    <Card>
      <div className="overflow-hidden">
        <table className="w-full table-fixed border-collapse">
          <thead className="bg-secondary/60 text-xs">
            <tr className="[&>th]:px-3 [&>th]:py-2 [&>th]:text-left">
              <th className="w-[40%]">Task</th>
              <th className="w-[20%]">Assigned</th>
              <th className="w-[20%]">Status</th>
              <th className="w-[20%]">Priority</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rows.map((r, i) => (
              <tr key={r.task} className={cn("border-t border-border/70", i % 2 === 1 && "bg-secondary/30")}>
                <td className="truncate px-3 py-2">{r.task}</td>
                <td className="px-3 py-2">
                  <div className="flex -space-x-2">
                    {r.assignees.length === 0 ? (
                      <span className="text-muted-foreground">Unassigned</span>
                    ) : (
                      r.assignees.map((a) => (
                        <span
                          key={a}
                          className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-accent text-[10px] font-medium"
                          aria-label={`Assignee ${a}`}
                          title={a}
                        >
                          {a}
                        </span>
                      ))
                    )}
                  </div>
                </td>
                <td className="px-3 py-2">
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-2 py-0.5 text-xs",
                      r.status === "Done"
                        ? "bg-[color:var(--color-chart-2)]/15 text-foreground"
                        : r.status === "Paused"
                          ? "bg-[color:var(--color-chart-4)]/15 text-foreground"
                          : r.status === "Progress"
                            ? "bg-[color:var(--color-chart-1)]/15 text-foreground"
                            : "bg-muted text-foreground",
                    )}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                    {r.status}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className="text-foreground/80">{r.priority}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

function MeetingCard() {
  return (
    <div className="mt-6">
      {/* <GlideSelect steps={steps} /> */}
    </div>
  )
}

function AnalyticsCard() {
  return (
    <div className="mt-6">
      {/* 
      <EventCard
        firstEvent="Solana Meet: BLR"
        firstEventTime="8:30–11PM"
        secondEvent="UX Testing Slot"
        secondEventTime="5:30–8:30PM"
        cardTitle="Event Timeline"
        cardDescription="Visualize and navigate your daily flow with beautifully animated, color-coded time blocks."
      /> */}
    </div>
  )
}
const steps = [
  {
    title: "Start from Scratch",
    description: "Design and build everything your way.",
  },
  {
    title: "Use a Template",
    description: "Get a ready-made starter to save time.",
  },
  {
    title: "Remix an Existing UI",
    description: "Take inspiration and make it your own.",
  },
  {
    title: "Explore Component Library",
    description: "Drop in ready-made components with ease.",
  },
];


export default function BentoSection() {
  return (
    <div className="pb-16 lg:mx-0 md:mx-auto  px-4 sm:px-6 ">
      <SectionIntro />

      {/* Features grid */}
      <div className="mt-10 grid grid-cols-1 divide-y divide-border overflow-hidden  border border-border sm:mt-14 md:grid-cols-3 md:divide-x md:divide-y-0">
        <FeatureColumn eyebrow="Unified Scheduling" title="Unified Scheduling">
          Keep all your appointments and events in sync with seamless cross-platform calendar connectivity.
          <TasksCard />
        </FeatureColumn>

        <FeatureColumn
          eyebrow="Insightful Performance"
          title="Insightful Performance"
          className="border-t border-border md:border-t-0"
        >
          Get clear, real-time analytics tracking your progress, key milestones, focus hours, and completed tasks.
          <MeetingCard />
        </FeatureColumn>

        <FeatureColumn
          eyebrow="Effortless Tool Integrations"
          title="Effortless Tool Integrations"
          className="border-t border-border md:border-t-0"
        >
          Link your favorite apps and services to streamline work without switching between platforms.
          <AnalyticsCard />
        </FeatureColumn>
      </div>
    </div>
  )
}