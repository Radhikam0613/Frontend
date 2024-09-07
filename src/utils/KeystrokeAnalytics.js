export const calculateMetrics = (pressTime, releaseTime, lastPressTime, lastReleaseTime) => {
      const holdTime = releaseTime - pressTime;
      const releasePressTime = lastPressTime ? pressTime - lastReleaseTime : null;
      const pressPressTime = lastPressTime ? pressTime - lastPressTime : null;
      const releaseReleaseTime = lastReleaseTime ? releaseTime - lastReleaseTime : null;
    
      return { holdTime, releasePressTime, pressPressTime, releaseReleaseTime };
    };