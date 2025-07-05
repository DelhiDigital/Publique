// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import "./careerBanner.css";

// const CareerBanner = () => {
//   const titleRef = useRef(null);

//   useEffect(() => {
//     const animateByLetter = (elementRef) => {
//       const text = elementRef.current.textContent.trim();
//       const letters = text.split("");
//       elementRef.current.innerHTML = "";

//       letters.forEach((letter) => {
//         const span = document.createElement("span");
//         span.className = "animated-letter";
//         span.textContent = letter === " " ? "\u00A0" : letter; // preserve white space
//         elementRef.current.appendChild(span);
//       });

//       return elementRef.current.querySelectorAll(".animated-letter");
//     };

//     if (titleRef.current) {
//       const titleLetters = animateByLetter(titleRef);

//       gsap.to(titleLetters, {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.2,
//         ease: "power3.out",
//       });
//     }
//   }, []);

//   return (
//     <div className="careerBanner">
//       <div className="careerBanner-overlay">
//         <div className="careerBanner-content">
//           <h1 className="careerBanner-title" ref={titleRef}>
//             Join Our Team
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerBanner;
