import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './caseStudy.css';

const CaseStudy = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const location = useLocation();
  
  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: 'Case study 1',
      image: '/assets/case1.jpg',
      modalImage: '/assets/case1.jpg',
      modalTitle: 'Elevating Metropolis Healthcare\'s Brand Visibility',
      description: 'Metropolis Healthcare, a prominent diagnostics company in India, partnered with Communicate India to address challenges in brand promotion and media coverage. Facing misconceptions about being an expensive international brand and limited awareness of its test offerings, Metropolis sought to enhance its image and highlight its leadership figures, Ameera Shah and Dr. Sushil Shah.',
      sections: [
        {
          title: 'Strategic Approach for Success',
          content: 'Communicate India devised a comprehensive strategy to enhance Savills India\'s visibility and credibility. This included launching research papers through round table events across major cities, disseminating insightful reports on key sectors, and active participation in industry discussions and panels. Additionally, Communicate India facilitated relationship-building meetings to strengthen Savills India\'s connections within the media and industry.'
        },
        {
          title: 'Outcomes',
          content: 'The collaboration garnered over 500 media clips in a year, averaging 1.5 clips daily, significantly boosting Metropolis Healthcare\'s visibility. With an ROI of 61.90 times, Communicate India\'s strategic communication effectively elevated the brand\'s profile and met its objectives.'
        }
      ]
    },
    {
      id: 2,
      title: 'Case study 2',
      image: '/assets/case2.jpg',
      modalImage: '/assets/case2.jpg',
      modalTitle: 'Strategic Approach for Success',
      description: 'Communicate India devised a comprehensive strategy to enhance Savills India\'s visibility and credibility. This included launching research papers through round table events across major cities, disseminating insightful reports on key sectors, and active participation in industry discussions and panels. Additionally, Communicate India facilitated relationship-building meetings to strengthen Savills India\'s connections within the media and industry.',
      sections: [
        {
          title: 'Outcomes',
          content: 'Through Communicate India\'s strategic initiatives, Savills India effectively communicated its expertise to the media and industry stakeholders. This led to increased brand awareness, top-of-mind recall, and enhanced share of voice within the real estate sector. In a short span, Savills India emerged as a respected authority, solidifying its position as a key player in the Indian real estate landscape.'
        }
      ]
    },
    {
      id: 3,
      title: 'Case study 3',
      image: '/assets/case3.jpg',
      modalImage: '/assets/case3.jpg',
      modalTitle: 'Launching Hershey\'s Brookside in a Competitive Market',
      description: 'Introducing Hershey\'s Brookside into an already saturated chocolate market posed challenges due to late entry and stiff competition from brands like Cadbury Silk Oreo. The absence of media spokespersons and the need for region-specific test market phases further complicated the launch strategy.',
      sections: [
        {
          title: 'Strategic Approach for Success',
          content: 'Communicate India devised a comprehensive strategy to enhance Savills India\'s visibility and credibility. This included launching research papers through round table events across major cities, disseminating insightful reports on key sectors, and active participation in industry discussions and panels. Additionally, Communicate India facilitated relationship-building meetings to strengthen Savills India\'s connections within the media and industry.'
        },
        {
          title: 'Outcomes',
          content: 'Through Communicate India\'s strategic initiatives, Savills India effectively communicated its expertise to the media and industry stakeholders. This led to increased brand awareness, top-of-mind recall, and enhanced share of voice within the real estate sector. In a short span, Savills India emerged as a respected authority, solidifying its position as a key player in the Indian real estate landscape.'
        }
      ]
    },
    {
      id: 4,
      title: 'Case study 4',
      image: '/assets/case4.jpg',
      modalImage: '/assets/case4.jpg',
      modalTitle: 'SOFIT Soya Campaign Results',
      description: 'The SOFIT Soya campaign reached over 2 million consumers across digital platforms, resulting in a 35% increase in brand awareness and a 28% boost in sales during the campaign period. The strategic positioning as a healthy alternative resonated strongly with the target audience.',
      sections: [
        {
          title: 'Strategic Approach for Success',
          content: 'Communicate India devised a comprehensive strategy to enhance SOFIT\'s visibility and credibility. This included launching research papers through round table events across major cities, disseminating insightful reports on key sectors, and active participation in industry discussions and panels.'
        }
      ]
    },
    // {
    //   id: 5,
    //   title: 'Fifth Case Study',
    //   image: '/images/case5.jpg',
    //   modalImage: '/images/case5-modal.jpg',
    //   modalTitle: 'Fifth Case Study Details',
    //   description: 'This campaign delivered exceptional results across all key performance indicators, exceeding client expectations and establishing new benchmarks for the industry.',
    //   sections: [
    //     {
    //       title: 'Strategic Approach for Success',
    //       content: 'Communicate India devised a comprehensive strategy to enhance brand visibility and credibility. This included launching research papers through round table events across major cities, disseminating insightful reports on key sectors, and active participation in industry discussions and panels.'
    //     }
    //   ]
    // }
  ];

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedCase && !event.target.closest('.modal-container') && !event.target.closest('.case-study-item')) {
        setSelectedCase(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCase]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCase]);

  const openModal = (caseStudy) => {
    setSelectedCase(caseStudy);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };


  useEffect(() => {
    if (location.state?.scrollTo === 'case-studies') {
      const section = document.querySelector('.case-studies-container');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="case-studies-section">
      <div className="case-studies-container">
        {caseStudies.map((caseStudy) => (
          <div 
            key={caseStudy.id} 
            className="case-study-item"
            onClick={() => openModal(caseStudy)}
          >
            <img src={caseStudy.image || "/placeholder.svg"} alt={caseStudy.title} />
            <div className="case-study-overlay"></div>
            <div className="case-study-content">
              <h2>{caseStudy.title}</h2>
              <div>
                View Case Study 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCase && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button className="modal-close" onClick={closeModal}>×</button>
            <img 
              src={selectedCase.modalImage || "/placeholder.svg"} 
              alt={selectedCase.title} 
              className="modal-image" 
            />
            <div className="modal-content">
              <h2 className="modal-title">{selectedCase.modalTitle}</h2>
              <p className="modal-description">{selectedCase.description}</p>
              
              {selectedCase.sections && selectedCase.sections.map((section, index) => (
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
  );
};

export default CaseStudy;