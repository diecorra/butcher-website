export const changeNav = (entries: any, observer: any) => {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      console.log('INTERSECATO');
    }
  });
};
