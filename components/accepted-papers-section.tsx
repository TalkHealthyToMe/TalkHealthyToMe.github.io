import { FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function AcceptedPapersSection() {
  return (
    <section id="accepted-papers" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Workshop Contributions
          </Badge>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4">
            Accepted Papers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Position papers and contributions accepted for presentation at the workshop
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="py-16 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-xl text-foreground mb-2">
              Coming Soon
            </h3>
            <p className="text-muted-foreground">
              Accepted papers will be listed here after the review process is complete.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Acceptance notification: June 14, 2026
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
