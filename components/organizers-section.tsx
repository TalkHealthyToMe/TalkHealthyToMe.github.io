import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const facilitators = [
  {
    name: "Bastian Brandes",
    affiliation: "Carl von Ossietzky University of Oldenburg",
    description: "Research associate at the Institute for Health Services Research in the Big Data in Medicine research group. His work focuses on data-driven prevention strategies for migraine and human-computer interaction.",
    initials: "BB",
    image: "images/BastianBrandes.jpg",
  },
  {
    name: "María Dech Pons",
    affiliation: "Fraunhofer MEVIS Bremen",
    description: "Doctoral Researcher working in data science, biostatistics, and translation. Speaker of the early career research academy of the Leibniz Science Campus for Digital Public Health.",
    initials: "MP",
    image: "images/MariaDechPons.jpg",
  },
  {
    name: "Julia Heiken",
    affiliation: "Carl von Ossietzky University of Oldenburg",
    description: "Doctoral Researcher in the Department of Health Services Research focusing on Digital Health and digital interventions for smoking cessation.",
    initials: "JH",
    image: "images/JuliaHeiken.jpg",
  },
]

const chairs = [
  {
    name: "Henrik Detjen",
    role: "Program Chair",
    affiliation: "Fraunhofer MEVIS",
    description: "Senior Scientist focusing on the intersection of automated systems and HCI. Explores regulatory-compliant XAI approaches and applications for personalized health recommendations.",
    initials: "HD",
    image: "images/HenrikDetjen.jpg",
  },
  {
    name: "Thomas Essmeyer",
    role: "Communication Chair",
    affiliation: "University of Bremen",
    description: "Postdoc researcher coordinating a research cluster at the Leibniz Science Campus Digital Public Health. His work explores ethical caveats of interaction design in CUIs.",
    initials: "TE",
    image: "",
  },
  {
    name: "Anke V. Reinschluessel",
    role: "Publication Chair",
    affiliation: "University of Konstanz / University of Bayreuth",
    description: "Postdoc and HCI Group member. Research focuses on technologies to create and improve interfaces in the health context, including surgery and digital public health.",
    initials: "AR",
    image: "",
  },
  {
    name: "Nadine Wagener",
    role: "Publication Chair",
    affiliation: "OFFIS - Institute for Information Technology, Oldenburg",
    description: "Group leader focusing on personal pervasive technologies for everyday wellbeing, including VR design models and CUIs in VR for well-being.",
    initials: "NW",
    image: "images/NadineWagener.jpg",
  },
]

export function OrganizersSection() {
  return (
    <section id="organizers" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Meet the Team
          </Badge>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-foreground mb-4">
            Workshop Organizers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The organizing committee bringing together expertise in CUIs and Digital Public Health
          </p>
        </div>

        {/* Facilitators Section */}
        <div className="mb-12">
          <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
            Facilitators
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {facilitators.map((organizer, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 pb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 bg-black flex items-center justify-center">
                    {organizer.image ? (
                    <img 
                      src={organizer.image}
                      alt={organizer.name}
                      className="w-full h-full object-cover grayscale"
                    />
                    ) : (
                      <span className="text-xl font-bold text-white">
                        {organizer.initials}
                      </span>
                    )}
                  </div>
                  <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-foreground mb-1 text-center">
                    {organizer.name}
                  </h4>
                  <p className="text-xs text-muted-foreground text-center mb-3">{organizer.affiliation}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed text-center">
                    {organizer.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chairs Section */}
        <div>
          <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
            Chairs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chairs.map((organizer, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 pb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 bg-black flex items-center justify-center">
                    {organizer.image ? (
                    <img 
                      src={organizer.image}
                      alt={organizer.name}
                      className="w-full h-full object-cover grayscale"
                    />
                    ) : (
                      <span className="text-xl font-bold text-white">
                        {organizer.initials}
                      </span>
                    )}
                  </div>
                  <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-foreground mb-1 text-center">
                    {organizer.name}
                  </h4>
                  <p className="text-sm font-medium text-primary mb-1 text-center">{organizer.role}</p>
                  <p className="text-xs text-muted-foreground text-center mb-3">{organizer.affiliation}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed text-center">
                    {organizer.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
