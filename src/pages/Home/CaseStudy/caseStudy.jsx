"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import "./CaseStudy.css"

const CaseStudy = () => {
  const [selectedCase, setSelectedCase] = useState(null)
  const location = useLocation()

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Case study 1",
      image:
        "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      position: "top-left",
      modalImage:
        "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      modalTitle: "Elevating Metropolis Healthcare's Brand Visibility",
      description:
        "Metropolis Healthcare, a prominent diagnostics company in India, partnered with Communicate India to address challenges in brand promotion and media coverage. Facing misconceptions about being an expensive international brand and limited awareness of its test offerings, Metropolis sought to enhance its image and highlight its leadership figures, Ameera Shah and Dr. Sushil Shah.",
      sections: [
        {
          title: "Strategic Approach for Success",
          content:
            "Communicate India devised a comprehensive strategy to enhance Metropolis Healthcare's visibility and credibility. This included launching research papers through round table events across major cities, disseminating insightful reports on key sectors, and active participation in industry discussions and panels. Additionally, Communicate India facilitated relationship-building meetings to strengthen Metropolis's connections within the media and industry.",
        },
        {
          title: "Outcomes",
          content:
            "The collaboration garnered over 500 media clips in a year, averaging 1.5 clips daily, significantly boosting Metropolis Healthcare's visibility. With an ROI of 61.90 times, Communicate India's strategic communication effectively elevated the brand's profile and met its objectives.",
        },
      ],
    },
    {
      id: 2,
      title: "Case study 2",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      position: "right",
      modalImage:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      modalTitle: "Strategic Approach for Success",
      description:
        "Communicate India devised a comprehensive strategy to enhance Savills India's visibility and credibility. This included launching research papers through round table events across major cities, disseminating insightful reports on key sectors, and active participation in industry discussions and panels. Additionally, Communicate India facilitated relationship-building meetings to strengthen Savills India's connections within the media and industry.",
      sections: [
        {
          title: "Outcomes",
          content:
            "Through Communicate India's strategic initiatives, Savills India effectively communicated its expertise to the media and industry stakeholders. This led to increased brand awareness, top-of-mind recall, and enhanced share of voice within the real estate sector. In a short span, Savills India emerged as a respected authority, solidifying its position as a key player in the Indian real estate landscape.",
        },
      ],
    },
    {
      id: 3,
      title: "Case study 3",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      position: "bottom-left",
      modalImage:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      modalTitle: "Launching Hershey's Brookside in a Competitive Market",
      description:
        "Introducing Hershey's Brookside into an already saturated chocolate market posed challenges due to late entry and stiff competition from brands like Cadbury Silk Oreo. The absence of media spokespersons and the need for region-specific test market phases further complicated the launch strategy.",
      sections: [
        {
          title: "Strategic Approach for Success",
          content:
            "Communicate India devised a comprehensive strategy to enhance Hershey's market presence. This included targeted media outreach, influencer partnerships, and strategic product placement. The campaign focused on highlighting the unique flavor profile and premium positioning of Brookside chocolates.",
        },
        {
          title: "Outcomes",
          content:
            "The campaign resulted in widespread product awareness and positive reviews across target markets. Media coverage exceeded expectations by 40%, with feature stories in key lifestyle and food publications. Sales targets were met within the first quarter of launch, establishing Brookside as a competitive player in the premium chocolate segment.",
        },
      ],
    },
    {
      id: 4,
      title: "Case study 4",
      position: "bottom-right",
      className: "red-background",
      modalImage:
        "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      modalTitle: "SOFIT Soya Campaign Results",
      description:
        "The SOFIT Soya campaign reached over 2 million consumers across digital platforms, resulting in a 35% increase in brand awareness and a 28% boost in sales during the campaign period. The strategic positioning as a healthy alternative resonated strongly with the target audience.",
      sections: [
        {
          title: "Strategic Approach for Success",
          content:
            "Communicate India devised a comprehensive strategy to enhance SOFIT's visibility and credibility. This included launching research papers through round table events across major cities, disseminating insightful reports on key sectors, and active participation in industry discussions and panels.",
        },
      ],
    },
  ]

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedCase && !event.target.closest(".modal-container") && !event.target.closest(".case-study-item")) {
        setSelectedCase(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [selectedCase])

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedCase])

  const openModal = (caseStudy) => {
    setSelectedCase(caseStudy)
  }

  const closeModal = () => {
    setSelectedCase(null)
  }

  useEffect(() => {
    if (location.state?.scrollTo === "case-studies") {
      const section = document.querySelector(".case-studies-container")
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location])

  return (
    <div className="case-studies-section">
      <div className="case-studies-container">
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className={`case-study-item ${caseStudy.position} ${caseStudy.className || ""}`}
            onClick={() => openModal(caseStudy)}
          >
            {!caseStudy.className && <img src={caseStudy.image || "/placeholder.svg"} alt={caseStudy.title} />}
            <div className="case-study-overlay"></div>
            <div className="case-study-content">
              <h2>{caseStudy.title}</h2>
              <div className="view-case-study">
                View Case Study
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCase && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img src={selectedCase.modalImage || "/placeholder.svg"} alt={selectedCase.title} className="modal-image" />
            <div className="modal-content">
              <h2 className="modal-title">{selectedCase.modalTitle}</h2>
              <p className="modal-description">{selectedCase.description}</p>

              {selectedCase.sections &&
                selectedCase.sections.map((section, index) => (
                  <div key={index} className="modal-section">
                    <h3 className="modal-section-title">{section.title}</h3>
                    <p className="modal-section-content">{section.content}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CaseStudy
