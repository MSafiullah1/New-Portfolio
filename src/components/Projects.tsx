export default function Projects() {
    const projects = [
      {
        title: "Model Compression Techniques for Deep Learning Models",
        period: "Nov 2024",
        description: [
          "Implemented and evaluated pruning, quantization, and knowledge distillation on VGG architectures with CIFAR-100.",
          "Applied unstructured pruning and structured pruning by channel removal based on L2 norms.",
          "Compared Post-Training Quantization (PTQ) and Quantization-Aware Training (QAT) across bit-widths.",
          "Used logit matching, hint-based distillation, and contrastive representation distillation (CRD) for knowledge distillation."
        ],
        link: "#"
      },
      {
        title: "Landmark 3D Reconstruction and App Deployment",
        period: "Nov 2024 - Dec 2024",
        description: [
          "Developed a 3D reconstruction system for landmarks using computer vision techniques.",
          "Implemented SIFT for robust key point detection and FLANN-based KNN matcher for feature matching.",
          "Applied Structure from Motion (SfM) and linear triangulation to generate a sparse 3D point cloud.",
          "Deployed the reconstructed 3D model as an interactive feature in an Android app using Flutter Cube."
        ],
        link: "#"
      },
      {
        title: "Designing a Unit Linked Insurance Product",
        period: "Jun 2024 – Jul 2024",
        description: [
          "Designed a Unit Linked Insurance Product (ULIP) for a hypothetical company, Ascend.",
          "Assumed a 12% expected return rate and developed allocation percentages over time.",
          "Conducted sensitivity analysis showing policyholder satisfaction increases with the earnings rate.",
          "Recommended a revised structure for higher initial allocations to capture market share."
        ],
        link: "#"
      },
      {
        title: "Course Recommendation System Using RAG",
        period: "May 2024",
        description: [
          "Developed a course and instructor recommendation system using a Retrieval-Augmented Generation (RAG) pipeline.",
          "Scraped and preprocessed course and instructor reviews from the university discussion forum.",
          "Utilized vector databases for efficient information retrieval.",
          "Integrated workload and course material feedback for personalized recommendations."
        ],
        link: "#"
      },
      {
        title: "Succession Planning Software Project",
        period: "Jan 2024 – May 2024",
        description: [
          "Developed a machine learning-driven HR management platform in collaboration with Devsinc.",
          "Engineered predictive models to assess employee performance KPIs and identify high-potential candidates.",
          "Implemented role-based access control, two-factor authentication, and data encryption.",
          "Integrated mentor-mentee matching and personalized training recommendations."
        ],
        link: "#"
      }
    ]
  
    return (
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.period}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a href={project.link} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 font-semibold">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  