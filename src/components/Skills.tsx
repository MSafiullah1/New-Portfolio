export default function Skills() {
    const skills = [
      { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL", "Haskell", "HTML/CSS"] },
      { category: "Developer Tools", items: ["Git", "Docker", "Valgrind", "Google Colab", "Kaggle", "VS Code"] },
      { category: "Libraries & Frameworks", items: ["PyTorch", "TensorFlow", "LangChain", "Hugging Face", "Pandas", "NumPy", "Matplotlib", "Sci-kit Learn", "StreamLit"] }
    ]
  
    return (
      <section id="skills" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-xl p-6">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">{skillSet.category}</h3>
                <ul className="list-disc list-inside">
                  {skillSet.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-800 dark:text-gray-200">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  