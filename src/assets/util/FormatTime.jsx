export const FormatTime = (originTime) => {
  const currentTime = new Date();
  const writtenTime = new Date(originTime);
  const timeDiff = currentTime.getTime() - writtenTime.getTime();

  if (timeDiff < 24 * 60 * 60 * 1000) {
    const hour = writtenTime.getHours();
    const min = writtenTime.getMinutes();
    if (min < 10) {
      return `${hour}:0${min}`;
    }
    return `${hour}:${min}`;
  } else {
    const daysAgo = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    return `${daysAgo}일전`;
  }
};
