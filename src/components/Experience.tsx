export default function Experience() {
    const experiences = [
      {
        title: "Multi-Agent Path Finding with LLMs",
        period: "Sep 2024 - Present",
        description: [
          "Developed a multi-agent path finding solution for warehouse environments using a fine-tuned GPT-3.5 Turbo model as the controller.",
          "Integrated a feedback loop mechanism to parse predicted paths, identify errors and apply corrective prompts.",
          "Fine-tuned LLM with BFS for single-agent shortest paths; applied Conflict-Based Search (CBS) for multi-agent path finding.",
          "Initial success with single and dual agents, now optimizing path finding across multiple agents."
        ]
      },
      {
        title: "Mitigating Data Heterogeneity in Federated Learning",
        period: "Nov 2024 - Present",
        description: [
          "Investigated latent space alignment techniques to address data heterogeneity in Federated Learning (FL).",
          "Evaluated alignment techniques like KL Divergence, Maximum Mean Discrepancy (MMD), and Wasserstein Distance.",
          "Proposed and implemented two novel methods: Gradient Harmonization Between Losses (FedGHBL) and Adversarial Feature Alignment.",
          "Designed and conducted experiments using the CIFAR-10 dataset with simulated label and quantity skews.",
          "Results demonstrated significant improvements over benchmarks like FedAvg and SCAFFOLD."
        ]
      },
      {
        title: "Research Intern – City At LUMS",
        period: "Sept 2023 – Dec 2023",
        description: [
          "Conducted research to enhance the efficiency of machine learning models, focusing on Vision Transformers (ViTs).",
          "Investigated methods to optimize model performance while reducing computational costs and improving scalability."
        ]
      },
      {
        title: "Research Intern – CSaLT Lab",
        period: "Jan 2024 – May 2024",
        description: [
          "Conducted research on finetuning large language models (LLMs) for specific NLP applications.",
          "Assisted in creating a small, verified medical dataset for finetuning.",
          "Collaborated on evaluating model performance using established metrics.",
          "Contributed to defining a reliable model evaluation system."
        ]
      },
      {
        title: "Brain-Computer Interface Intern",
        period: "Jun 2024 – Jul 2024",
        description: [
          "Completed a 3-week internship focusing on ECG and EEG data analysis, and real-time classification algorithms.",
          "Gained hands-on experience in applied AI/ML algorithms for Brain-Computer Interface (BCI) challenges.",
          "Contributed to cutting-edge research in the rapidly evolving field of BCI."
        ]
      },
      {
        title: "Teaching Assistant – Operating Systems",
        period: "Sep 2024 – Dec 2024",
        description: [
          "Assisted in a core course with approximately 220 students across two sections.",
          "Conducted office hours twice a week to support students with course material and assignments.",
          "Designed, tested, and guided students through complex programming assignments.",
          "Delivered assignment-based tutorials to reinforce key concepts.",
          "Graded course material such as exams and assignments."
        ]
      },
      {
        title: "Peer Advisor at LUMS – SSE",
        period: "Aug 2024 – Present",
        description: [
          "Supported new students in their transition from college to university.",
          "Provided information on university resources, services, and tools.",
          "Assisted in developing time management and study skills."
        ]
      }
    ]
  
    return (
      <section id="experience" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">{exp.title}</h3>
                  <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  