
const scrollOffset = 100;
 
const scrollElement2 = document.querySelector(".mockupSmall3_inner");
 
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  scrollElement2.classList.add('visible');
}
 
const hideScrollElement = () => {
  scrollElement2.classList.remove('visible');
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement2, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})
