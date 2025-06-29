import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Briefcase,
  Code,
  Settings,
  Database,
  Layers,
  ChartLine,
  Bot,
  MapPin,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="pt-20 pb-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="gradient-border flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
              alt="Profile Picture"
              className="w-32 h-32 object-cover rounded-full"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-github-text mb-4">
              Computer Information Systems Student
            </h1>
            <p className="text-xl text-github-text-secondary mb-6 max-w-2xl">
              Passionate about data analysis, machine learning, and full-stack
              development. Currently pursuing Bachelor's degree at Mount Royal
              University with hands-on experience in Python, web development,
              and business analytics.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Badge className="tech-stack bg-github-card text-github-text border-github-border">
                Python
              </Badge>
              <Badge className="tech-stack bg-github-card text-github-text border-github-border">
                Machine Learning
              </Badge>
              <Badge className="tech-stack bg-github-card text-github-text border-github-border">
                Data Analysis
              </Badge>
              <Badge className="tech-stack bg-github-card text-github-text border-github-border">
                Web Development
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-github-text mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-github-blue" />
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-github-text">
                    Mount Royal University
                  </h3>
                  <p className="text-github-text-secondary">
                    Bachelor of Computer Information Systems
                  </p>
                  <p className="text-sm text-github-text-secondary">
                    Calgary, AB • Expected December 2026
                  </p>
                  <div className="mt-3">
                    <p className="text-sm text-github-text-secondary font-medium mb-2">
                      Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Operating Systems",
                        "Software Engineering",
                        "Web Development",
                        "Database Modeling",
                        "Machine Learning",
                      ].map((course) => (
                        <Badge
                          key={course}
                          className="tech-stack bg-github-dark text-github-text-secondary border-github-border text-xs"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-github-text mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-github-blue" />
                Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-github-text">
                    Mobile Sales Associate
                  </h3>
                  <p className="text-github-text-secondary">Best Buy Canada</p>
                  <p className="text-sm text-github-text-secondary">
                    Calgary, AB • May 2023 – May 2024
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-github-text-secondary">
                    <li className="flex items-start">
                      <span className="text-github-green mr-2">•</span>
                      Achieved{" "}
                      <strong className="text-github-text">
                        120% of monthly sales targets
                      </strong>{" "}
                      through product knowledge and customer service
                    </li>
                    <li className="flex items-start">
                      <span className="text-github-green mr-2">•</span>
                      Resolved complex account issues and improved customer
                      satisfaction by{" "}
                      <strong className="text-github-text">20%</strong>
                    </li>
                    <li className="flex items-start">
                      <span className="text-github-green mr-2">•</span>
                      Led team of 15-20 associates during high-traffic periods
                      like Black Friday
                    </li>
                    <li className="flex items-start">
                      <span className="text-github-green mr-2">•</span>
                      Maintained{" "}
                      <strong className="text-github-text">
                        100% accuracy
                      </strong>{" "}
                      during transactions and billing processes
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-github-text mb-8 flex items-center">
          <Code className="w-8 h-8 mr-3 text-github-blue" />
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Euro 2024 Match Analysis */}
          <Card className="bg-github-card border-github-border hover:border-github-blue transition-colors duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-github-text">
                  Euro 2024 Match Analysis
                </h3>
                <ChartLine className="w-6 h-6 text-github-blue" />
              </div>
              <p className="text-github-text-secondary text-sm mb-4">
                Comprehensive football data analysis using event-level data from
                StatsBomb API, featuring machine learning models for predicting
                pass success rates and team performance metrics.
              </p>
              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-xs text-github-text-secondary font-medium">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {[
                      "Python",
                      "scikit-learn",
                      "pandas",
                      "numpy",
                      "mplsoccer",
                      "StatsBomb API",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        className="tech-stack bg-github-dark text-github-text-secondary border-github-border text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="text-xs text-github-text-secondary space-y-1">
                <li className="flex items-start">
                  <span className="text-github-green mr-2">✓</span>Random Forest
                  model for pass prediction
                </li>
                <li className="flex items-start">
                  <span className="text-github-green mr-2">✓</span>Shot maps and
                  player movement analysis
                </li>
                <li className="flex items-start">
                  <span className="text-github-green mr-2">✓</span>JSON data
                  processing and validation
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* AI-Powered Movie Recommender */}
          <Card className="bg-github-card border-github-border hover:border-github-blue transition-colors duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-github-text">
                  AI Movie Recommender
                </h3>
                <Bot className="w-6 h-6 text-github-blue" />
              </div>
              <p className="text-github-text-secondary text-sm mb-4">
                Intelligent movie recommendation system using machine learning
                and NLP to enhance user experience with personalized suggestions
                and real-time movie data.
              </p>
              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-xs text-github-text-secondary font-medium">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {["Python", "Streamlit", "OpenAI API", "TMDB API"].map(
                      (tech) => (
                        <Badge
                          key={tech}
                          className="tech-stack bg-github-dark text-github-text-secondary border-github-border text-xs"
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </div>
              <ul className="text-xs text-github-text-secondary space-y-1">
                <li className="flex items-start">
                  <span className="text-github-green mr-2">✓</span>Machine
                  learning-driven recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-github-green mr-2">✓</span>Interactive
                  Streamlit UI
                </li>
                <li className="flex items-start">
                  <span className="text-github-green mr-2">✓</span>Real-time
                  movie data integration
                </li>
              </ul>
              <div className="mt-4">
                <span className="text-github-blue text-xs">
                  Live Demo Available
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Tourism Data Analysis */}
          <Card className="bg-github-card border-github-border hover:border-github-blue transition-colors duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-github-text">
                  Tourism Data Analysis
                </h3>
                <MapPin className="w-6 h-6 text-github-blue" />
              </div>
              <p className="text-github-text-secondary text-sm mb-4">
                Comprehensive analysis of global tourism and GDP datasets using
                advanced data processing techniques and interactive
                visualizations to uncover economic patterns.
              </p>
              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-xs text-github-text-secondary font-medium">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {["Python", "SQL", "Tableau", "Pandas"].map((tech) => (
                      <Badge
                        key={tech}
                        className="tech-stack bg-github-dark text-github-text-secondary border-github-border text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="text-xs text-github-text-secondary space-y-1">
                <li className="flex items-start">
                  <span className="text-github-green mr-2">✓</span>Multi-dataset
                  merging and transformation
                </li>
                <li className="flex items-start">
                  <span className="text-github-green mr-2">✓</span>Interactive
                  Tableau dashboards
                </li>
                <li className="flex items-start">
                  <span className="text-github-green mr-2">✓</span>Economic
                  correlation analysis
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-github-text mb-8 flex items-center">
          <Settings className="w-8 h-8 mr-3 text-github-blue" />
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Languages */}
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold text-github-text mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-github-blue" />
                Languages
              </h3>
              <div className="space-y-2">
                {["Python", "Java", "HTML", "CSS", "JavaScript", "SQL"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="tech-stack text-sm bg-github-dark px-3 py-2 rounded border border-github-border text-github-text-secondary"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Frameworks */}
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold text-github-text mb-4 flex items-center">
                <Layers className="w-5 h-5 mr-2 text-github-blue" />
                Frameworks
              </h3>
              <div className="space-y-2">
                {["JavaFX", "JUnit", "Node.JS", "Agile", "Scrum"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="tech-stack text-sm bg-github-dark px-3 py-2 rounded border border-github-border text-github-text-secondary"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Developer Tools */}
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold text-github-text mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-github-blue" />
                Dev Tools
              </h3>
              <div className="space-y-2">
                {[
                  "VS Code",
                  "Visual Studio",
                  "PyCharm",
                  "IntelliJ",
                  "Git",
                  "VMware",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="tech-stack text-sm bg-github-dark px-3 py-2 rounded border border-github-border text-github-text-secondary"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Databases & Software */}
          <Card className="bg-github-card border-github-border">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold text-github-text mb-4 flex items-center">
                <Database className="w-5 h-5 mr-2 text-github-blue" />
                Databases & Software
              </h3>
              <div className="space-y-2">
                {[
                  "MySQL",
                  "Oracle",
                  "MariaDB",
                  "Tableau",
                  "Power BI",
                  "Jupyter",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="tech-stack text-sm bg-github-dark px-3 py-2 rounded border border-github-border text-github-text-secondary"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
