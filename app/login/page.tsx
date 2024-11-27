'use client'

import React from 'react'
import { Card, CardBody, Tabs, Tab, Input, Checkbox, Button, Link } from '@nextui-org/react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export default function LoginRegistration() {
  const [isVisible, setIsVisible] = React.useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardBody className="overflow-hidden">
          <div className="text-center mb-8">
            <div className="bg-blue-600 text-white py-4 px-6 rounded-lg mb-4 mx-auto max-w-[200px]">
              <h2 className="text-xl font-bold">Wallius SMARTWeld</h2>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome to SMARTWeld</h1>
          </div>
          
          <Tabs fullWidth size="lg">
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  variant="bordered"
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeOffIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  variant="bordered"
                />
                <div className="flex justify-between items-center">
                  <Checkbox>Remember me</Checkbox>
                  <Link href="#" size="sm">Forgot password?</Link>
                </div>
                <Button color="primary" size="lg" className="w-full mt-4">
                  Login
                </Button>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign Up">
              <form className="flex flex-col gap-4">
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  variant="bordered"
                />
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  variant="bordered"
                />
                <Input
                  label="Password"
                  placeholder="Create a password"
                  type="password"
                  variant="bordered"
                />
                <Input
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  type="password"
                  variant="bordered"
                />
                <Button color="primary" size="lg" className="w-full mt-4">
                  Sign Up
                </Button>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
      <footer className="mt-8 text-center text-sm text-gray-600">
        By using our service, you agree to our{' '}
        <Link href="#" size="sm" className="text-blue-600">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="#" size="sm" className="text-blue-600">
          Privacy Policy
        </Link>
      </footer>
    </div>
  )
}