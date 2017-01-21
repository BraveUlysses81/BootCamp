$("document").ready(function(){

     Particles.init({
         selector: "#myCanvas",
         color: '#66cd00',
         maxParticles: 150,
         sizeVariations: 5,
         speed: .5,
         minDistance: 100,
         connectParticles: true
     });

    $(".one").parallax({imageSrc: "1.jpg"});

    $(".two").parallax({imageSrc: "2.jpg"});

});