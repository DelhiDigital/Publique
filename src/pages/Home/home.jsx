// import ConnectWithUs from "./ConnectWithUs/connectwithUs";
// import HeroSection from "./HeroSection/heroSection";
import ExpertiseSection from "./ExpertiesSection/ExpertiesSection.jsx";
// import ServicesSectionWithIcons from "./ServicesSectionwithIcons/ServicesSectionWithIcons";
// import OurServices1 from "./OurServices/ourServices1";
// import StatisticsSection from "./StatisticsSection/StatisticsSection";
// import TrustedPartnerSection  from "./PartnarSection/trustedPartnarSection.jsx";
import CaseStudy from "./CaseStudy/caseStudy.jsx";
import SectorsSection from "./SectorsSection/SectorsSection.jsx";
import ConnectNowSection from "./Connectnowsection/connectnowsection.jsx";
import HomeBanner from "./HomeBanner/homebanner.jsx";


function Home () {

    return(
        <>
            {/* <HeroSection /> */}
            <HomeBanner />
            {/* <ServicesSectionWithIcons /> */}
            <ExpertiseSection />
            {/* <OurServices1 /> */}
            <SectorsSection />
            <CaseStudy />
            <ConnectNowSection />
            {/* <StatisticsSection />
            <TrustedPartnerSection /> */}
            {/* <ConnectWithUs /> */}
        </>
    )
}

export default Home;