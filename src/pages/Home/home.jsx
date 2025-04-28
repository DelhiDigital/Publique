// import ConnectWithUs from "./ConnectWithUs/connectwithUs";
import HeroSection from "./HeroSection/heroSection";
import ServicesSectionWithIcons from "./ServicesSectionwithIcons/ServicesSectionWithIcons";
import OurServices1 from "./OurServices/ourServices1";
import StatisticsSection from "./StatisticsSection/StatisticsSection";
import TrustedPartnerSection  from "./PartnarSection/trustedPartnarSection.jsx";
import CaseStudy from "./CaseStudy/caseStudy.jsx";
import SectorsSection from "./SectorsSection/SectorsSection.jsx";


function Home () {

    return(
        <>
            <HeroSection />
            <ServicesSectionWithIcons />
            <CaseStudy />
            <OurServices1 />
            <SectorsSection />
            <StatisticsSection />
            <TrustedPartnerSection />
            {/* <ConnectWithUs /> */}
        </>
    )
}

export default Home;