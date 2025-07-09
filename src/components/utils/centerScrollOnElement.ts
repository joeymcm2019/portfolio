export const scrollToCenter = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  const elementCenterY = rect.top + rect.height / 2 + scrollTop;

  const viewportCenterY = window.innerHeight / 2;

  window.scrollTo({
    top: elementCenterY - viewportCenterY,
    behavior: "smooth", // For smooth scrolling
  });
};
