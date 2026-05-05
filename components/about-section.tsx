import { Calendar, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          {/* About Text - Left Side */}
          <div className="md:col-span-3">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
              About the Workshop
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The advances and ubiquity of technologies, including conversational user interfaces (CUIs) have been rapidly adopted outside their core domains and made their way in diverse contexts.
              </p>
              <p>
                Public health focuses on improving and protecting the health of populations as a whole. Its objectives are to prevent diseases, promote health, and reduce health inequalities by taking measures such as health education and creating supportive living conditions.
              </p>
              <p>
                As digital technologies have grown in importance, the field of digital public health (DiPH) has emerged, exploring how digital tools can support these goals - for instance, by improving access to health information, enabling new forms of prevention, and facilitating behavior change.
              </p>
              <p>
                CUIs allow users to interact through natural language, can provide health information, encourage behavior change, and help people navigate health services. Because they are easily accessible and scalable, CUIs have considerable potential in digital public health contexts.
              </p>
              <p>
                This workshop wants to explore this potential while at the same time encourage to critically think about possible challenges in this domain.
              </p>
            </div>
          </div>

          {/* Important Dates - Right Side */}
          <div className="md:col-span-2">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-[family-name:var(--font-display)]">
                  <Calendar className="h-5 w-5 text-primary" />
                  Important Dates
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <div className="text-sm text-muted-foreground leading-relaxed">
                  <p>
                    The workshop offers a two-phase submission process designed to support
                    timely planning and broader participation. This structure allows
                    contributors who are ready earlier to benefit from reduced registration
                    fees (early bird registration deadline is June 12), while still providing
                    a second opportunity for later submissions.
                  </p>
                  <p className="mt-2">
                    Authors can choose between two submission deadlines:
                  </p>
                </div>

                {/* Deadline 1 */}
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Submission Deadline 1
                  </p>
                  <p className="font-semibold text-foreground">
                    June 1, 2026 (AoE)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Notification of Acceptance: June 10, 2026 (AoE)
                  </p>
                </div>

                {/* Deadline 2 */}
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Submission Deadline 2
                  </p>
                  <p className="font-semibold text-foreground">
                    June 26, 2026 (AoE)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Notification of Acceptance: July 2, 2026 (AoE)
                  </p>
                </div>

                {/* Email */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Send position papers to
                  </p>
                  <a 
                    href="mailto:cuisindiph2026@proton.me" 
                    className="font-medium text-primary hover:underline break-all"
                  >
                    cuisindiph2026@proton.me
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
