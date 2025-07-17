"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/public/logo.jpg";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      subItems: [
        { name: "About Us", href: "/about" },
        { name: "Our Mission", href: "/mission" },
      ],
    },
    {
      name: "Services",
      subItems: [
        { name: "Trial Class", href: "/services/online-1to1" },
        { name: "1-on-1 Coaching", href: "/services/online-1to1" },
        { name: "Small Group (1-to-2)", href: "/services/online-1to2" },
        { name: "Group Classes", href: "/services/group-class" },
        { name: "In-Person Lessons", href: "/services/offline-class" },
      ],
    },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 bg-gradient-to-r from-[#fccb01] to-[#f6b352] ${scrolled ? "shadow-lg" : "shadow-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center space-x-3 z-50"
          >
            <Image
              src={img1}
              alt="Only Chess Academy"
              width={50}
              height={50}
              className="h-12 w-auto rounded-full border-2 border-white"
            />
            <span className="text-xl font-bold text-gray-800 hidden sm:inline">
              Only Chess Academy
            </span>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative h-full flex items-center">
                  {item.subItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center px-4 py-2 text-gray-800 hover:text-white font-medium transition-all rounded-lg hover:bg-white/20 group">
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4 ml-1 transition-all group-hover:rotate-180" />
                        </motion.div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="bg-white border border-gray-100 shadow-xl rounded-xl mt-2 py-2 min-w-[200px]"
                        align="start"
                        sideOffset={8}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <DropdownMenuItem
                              key={subIndex}
                              className="px-3 py-2 hover:bg-yellow-50 focus:bg-yellow-50"
                              asChild
                            >
                              <Link
                                href={subItem.href}
                                className="w-full text-gray-700 hover:text-yellow-600 flex items-center"
                              >
                                <motion.span
                                  whileHover={{ x: 4 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                  }}
                                  className="flex items-center"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#fccb01] mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                  {subItem.name}
                                </motion.span>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </motion.div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-gray-800 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/20 relative group"
                    >
                      {item.name}
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-0.5 bg-white group-hover:w-[80%] transition-all duration-300"
                        initial={false}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button - Right Side */}
          <div className="hidden md:block flex-shrink-0">
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact">
                <Button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold shadow-lg shadow-yellow-200/50 hover:shadow-yellow-300/50 transition-all">
                  Contact Us
                  <span className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-50">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:bg-white/20 rounded-lg"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm rounded-xl shadow-lg mx-2 mt-2"
            >
              <div className="pb-4 pt-2 space-y-1">
                {navItems.map((item, index) => (
                  <div key={index} className="space-y-1 px-2">
                    {item.subItems ? (
                      <>
                        <button className="w-full flex justify-between items-center px-4 py-3 text-gray-800 font-medium rounded-lg hover:bg-yellow-50/50 transition-colors">
                          <span>{item.name}</span>
                          <ChevronDown className="h-4 w-4 transition-transform" />
                        </button>
                        <div className="pl-4 space-y-1 border-l-2 border-yellow-100 ml-4">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-600 rounded-lg hover:bg-yellow-50/50 hover:text-yellow-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-800 font-medium rounded-lg hover:bg-yellow-50/50 hover:text-yellow-600 transition-colors relative"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                        <motion.span
                          className="absolute bottom-2 left-0 right-0 mx-auto w-0 h-0.5 bg-[#fccb01] group-hover:w-[80%] transition-all duration-300"
                          initial={false}
                        />
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-2 pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-[#fccb01] to-[#f6b352] hover:from-[#f6b352] hover:to-[#fccb01] text-white font-semibold">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
