import { useState, useEffect } from 'react';

const useAppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const appliedJobsFromLocalStorage = localStorage.getItem('appliedJobs');
    if (appliedJobsFromLocalStorage) {
      setAppliedJobs(JSON.parse(appliedJobsFromLocalStorage));
    }
  }, []);

  const applyJob = (job) => {
    const appliedJobsFromLocalStorage = localStorage.getItem('appliedJobs');
    if (appliedJobsFromLocalStorage) {
      const appliedJobs = JSON.parse(appliedJobsFromLocalStorage);
      if (appliedJobs.some((appliedJob) => appliedJob.id === job.id)) {
        // Show toast message here
        return;
      }
      const updatedAppliedJobs = [...appliedJobs, job];
      localStorage.setItem('appliedJobs', JSON.stringify(updatedAppliedJobs));
      setAppliedJobs(updatedAppliedJobs);
    } else {
      localStorage.setItem('appliedJobs', JSON.stringify([job]));
      setAppliedJobs([job]);
    }
  };

  return [appliedJobs, applyJob];
};

export default useAppliedJobs;
