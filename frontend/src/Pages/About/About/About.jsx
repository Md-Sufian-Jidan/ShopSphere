import AboutCTA from '../AboutCTA/AboutCTA';
import AboutHero from '../AboutHero/AboutHero';
import JourneyTimeline from '../JourneyTimeline/JourneyTimeline';
import MissionVision from '../MissionVission/MissionVission';
import OurValues from '../OurValues/OurValues';
import TeamSection from '../TeamSection/TeamSection';

const About = () => {
    return (
        <div>
            <AboutHero />
            <MissionVision />
            <OurValues />
            <JourneyTimeline />
            <TeamSection />
            <AboutCTA />
        </div>
    );
};

export default About;