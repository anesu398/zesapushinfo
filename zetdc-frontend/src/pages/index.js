// src/pages/index.js
import ThreeDMap from '../components/ThreeDMap';
import ARViewer from '../components/ARViewer';
import PersonalizationEngine from '../components/PersonalizationEngine';
import VoiceControl from '../components/VoiceControl';
import HolographicDisplay from '../components/HolographicDisplay';
import IoTIntegration from '../components/IoTIntegration';
import BlockchainIntegration from '../components/BlockchainIntegration';
import HyperRealisticVisuals from '../components/HyperRealisticVisuals';
import Sustainability from '../components/Sustainability';
import Security from '../components/Security';
import AIGeneratedContent from '../components/AIGeneratedContent';
import Accessibility from '../components/Accessibility';
import ResponsiveDesign from '../components/ResponsiveDesign';

const user = {
  preferences: [/* User preference data */]
};

const Home = () => {
  return (
    <div>
      <ThreeDMap />
      <ARViewer />
      <PersonalizationEngine user={user} />
      <VoiceControl />
      <HolographicDisplay />
      <IoTIntegration />
      <BlockchainIntegration />
      <HyperRealisticVisuals />
      <Sustainability />
      <Security />
      <AIGeneratedContent />
      <Accessibility />
      <ResponsiveDesign />
    </div>
  );
};

export default Home;
