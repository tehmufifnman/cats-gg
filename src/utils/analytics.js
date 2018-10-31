
const SessionId = 'UA-128433075-1';

export const log = (...params) => {
  window.ga(...params);
  console.log('GA Log:', ...params);
};

export const logEvent = ({
 eventCategory,
 eventAction,
 eventLabel,
 eventValue
}) =>
  log('send', 'event', eventCategory, eventAction, eventLabel, eventValue);

export const logPageView = (pageName, ...rest) =>
  log('send', 'pageview', pageName, ...rest);

export const initAnalytics = () => {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  log('create', SessionId, 'auto');

  logPageView('/');
};
