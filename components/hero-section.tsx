import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm gap-2 inline-flex items-center">
            <Sparkles className="h-3.5 w-3.5" />
            CUI 2026 Workshop
          </Badge>
          
          <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Talk Healthy To Me
            </span>
          </h1>
          
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground sm:text-2xl text-pretty max-w-3xl mx-auto">
            Opportunities and Challenges of Conversational User Interfaces for Digital Public Health
          </p>

          <div className="mt-10 inline-flex items-center rounded-full border border-border/50 bg-card/50 backdrop-blur-sm px-6 py-3 text-sm text-muted-foreground">
            This CUI 2026 workshop will take place in-person in Bremen, Germany as part of the ACM Conversational User Interface conference (CUI).
          </div>
        </div>
      </div>
    </section>
  )
}
