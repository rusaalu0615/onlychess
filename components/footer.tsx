'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import img1 from '@/public/logo.jpg'

export default function Footer() {
  return (
    <footer className="text-navy-900 px-6 md:px-16 py-12 bg-[conic-gradient(at_top_left,_#fcb900,_#fff3b0,_#fcb900,_#fff8d0,_#fcb900)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image src={img1} alt="Only Chess Academy" width={50} height={50} className="h-12 w-auto rounded-full" />
            <h2 className="text-2xl font-bold text-orange-700">Only Chess Academy</h2>
          </div>
          <p className="text-sm text-gray-700">
            Empowering young minds through strategy and discipline. More than just a game — it’s a way of life.
          </p>
          <div className="flex space-x-4 mt-4 text-orange-600">
            <Link href="https://facebook.com" target="_blank"><Facebook className="hover:text-orange-800 transition" /></Link>
            <Link href="https://instagram.com" target="_blank"><Instagram className="hover:text-orange-800 transition" /></Link>
            <Link href="https://linkedin.com" target="_blank"><Linkedin className="hover:text-orange-800 transition" /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-700 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-orange-600">About Us</Link></li>
            <li><Link href="/courses" className="hover:text-orange-600">Our Courses</Link></li>
            <li><Link href="/contact" className="hover:text-orange-600">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-orange-600">Blog</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-orange-700 mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><Link href="/services/online-1to1" className="hover:text-orange-600">Online 1 to 1 Chess</Link></li>
            <li><Link href="/services/online-1to2" className="hover:text-orange-600">Online 1 to 2 Chess</Link></li>
            <li><Link href="/services/group-class" className="hover:text-orange-600">Group Classes</Link></li>
            <li><Link href="/services/offline-class" className="hover:text-orange-600">Offline Classes</Link></li>
            <li><Link href="/services/trail-class" className="hover:text-orange-600">Trial Class</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-orange-700 mb-3">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-gray-800">
            <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@onlychessacademy.com</li>
            <li>123 Strategy Lane, Chess City, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-yellow-300 mt-10 pt-4 text-center text-sm text-gray-700">
        © {new Date().getFullYear()} Only Chess Academy. All rights reserved.
      </div>
    </footer>
  )
}
