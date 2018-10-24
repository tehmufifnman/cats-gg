
export default (...keywords) => {
  const query = keywords.join(',');
  return () =>
    fetch(`https://source.unsplash.com/featured/?${query}`)
      .then(res => res.url);
}
