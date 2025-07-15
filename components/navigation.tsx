"use client"

import { useState } from "react"
import Image from "next/image"
import img1 from "@/public/logo.jpg"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg border-b-2 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src={img1} alt="Only Chess Academy" width={50} height={50} className="h-12 w-auto" />
            <span className="text-xl font-bold text-navy-900">Only Chess Academy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-navy-900 hover:text-yellow-500 font-medium transition-colors">
              Home
            </Link>

            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-navy-900 hover:text-yellow-500 font-medium transition-colors">
                <span>About Us</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-yellow-400">
                <DropdownMenuItem>
                  <Link href="/about" className="w-full">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/mission" className="w-full">
                    Our Mission
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Our Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-navy-900 hover:text-yellow-500 font-medium transition-colors">
                <span>Our Services</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-yellow-400">
                <DropdownMenuItem>
                  <Link href="/services/online-1to1" className="w-full">
                    Trail Class
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/online-1to1" className="w-full">
                    Online 1 to 1 Chess
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/online-1to2" className="w-full">
                    Online 1 to 2 Chess
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/group-class" className="w-full">
                    Online Group Class
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/offline-class" className="w-full">
                    Offline Class
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/courses" className="text-navy-900 hover:text-yellow-500 font-medium transition-colors">
              Our Courses
            </Link>
            <Link href="/blog" className="text-navy-900 hover:text-yellow-500 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/gallery" className="text-navy-900 hover:text-yellow-500 font-medium transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-navy-900 hover:text-yellow-500 font-medium transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-yellow-400">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-navy-900 hover:text-yellow-500 font-medium">
                Home
              </Link>
              <div className="space-y-2">
                <span className="text-navy-900 font-medium">About Us</span>
                <div className="pl-4 space-y-2">
                  <Link href="/about" className="block text-gray-600 hover:text-yellow-500">
                    About Us
                  </Link>
                  <Link href="/mission" className="block text-gray-600 hover:text-yellow-500">
                    Our Mission
                  </Link>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-navy-900 font-medium">Our Services</span>
                <div className="pl-4 space-y-2">
                  <Link href="/services/online-1to1" className="block text-gray-600 hover:text-yellow-500">
                    Online 1 to 1 Chess
                  </Link>
                  <Link href="/services/online-1to2" className="block text-gray-600 hover:text-yellow-500">
                    Online 1 to 2 Chess
                  </Link>
                  <Link href="/services/group-class" className="block text-gray-600 hover:text-yellow-500">
                    Online Group Class
                  </Link>
                  <Link href="/services/offline-class" className="block text-gray-600 hover:text-yellow-500">
                    Offline Class
                  </Link>
                </div>
              </div>
              <Link href="/courses" className="text-navy-900 hover:text-yellow-500 font-medium">
                Our Courses
              </Link>
              <Link href="/blog" className="text-navy-900 hover:text-yellow-500 font-medium">
                Blog
              </Link>
              <Link href="/gallery" className="text-navy-900 hover:text-yellow-500 font-medium">
                Gallery
              </Link>
              <Link href="/contact" className="text-navy-900 hover:text-yellow-500 font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
