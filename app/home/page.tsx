'use client'

import React from 'react'
import { Card, CardBody, CardFooter, Button, Avatar, Badge, Tooltip } from '@nextui-org/react'
import { Settings, Zap, FileText, Home, ShoppingCart, HelpCircle, User, Bell } from 'lucide-react'

export default function HomeDashboard() {
  const username = "John Doe" // Replace with actual user data
  const machines = [
    { id: 1, name: "SMARTWeld Pro", model: "SW-2000", image: "/placeholder.svg?height=100&width=100" },
    { id: 2, name: "SMARTWeld Lite", model: "SW-1000", image: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Avatar src="/placeholder.svg?height=40&width=40" size="sm" />
          <h1 className="text-xl font-bold">Welcome, {username}!</h1>
        </div>
        <Tooltip content="Settings">
          <Button isIconOnly variant="light" aria-label="Settings">
            <Settings className="text-white" />
          </Button>
        </Tooltip>
      </header>
            {/* Fetch Data Button */}
            <div className="p-4 flex justify-center">
        <Button
          color="secondary"
          onClick={() => {
        fetch('/api/hello')
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.error('Error fetching data:', error));
          }}
        >
          Fetch Data
        </Button>
      </div>

      {/* Main Dashboard Area */}
      <main className="p-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* My Machines */}
          <Card className="col-span-1 md:col-span-2">
            <CardBody>
              <h2 className="text-2xl font-bold mb-4">My Machines</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {machines.map((machine) => (
                  <Card key={machine.id} className="bg-gray-50">
                    <CardBody className="flex flex-row items-center space-x-4">
                      <img src={machine.image} alt={machine.name} className="w-20 h-20 object-cover rounded" />
                      <div>
                        <h3 className="font-bold">{machine.name}</h3>
                        <p className="text-sm text-gray-500">{machine.model}</p>
                      </div>
                    </CardBody>
                    <CardFooter>
                      <Button size="sm" color="primary" variant="flat" fullWidth>
                        Manage
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardBody>
          </Card>

          {/* Welding Wizard */}
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardBody className="flex flex-col items-center justify-center p-8">
              <Zap size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">Welding Wizard</h2>
              <p className="text-center mb-4">Start a new welding project with guided assistance</p>
              <Button color="warning" variant="shadow" size="lg">
                Launch Wizard
              </Button>
            </CardBody>
          </Card>

          {/* Warranty Registration */}
          <Card>
            <CardBody className="flex flex-col items-center justify-center p-8">
              <FileText size={48} className="mb-4 text-blue-600" />
              <h2 className="text-2xl font-bold mb-2">Warranty Registration</h2>
              <p className="text-center mb-4">Register your product warranty</p>
              <Button color="primary" variant="bordered" size="lg">
                Register Now
              </Button>
            </CardBody>
          </Card>
        </div>

        {/* Notifications Panel */}
        <Card className="mb-4">
          <CardBody>
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 p-2 bg-yellow-100 rounded">
                <Bell className="text-yellow-500" />
                <p>Your warranty for SMARTWeld Pro is expiring soon.</p>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-blue-100 rounded">
                <Bell className="text-blue-500" />
                <p>New welding tips available for SMARTWeld Lite.</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </main>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around p-2">
          <Button isIconOnly variant="light" aria-label="Home">
            <Home />
          </Button>
          <Button isIconOnly variant="light" aria-label="Shop">
            <ShoppingCart />
          </Button>
          <Button isIconOnly variant="light" aria-label="Help">
            <HelpCircle />
          </Button>
          <Button isIconOnly variant="light" aria-label="Profile">
            <User />
          </Button>
        </div>
      </footer>
    </div>
  )
}