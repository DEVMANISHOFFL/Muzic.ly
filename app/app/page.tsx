'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Radio, Headphones, Star, Zap, Globe, Shield, Check } from 'lucide-react'
// import { Navbar } from '../components/Navbar'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import { Appbar } from '../components/Appbar'

export default function LandingPage() {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll as EventListener);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
     
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 dark:from-purple-900 dark:via-purple-800 dark:to-blue-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Let Your Fans Choose the Beat
                </h1>
                <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl">
                  The first music streaming platform where fans control the playlist.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-x-4"
              >
                <Button className="bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700 dark:bg-purple-200 dark:text-purple-900 dark:hover:bg-purple-300 transition-colors">
                  Get Started
                </Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-purple-600 dark:hover:bg-purple-200 dark:hover:text-purple-900 transition-colors">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-6 bg-purple-50 dark:bg-gray-700 rounded-lg shadow-lg"
              >
                <Users className="h-12 w-12 mb-4 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Connect with Fans</h3>
                <p className="text-gray-600 dark:text-gray-400">Build a community around your music and engage with your audience directly.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center p-6 bg-blue-50 dark:bg-gray-700 rounded-lg shadow-lg"
              >
                <Radio className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">Fan-Curated Playlists</h3>
                <p className="text-gray-600 dark:text-gray-400">Let your fans vote on songs and create the perfect playlist for your stream.</p>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Headphones, title: "High-Quality Audio", description: "Enjoy crystal-clear sound with our advanced audio technology." },
                { icon: Star, title: "Exclusive Content", description: "Access behind-the-scenes content and live performances from your favorite artists." },
                { icon: Zap, title: "Real-time Interaction", description: "Chat with other fans and interact with artists during live streams." },
                { icon: Globe, title: "Global Reach", description: "Discover new music from around the world and expand your musical horizons." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
                >
                  <feature.icon className="h-10 w-10 mb-4 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                  For Artists
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-green-500 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Protect your music with advanced copyright tools</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-green-500 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Grow your fanbase with interactive features</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-green-500 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Monetize your streams with built-in tipping and subscriptions</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                  For Listeners
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Radio className="h-6 w-6 text-green-500 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Influence the music played on your favorite streams</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="h-6 w-6 text-green-500 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Earn rewards for active participation in the community</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Headphones className="h-6 w-6 text-green-500 dark:text-green-400" />
                    <span className="text-gray-700 dark:text-gray-300">Enjoy ad-free, high-quality audio streaming</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Basic", price: "$9.99", features: ["Ad-free listening", "High-quality audio", "Offline mode"] },
                { title: "Pro", price: "$14.99", features: ["All Basic features", "Exclusive content access", "Priority customer support"] },
                { title: "Premium", price: "$19.99", features: ["All Pro features", "Artist collaboration tools", "Custom playlist curation"] }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">{plan.title}</h3>
                  <p className="text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">{plan.price}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-5 w-5 text-green-500" /><Check className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition-colors">
                    Choose Plan
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-800 dark:from-purple-400 dark:to-blue-400">
                  Ready to Transform Your Streams?
                </h2>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our platform today and start creating unforgettable music experiences with your fans.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-sm space-y-2"
              >
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 transition-colors">
                    Sign Up
                  </Button>
                </form> 
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full px-4 md:px-6 border-t bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm">
        <div className="container flex flex-col gap-2 sm:flex-row items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Muzics Inc. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

