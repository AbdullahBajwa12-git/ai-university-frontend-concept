import { Hero } from '../sections/home/Hero';
import { Preview } from '../sections/home/Preview';
import { RecommendationExperience } from '../sections/home/RecommendationExperience';
import { Destinations } from '../sections/home/Destinations';
import { ResponsibleGuidance } from '../sections/home/ResponsibleGuidance';
import { StudentJourney } from '../sections/home/StudentJourney';
import { FinalCTA } from '../sections/home/FinalCTA';

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Preview />
      <RecommendationExperience />
      <Destinations />
      <ResponsibleGuidance />
      <StudentJourney />
      <FinalCTA />
    </div>
  );
};

export default HomePage;
