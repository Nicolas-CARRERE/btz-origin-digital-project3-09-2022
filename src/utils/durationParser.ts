const durationParser = (duration: string) => {
  return parseInt(duration.replace(",", "."));
};

export default durationParser;
