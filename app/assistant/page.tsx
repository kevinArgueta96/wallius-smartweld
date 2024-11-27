'use client'

import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Radio, RadioGroup, Slider, Progress } from '@nextui-org/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const machines = [
  { label: "SMARTWeld Pro 2000", value: "sw-pro-2000" },
  { label: "SMARTWeld Lite 1000", value: "sw-lite-1000" },
  { label: "SMARTWeld Ultra 3000", value: "sw-ultra-3000" },
]

const materials = [
  { label: "Steel", value: "steel" },
  { label: "Aluminum", value: "aluminum" },
  { label: "Stainless Steel", value: "stainless-steel" },
]

export default function WeldingWizard() {
  const [step, setStep] = useState(1)
  const [selectedMachine, setSelectedMachine] = useState(new Set([]))
  const [selectedMaterial, setSelectedMaterial] = useState("steel")
  const [thickness, setThickness] = useState(5)
  
  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Select Machine</h2>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="w-full justify-between">
                  {selectedMachine.size > 0 ? machines.find(machine => machine.value === Array.from(selectedMachine)[0])?.label : "Select a machine"}
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="Select machine"
                selectionMode="single"
                selectedKeys={selectedMachine}
                onSelectionChange={setSelectedMachine}
              >
                {machines.map((machine) => (
                  <DropdownItem key={machine.value}>{machine.label}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Select Material</h2>
            <RadioGroup value={selectedMaterial} onValueChange={setSelectedMaterial}>
              {materials.map((material) => (
                <Radio key={material.value} value={material.value}>
                  {material.label}
                </Radio>
              ))}
            </RadioGroup>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Material Thickness</h2>
            <Slider 
              label="Thickness (mm)" 
              step={0.5}
              maxValue={20} 
              minValue={0.5} 
              value={thickness}
              onChange={setThickness}
              className="max-w-md"
            />
            <p>Selected thickness: {thickness} mm</p>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Welding Parameters</h2>
            <div className="space-y-2">
              <p><strong>Recommended wire size:</strong> 1.2 mm</p>
              <p><strong>Feed speed:</strong> 5.5 m/min</p>
              <p><strong>Amperage:</strong> 180 A</p>
            </div>
            <Button color="primary" className="w-full">
              Start Welding
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4">
      <Card className="max-w-2xl mx-auto">
        <CardBody className="p-6">
          <h1 className="text-3xl font-bold mb-6">Welding Wizard</h1>
          <Progress value={progress} className="mb-6" />
          {renderStepContent()}
        </CardBody>
        <CardFooter className="justify-between">
          <Button
            isIconOnly
            variant="bordered"
            onPress={handlePrevious}
            isDisabled={step === 1}
          >
            <ChevronLeft />
          </Button>
          <Button
            isIconOnly
            variant="bordered"
            onPress={handleNext}
            isDisabled={step === totalSteps}
          >
            <ChevronRight />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}