import Image from "next/image"

export default function CompanyShowcase() {
  // Array of tech company logos with their names
  const companies = [
    {
      name: "Google",
      imageUrl: "/placeholder.svg?height=64&width=128&text=Google",
    },
    {
      name: "Microsoft",
      imageUrl: "/placeholder.svg?height=64&width=128&text=Microsoft",
    },
    {
      name: "Amazon",
      imageUrl: "/placeholder.svg?height=64&width=128&text=Amazon",
    },
    {
      name: "Meta",
      imageUrl: "/placeholder.svg?height=64&width=128&text=Meta",
    },
    {
      name: "Apple",
      imageUrl: "/placeholder.svg?height=64&width=128&text=Apple",
    },
    {
      name: "Netflix",
      imageUrl: "/placeholder.svg?height=64&width=128&text=Netflix",
    },
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Our students work at top tech companies</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="h-16 w-32 relative flex items-center justify-center">
                <Image
                  src={company.imageUrl || "/placeholder.svg"}
                  alt={company.name}
                  width={128}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Added image gallery below the company logos */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Coding+Workshop"
                alt="Coding Workshop"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-medium text-lg">Coding Workshop at Google</h4>
                <p className="text-gray-600 text-sm">Our students participating in an exclusive workshop</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Hackathon"
                alt="Hackathon"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-medium text-lg">Annual Hackathon Winners</h4>
                <p className="text-gray-600 text-sm">Students who won the prestigious tech competition</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/placeholder.svg?height=200&width=400&text=Placement+Day"
                alt="Placement Day"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-medium text-lg">Placement Day Celebration</h4>
                <p className="text-gray-600 text-sm">Students celebrating their job offers from top companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
