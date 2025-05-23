import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ourServices1.css';

gsap.registerPlugin(ScrollTrigger);

const OurServices2 = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const descRef = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const desc2Ref = useRef(null);

  useEffect(() => {
    const prepareLines = (lineRef) => {
      const lineText = lineRef.current.textContent.trim().split(' ');
      lineRef.current.innerHTML = '';

      lineText.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';

        word.split('').forEach((char) => {
          const charSpan = document.createElement('span');
          charSpan.textContent = char;
          charSpan.style.display = 'inline-block';
          charSpan.style.opacity = '0';
          charSpan.style.transform = 'translateY(20px)';
          wordSpan.appendChild(charSpan);
        });

        lineRef.current.appendChild(wordSpan);

        if (index < lineText.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.innerHTML = '&nbsp;';
          lineRef.current.appendChild(spaceSpan);
        }
      });
    };

    prepareLines(line1Ref);
    prepareLines(line2Ref);
    prepareLines(line3Ref);
    prepareLines(line4Ref);

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ourServices2__container",
        start: "top center",
        once: true, // Only animate once on scroll up
        toggleActions: "play none none none"
      }
    });

    tl1.to(line1Ref.current.querySelectorAll('span'), {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.03,
      ease: "back.out(1.7)"
    })
    .to(line2Ref.current.querySelectorAll('span'), {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.03,
      ease: "back.out(1.7)"
    }, "-=1")
    .fromTo(descRef.current, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=1");

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ourServices2__container-second",
        start: "top center",
        once: true,
        toggleActions: "play none none none"
      }
    });

    tl2.to(line3Ref.current.querySelectorAll('span'), {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.03,
      ease: "back.out(1.7)"
    })
    .to(line4Ref.current.querySelectorAll('span'), {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.01,
      ease: "back.out(1.7)"
    }, "-=1")
    .fromTo(desc2Ref.current, {
      opacity: 0,
      y: 30,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=1");

    // return () => {
    //   tl1.kill();
    //   tl2.kill();
    // };
  }, []);

  return (
    <>
      <section className="ourServices2__container">
        <div className="ourServices2__content">
          <h2 className="ourServices2__title">
            <span className="ourServices2__title-line" ref={line1Ref}>Publiqua Public Relation</span>
            <span className="ourServices2__title-line" ref={line2Ref}>For Tomorrow</span>
          </h2>
          <p className="ourServices2__description" ref={descRef}>
            As a premier <strong>comprehensive marketing communications powerhouse</strong>, we specialise in 
            delivering <strong>bold, tailored solutions</strong> that position your brand <strong>ahead of the curve</strong>. 
            With a proven track record of <strong>shaping industry leaders</strong> and turning <strong>challenges into opportunities</strong>, 
            we partner with <strong>ambitious brands</strong>, <strong>company leaders</strong> and founders to transform ideas into <strong>actionable outcomes</strong>. 
            We go beyond the ordinary to ensure your brand isn’t just <strong>noticed</strong>—it’s <strong>unforgettable</strong>.
          </p>
        </div>
        <div className="ourServices2__image" style={{ '--custom-img-height': '380px' }}>
          <img 
            src="/assets/servicehome1.jpg" 
            alt="Innovative Digital Solutions" 
          />
        </div>
      </section>

      <section className="ourServices2__container ourServices2__container-second">
        <div className="ourServices2__image" style={{ '--custom-img-height': '380px' }}>
          <img 
            src="/assets/servicehome2.jpg" 
            alt="Digital Excellence Redefined" 
          />
        </div>
        <div className="ourServices2__content">
          <h2 className="ourServices2__title">
            <span className="ourServices2__title-line" ref={line3Ref}>Digital Excellence</span>
            <span className="ourServices2__title-line" ref={line4Ref}>Redefined</span>
          </h2>
          <br />
          <p className="ourServices2__description" ref={desc2Ref}>
            We transform businesses through <strong>cutting-edge digital solutions</strong>. Our expertise 
            in <strong>emerging technologies</strong> and <strong>strategic innovation</strong> helps organizations stay <strong>ahead</strong> 
            in today's rapidly evolving <strong>digital landscape</strong>.
          </p>
        </div>
      </section>
    </>
  );
};

export default OurServices2;
