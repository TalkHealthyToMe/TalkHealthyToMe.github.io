import { Users, Search, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const goals = [
  {
    number: "01",
    icon: Users,
    title: "Connecting Communities",
    description: "Connecting people with different backgrounds and from different communities to exchange on the future of CUIs in Digital Public Health.",
    color: "bg-primary/10 text-primary",
  },
  {
    number: "02",
    icon: Search,
    title: "Exploring Opportunities & Challenges",
    description: "Exploring the opportunities, limitations, and challenges of CUIs in the context of Digital Public Health. Mapping current applications, open challenges, and research gaps, forming the basis for a preliminary research agenda at the intersection of CUIs and Digital Public Health.",
    color: "bg-accent/10 text-accent",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Design Framework",
    description: "Discussion of best practices for translating ethical concepts into technical implementation, focusing on how ethical principles can inform the design and development of CUIs for digital health interventions.",
    color: "bg-primary/10 text-primary",
  },
]

export function GoalsSection() {
  return (
    <section id="goals" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4">
            What to Expect
          </Badge>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4">
            Workshop Goals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three interconnected objectives driving our exploration of CUIs in Digital Public Health
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {goals.map((goal) => (
            <Card key={goal.number} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 font-[family-name:var(--font-display)] text-8xl font-bold text-muted/20 -mr-4 -mt-4">
                {goal.number}
              </div>
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${goal.color} mb-4`}>
                  <goal.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-[family-name:var(--font-display)] text-xl">
                  {goal.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
