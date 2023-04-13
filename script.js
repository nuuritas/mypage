function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove "active" class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Load the selected tab content and mark the button as active
    if (tabName === 'CV') {
      document.getElementById(tabName).innerHTML = '<iframe src="./cv/Nuri_Tas_cv_eng.pdf" width="100%" height="1200px"></iframe>';
    } else if (tabName === 'Portfolio') {
      // TODO: add code to load portfolio content here
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // add my github page to the portfolio tab
    if (tabName === 'Secim') {
      document.getElementById(tabName).innerHTML = '<iframe src="https://64379403af798c512b5768bc--thriving-cobbler-dd4ec0.netlify.app/" width="100%" height="1200px"></iframe>';
    }
    
    if (tabName === 'Hisse') {
      document.getElementById(tabName).innerHTML = '<iframe src="https://nuuritas.github.io/hisse_takip/" width="100%" height="1200px"></iframe>';
    }
  }
  
