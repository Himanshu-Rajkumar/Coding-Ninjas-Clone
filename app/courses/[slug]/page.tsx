import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface CourseData {
  [key: string]: {
    title: string
    description: string
    duration: string
    level: string
    price: string
    curriculum: string[]
    features: string[]
  }
}

const courseData: CourseData = {
  "data-structures-algorithms": {
    title: "Data Structures & Algorithms",
    description:
      "Master the fundamentals of DSA and ace your coding interviews. This comprehensive course covers all the essential data structures and algorithms you need to know to excel in technical interviews and become a better programmer.",
    duration: "4 months",
    level: "Beginner to Advanced",
    price: "₹15,999",
    curriculum: [
      "Introduction to Programming",
      "Time & Space Complexity Analysis",
      "Arrays & Strings",
      "Searching & Sorting Algorithms",
      "Linked Lists",
      "Stacks & Queues",
      "Trees & Binary Search Trees",
      "Heaps & Priority Queues",
      "Graphs & Graph Algorithms",
      "Dynamic Programming",
      "Interview Preparation",
    ],
    features: [
      "100+ Hours of Video Content",
      "300+ Coding Problems",
      "Live Doubt Resolution",
      "Mock Interviews",
      "Placement Assistance",
      "Certificate of Completion",
    ],
  },
  "full-stack-web-development": {
    title: "Full Stack Web Development",
    description:
      "Become a full stack developer with MERN stack. Learn to build complete web applications from scratch using MongoDB, Express.js, React, and Node.js. This course covers both frontend and backend development.",
    duration: "6 months",
    level: "Intermediate",
    price: "₹19,999",
    curriculum: [
      "HTML, CSS & JavaScript Fundamentals",
      "Responsive Web Design",
      "React.js & Redux",
      "Node.js & Express.js",
      "MongoDB & Mongoose",
      "RESTful API Development",
      "Authentication & Authorization",
      "Deployment & DevOps Basics",
      "Real-world Project Development",
      "Portfolio Building",
    ],
    features: [
      "120+ Hours of Video Content",
      "10+ Real-world Projects",
      "Live Doubt Resolution",
      "Code Reviews",
      "Placement Assistance",
      "Certificate of Completion",
    ],
  },
  "machine-learning": {
    title: "Machine Learning",
    description:
      "Learn ML concepts and implement real-world projects. This course covers the theoretical foundations of machine learning as well as practical implementation using Python and popular libraries like TensorFlow and PyTorch.",
    duration: "5 months",
    level: "Advanced",
    price: "₹21,999",
    curriculum: [
      "Python for Data Science",
      "Mathematics for Machine Learning",
      "Data Preprocessing & Visualization",
      "Supervised Learning Algorithms",
      "Unsupervised Learning Algorithms",
      "Deep Learning Fundamentals",
      "Neural Networks & CNNs",
      "Natural Language Processing",
      "Reinforcement Learning",
      "ML Model Deployment",
      "Capstone Project",
    ],
    features: [
      "110+ Hours of Video Content",
      "8+ Industry Projects",
      "Live Doubt Resolution",
      "GPU-enabled Notebooks",
      "Placement Assistance",
      "Certificate of Completion",
    ],
  },
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courseData[params.slug] || {
    title: "Course Not Found",
    description: "The requested course could not be found.",
    duration: "",
    level: "",
    price: "",
    curriculum: [],
    features: [],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-600 mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-gray-100 px-4 py-2 rounded-md">
                  <span className="text-sm text-gray-500">Duration</span>
                  <p className="font-medium">{course.duration}</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-md">
                  <span className="text-sm text-gray-500">Level</span>
                  <p className="font-medium">{course.level}</p>
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-md">
                  <span className="text-sm text-gray-500">Price</span>
                  <p className="font-medium">{course.price}</p>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4">Curriculum</h2>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                {course.curriculum.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-1">
              <div className="bg-white border rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Course Features</h3>
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 mb-3">Enroll Now</Button>

                <Button variant="outline" className="w-full">
                  Download Syllabus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
