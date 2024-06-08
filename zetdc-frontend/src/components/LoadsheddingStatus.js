import GlassCard from './GlassCard';

const LoadsheddingStatus = ({ status }) => {
  return (
    <GlassCard>
      <h3>{status.suburb}</h3>
      <p>Status: {status.status}</p>
      <p>Stage: {status.stage}</p>
      <p>Start Time: {new Date(status.startTime).toLocaleString()}</p>
      <p>End Time: {new Date(status.endTime).toLocaleString()}</p>
    </GlassCard>
  );
};

export default LoadsheddingStatus;
