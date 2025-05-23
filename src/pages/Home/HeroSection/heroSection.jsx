"use client"

import React, { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import "./heroSection.css"

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin)
}

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      prefixColor: "#ff5733",
      title: "Public Relations & Strategic Communications",
      description: "Public Relations is not just a tool—it is the backbone of your brand's identity.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/services/PublicRelations&StrategicCommunications",
    },
    {
      id: 2,
      prefixColor: "#33a1ff",
      title: "Content Creation & Copywriting",
      description: "Content is the beating heart of every brand's story.",
      image:
        "https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/services/ContentCreation&Copywriting",
    },
    {
      id: 3,
      prefixColor: "#28a745",
      title: "Marketing & Advertising",
      description: "At Publiqua, we merge creativity with strategy to create marketing...",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/services/Marketing&Advertising",
    },
    {
      id: 4,
      prefixColor: "#ff33ff",
      title: "Design & Branding",
      description: "Branding is more than just a logo or a tagline — it's the soul of your business...",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/services/Design&Branding",
    },
    {
      id: 5,
      prefixColor: "#ffcc00",
      title: "Influencer & Social Media Strategy",
      description: "Social Media Management We create and curate content that aligns with your brand's voice...",
      image:
        "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/services/Influencer&SocialMediaStrategy",
    },
    {
      id: 6,
      prefixColor: "#6633ff",
      title: "Event Management",
      description: "We get it: events are high stakes. That's why we dive deep into understanding your goals...",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "/services/EventManagement",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRefs = useRef([])
  const slideInterval = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)

  slideRefs.current = slides.map((_, index) => slideRefs.current[index] || React.createRef())

  const animateText = (index) => {
    const slideElement = slideRefs.current[index].current
    const textElement = slideElement.querySelector(".slide-title")
    const paragraphElement = slideElement.querySelector(".slide-description")

    if (textElement) {
      const text = slides[index].title
      textElement.innerHTML = ""

      const wrapper = document.createElement("div")
      wrapper.className = "text-wrapper"
      textElement.appendChild(wrapper)

      text.split("").forEach((char) => {
        const span = document.createElement("span")
        span.textContent = char === " " ? "\u00A0" : char
        span.className = "char"
        wrapper.appendChild(span)
      })

      gsap.fromTo(
        wrapper.querySelectorAll(".char"),
        { opacity: 0, y: 50, color: "#4f9cf9" },
        { opacity: 1, y: 0, color: "#ffffff", stagger: 0.05, duration: 0.8, ease: "power4.out" },
      )
    }

    if (paragraphElement) {
      gsap.fromTo(
        paragraphElement,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power4.out" },
      )
    }
  }

  const nextSlide = () => {
    setIsAnimating(true)
    gsap.to(`.slide-${currentSlide}`, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        setCurrentSlide(newIndex)
        setTimeout(() => {
          animateText(newIndex)
          setIsAnimating(false)
        }, 100)
      },
    })
  }

  const prevSlide = () => {
    setIsAnimating(true)
    gsap.to(`.slide-${currentSlide}`, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        setCurrentSlide(newIndex)
        setTimeout(() => {
          animateText(newIndex)
          setIsAnimating(false)
        }, 100)
      },
    })
  }

  useEffect(() => {
    animateText(currentSlide)
    gsap.fromTo(`.slide-${currentSlide}`, { opacity: 1 }, { opacity: 1, duration: 0.1 })
  }, [currentSlide])

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      if (!isAnimating) nextSlide()
    }, 5000)

    return () => clearInterval(slideInterval.current)
  }, [isAnimating])

  return (
    <div className="hero-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={slideRefs.current[index]}
          className={`slide slide-${index} ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="slide-image" />
          <div className="overlay"></div>

          <div className="content">
            {/* <h2 style={{ color: slide.prefixColor }}>We Provide the</h2> */}
            <h1 className="slide-title"></h1>
            <p className="slide-description" style={{ textAlign: "center" }}>
              {slide.description}
            </p>
            <a href={slide.link} className="read-more-btn">Read More</a>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="nav-arrow prev-arrow">
        ❮
      </button>
      <button onClick={nextSlide} className="nav-arrow next-arrow">
        ❯
      </button>
    </div>
  )
}
