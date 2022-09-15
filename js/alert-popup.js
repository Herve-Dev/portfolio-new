function showResponseServer(res) {
      const popupAlert = document.getElementById('popup-alert');
      popupAlert.classList.add('anim-show-popup');
      const textalert = document.querySelector('.res-server'); 
      const responseServer = document.createTextNode(`${res}`);   
      textalert.appendChild(responseServer);

      if (document.querySelector('.anim-show-popup')) {
            setTimeout(() => {
                  popupAlert.classList.remove('anim-show-popup')
                  textalert.removeChild(responseServer)
            }, 5000)
      }
};


