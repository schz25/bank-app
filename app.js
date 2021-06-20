const routes = {
  '/login': {
    title: "Login",
    templateId: 'login' 
  },
  '/dashboard': { 
    title: "Dashboard",
    templateId: 'dashboard' 
  },
};


  function updateRoute() {
    const path = window.location.pathname;
    const route = routes[path];

    if (!route) {
      return navigate('/dashboard');
    }

    //console.log(`ROUTE: ${routes}`);

    const template = document.getElementById(route.templateId);
    const view = template.content.cloneNode(true);
    const app = document.getElementById('app');
    app.innerHTML = '';
    app.appendChild(view);
    if (typeof route.init === 'function') {
      route.init();
    }
  
    document.title = route.title;
  }

  document.getElementById('title').onclick = function() {
  updateRoute();
  };


  function onLinkClick(event) {
    event.preventDefault();
    navigate(event.target.href);
  }
  
  function navigate(path) {
    window.history.pushState({}, path, path);
    updateRoute();
  }
  

  window.onpopstate = () => updateRoute();
updateRoute();

