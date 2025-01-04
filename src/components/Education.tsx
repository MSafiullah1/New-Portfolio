export default function Education() {
    const educations = [
      {
        period: "2021 - 2025",
        degree: "BS in Computer Science",
        institution: "Lahore University of Management Sciences",
        description: "CGPA: 3.95/4.00",
        courses: "Relevant Coursework: Advanced Topics in ML, Computer Vision, Generative AI, Deep Learning, Applied Probability, Machine Learning, Algorithms, Operating Systems, Data Structures, Artificial Intelligence, Network-Centric Computing, Linear Algebra, Calculus"
      },
      {
        period: "2021 - 2025",
        degree: "Minor in Computational Finance",
        institution: "Lahore University of Management Sciences",
        description: "Minor-GPA: 4.00/4.00",
        courses: "Relevant Coursework: Quantitative Finance, Principles of Finance, Actuarial Science and Insurance, Mathematics of Finance, Microeconomics, Portfolio Management, Financial Derivatives"
      },
      {
        period: "Aug 2017 - Aug 2021",
        degree: "Cambridge Examinations",
        institution: "",
        description: "A-Level Grades: 2A*, 2A | O-Level Grades: 9A*, 1A",
        courses: ""
      }
    ]
  
    return (
      <section id="education" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400">Education</h2>
          <div className="space-y-12">
            {educations.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">{edu.degree}</h3>
                  <span className="text-gray-600 dark:text-gray-400">{edu.period}</span>
                </div>
                <p className="text-lg mb-2">{edu.institution}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>
                {edu.courses && <p className="text-sm text-gray-600 dark:text-gray-400">{edu.courses}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  