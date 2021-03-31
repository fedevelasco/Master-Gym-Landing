let map;
 
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: -34.58205931849332, lng: -58.422698476727476   },
    });
    marker = new google.maps.Marker({
      map,
      title: "Master Gym",
      animation: google.maps.Animation.DROP,
      position: { lat: -34.58205931849332, lng: -58.422698476727476   },
    });
    marker.addListener("mouseover", toggleBounce);
  }
  
  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

// Sticky menu background
window.addEventListener('scroll', function(){
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.97;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});



// //  Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
}); 
  
