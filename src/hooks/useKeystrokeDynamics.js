import { useContext, useCallback } from 'react';
import { KeystrokeDynamicsContext } from '../context/KeystrokeDynamicsContext';
import { calculateMetrics } from '../utils/keystrokeAnalytics';

export const useKeystrokeDynamics = () => {
  const { keystrokeData, setKeystrokeData } = useContext(KeystrokeDynamicsContext);

  const handleKeyDown = useCallback((key) => {
    const pressTime = performance.now();
    setKeystrokeData(prevData => ({
      ...prevData,
      [key]: { ...prevData[key], lastPressTime: pressTime },
    }));
  }, [setKeystrokeData]);

  const handleKeyUp = useCallback((key) => {
    const releaseTime = performance.now();
    setKeystrokeData(prevData => {
      const { lastPressTime, lastReleaseTime } = prevData[key] || {};
      const metrics = calculateMetrics(lastPressTime, releaseTime, prevData.lastPressTime, prevData.lastReleaseTime);
      return {
        ...prevData,
        [key]: { ...prevData[key], lastReleaseTime: releaseTime, metrics },
        lastPressTime: lastPressTime,
        lastReleaseTime: releaseTime,
      };
    });
  }, [setKeystrokeData]);

  const collectData = useCallback(() => {
    return Object.entries(keystrokeData)
      .filter(([key]) => key !== 'lastPressTime' && key !== 'lastReleaseTime')
      .map(([key, data]) => ({
        key,
        ...data.metrics,
      }));
  }, [keystrokeData]);

  return { handleKeyDown, handleKeyUp, collectData };
};