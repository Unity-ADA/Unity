function FormatToReadableNumber(value: number): string {
  if (value >= 1_000_000_000_000_000_000) {
      const formattedValue = (value / 1_000_000_000_000_000_000).toFixed(2);
      return `${formattedValue}Q`;
  } else if (value >= 1_000_000_000_000) {
      const formattedValue = (value / 1_000_000_000_000).toFixed(2);
      return `${formattedValue}T`;
  } else if (value >= 1_000_000_000) {
      const formattedValue = (value / 1_000_000_000).toFixed(2);
      return `${formattedValue}B`;
  } else if (value >= 1_000_000) {
      const formattedValue = (value / 1_000_000).toFixed(2);
      return `${formattedValue}M`;
  }
  return value.toString();
}

export default FormatToReadableNumber;