export function fancyDate(value) {
  if (!value) {
    return '';
  }
  try {
    const options = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    };
    const d = new Date(value.toString());
    if (value.length > 10) {
      return `${d.toLocaleDateString(undefined, options)} at ${d.toLocaleTimeString()}`;
    }
    return d.toLocaleDateString(undefined, options);
  } catch (error) {
    return value;
  }
}
