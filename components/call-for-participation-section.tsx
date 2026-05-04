import { Send, FileText, CheckCircle2, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CallForParticipationSection() {
  return (
    <section id="call-for-participation" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Submit Your Work
          </Badge>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4">
            Call for Participation
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                Conversational user interfaces (CUIs) such as ChatGPT are growing rapidly and becoming deeply embedded in everyday life. Alongside their benefits and opportunities, these technologies also bring unintended consequences. Some emerge immediately, such as privacy risks or transferring false information, while others might unfold over time, including the normalisation of biased language or over-reliance on AI for social and cognitive tasks.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This CUI 2026 workshop, &quot;Talk Healthy To Me: Opportunities and Challenges of Conversational User Interfaces for Digital Public Health&quot; invites researchers and practitioners to reflect on these tools and discuss how to design safer, more inclusive, and responsible conversational systems. We aim to bring together interdisciplinary perspectives from HCI, computer science, public health, psychology, linguistics, sociology, accessibility, and ethics to collectively map harms, share insights, and identify strategies of good CUI use.
              </p>
            </CardContent>
          </Card>

          {/* Submission Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-display)]">
                <FileText className="h-5 w-5 text-primary" />
                Submission Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We welcome position papers with a minimum of 250 words or longer submission of 3-6 pages following the official ACM LaTeX or Word template with the document setup for publishing (submissions do not need to be anonymized).
              </p>
              <p className="text-muted-foreground">
                Submissions can describe ongoing and preliminary work, disciplinary perspectives, or practical case studies relevant to the workshop themes.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Position papers should be 3-6 pages using the official ACM LaTeX or Word template
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Submissions will be reviewed by two organizers independently for quality, relevance, and diversity of viewpoints
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Accepted contributions will be published on the workshop website
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground font-medium">
                    At least one author must attend the workshop in person
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button asChild size="lg" className="px-8">
              <a href="mailto:cuisindiph2026@proton.me">
                <Send className="h-4 w-4 mr-2" />
                Submit Your Position Paper
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Send your submission to <a href="mailto:cuisindiph2026@proton.me" className="text-primary hover:underline">cuisindiph2026@proton.me</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
