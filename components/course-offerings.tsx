"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CourseOfferings() {
  const router = useRouter()

  const courses = [
    {
      slug: "data-structures-algorithms",
      title: "Data Structures & Algorithms",
      description: "Master the fundamentals of DSA and ace your coding interviews",
      duration: "4 months",
      level: "Beginner to Advanced",
    },
    {
      slug: "full-stack-web-development",
      title: "Full Stack Web Development",
      description: "Become a full stack developer with MERN stack",
      duration: "6 months",
      level: "Intermediate",
    },
    {
      slug: "machine-learning",
      title: "Machine Learning",
      description: "Learn ML concepts and implement real-world projects",
      duration: "5 months",
      level: "Advanced",
    },
  ]

  const handleExplore = (slug: string) => {
    router.push(`/courses/${slug}`)
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our Course Offerings</h2>

        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Choose from our industry-relevant courses designed by experts to help you achieve your career goals
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {course.duration}</span>
                  <span>Level: {course.level}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600" onClick={() => handleExplore(course.slug)}>
                  Explore Course
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
