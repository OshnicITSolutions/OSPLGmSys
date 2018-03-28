var commonFolder = 'common/'

var injectScripts = [];

injectScripts.push(commonFolder + 'interceptor.js')
injectScripts.push(commonFolder + 'directive.js')
injectScripts.push(commonFolder + 'pageService.js')


//controllers

injectScripts.push('auth.js')//Authontication Controller

function loadScripts() {

  for (var i = 0; i < injectScripts.length; i++) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    // script.onreadystatechange = function () {
    //   if (this.readyState == 'complete') helper();
    // }
    // script.onload = helper;
    script.src = injectScripts[i];
    head.appendChild(script); 
  }

  
}

loadScripts();
