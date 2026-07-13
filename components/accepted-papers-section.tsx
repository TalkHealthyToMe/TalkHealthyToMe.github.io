import { FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const acceptedPapers = [
  {
    title: "Designing LLM chatbots for Digital Public Health: co-design with psychologists",
    authors: "Gubing Wang, Tilburg University",
    pdf: "/papers/Designing_LLM_chatbots_for_Digital_Public_Health_co_design_with.pdf",
  },
  {
    title: "Position Paper on Talking to Heirlooms: Exploring Embodiments of Conversational Agents for People with Dementia",
    authors: "Adhityan Raja, Einhoven University of Technology",
    pdf: "/papers/Position Paper Heirloom CUI Healthy To Me.pdf",
  },
  {
    title: "Applying Comparative Research Techniques in Answering Health Questions",
    authors: "Sajad Shirali-Shahreza & Mohamad Khorsandi, Amirkabir University",
    pdf: "/papers/ShiraliShahreza-ComparativeHealthQA-CameraReady.pdf",
  },
]

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
            Position papers and contributions accepted for presentation at the workshop.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {acceptedPapers.map((paper, index) => (
            <Card key={index}>
              <CardContent className="flex gap-4 items-start p-6">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-muted-foreground" />
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-foreground mb-2">
                    <Link
                      href={paper.pdf}
                      target="_blank"
                      className="text-foreground hover:text-primary hover:underline underline-offset-4 transition-colors"
                    >
                    {paper.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">
                    {paper.authors}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
