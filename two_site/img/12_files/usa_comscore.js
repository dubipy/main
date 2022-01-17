(function() {
  // check to make sure beacon.js is not already loaded
  if (typeof COMSCORE == 'undefined') {
    let a=document.createElement("script"),
        b=document.getElementsByTagName("script")[0],
        c=document.createElement('noscript');
    a.async=!0;
    a.src=("https:"==document.location.protocol?"https://sb":"http://b")+".scorecardresearch.com/beacon.js";
    b.parentNode.insertBefore(a,b);

    c.innerHTML = '<img src="https://sb.scorecardresearch.com/p?c1=2&amp;c2=6035083&amp;cv=2.0&amp;cj=1">';
    b.parentNode.insertBefore(c,b);
  }
})();

let USA_COMSCORE = {
  clientID: null,
  basePath: './',
  init: function(options) {
    if (options.hasOwnProperty('clientID')) this.setClientID(options.clientID);
    if (options.hasOwnProperty('basePath')) this.setBasePath(options.basePath);
  },
  setClientID: function(id) {
    if (typeof id !== 'undefined') {
      this.clientID = id;
    }
    else {
      this.clientID = null;
    }
  },
  setBasePath: function(path) {
    if (typeof path == 'string') {
      this.basePath = path;
    }
  },
  setPageTitle: function(arr) {
    let title = (typeof arr == 'object') ? arr.join(' | ').replace(/^[\s|]*/g, '') : arr;
    document.getElementsByTagName('title')[0].innerText = title;
  },
  pageView: function() {
    if (USA_COMSCORE.ready()) {
      COMSCORE.beacon({c1: '2', c2: USA_COMSCORE.clientID});

      let xhttp = new XMLHttpRequest();
      xhttp.open('GET', USA_COMSCORE.basePath + 'pageview_candidate.html?t=' + Math.random(), true);
      xhttp.send();
    }
    else {
      setTimeout(USA_COMSCORE.pageView, 100);
    }
  },
  ready: function() {
    return (typeof COMSCORE !== 'undefined' &&
            typeof USA_COMSCORE.clientID !== 'undefined' && USA_COMSCORE.clientID !== null) ? true : false;
  },
}

if (typeof noComScoreTagOnPageLoad == 'undefined') {
  self.COMSCORE;
  USA_COMSCORE.pageView();
}
