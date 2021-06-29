
// const card = document.querySelector('.card_inner');

// card.addEventListener('click', function() {
//     card.classList.toggle('is-flipped')
// });

document.querySelectorAll('.card_inner').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('is-flipped');
        // item.classList.toggle('lastindex')

    })
})


// document.querySelectorAll('.mockupSmall1_inner').forEach(item => {
//     item.addEventListener('scroll', event => {
//         item.classList.toggle('is-flipped');


//     })
//   })


// const scrolled = window.pageYOffset;
// var tl = new TimelineMax({onUpdate:updatePercentage});
// var tl2 = new TimelineMax();
// const controller = new ScrollMagic.Controller();

// tl.from('.mockupSmall3_inner', .5, { opacity: 0});
// tl.from('span', 1, { width: 0}, "=-.5");
// tl.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
// tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

// tl2.from("#box", 1, {opacity: 0, scale: 0});
// tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})

// const scene = new ScrollMagic.Scene({
//   triggerElement: ".mockupRow1",
//             triggerHook: "onLeave",
//             duration: "100%"
// })
//   .setClassToggle('.is-flipped')
//   .setPin(".mockupRow1")
//   .setTween(tl)
// 		.addTo(controller);

// const scene2 = new ScrollMagic.Scene({
//   triggerElement: "blockquote"
// })
//   .setTween(tl2)
// 		.addTo(controller);


// function updatePercentage() {
//   //percent.innerHTML = (tl.progress() *100 ).toFixed();
//   tl.progress();
//   console.log(tl.progress());
// }



// window.addEventListener('scroll', event => {
//     item.style.transform = `rotateY(180deg)`;
//     item.style.opacity = `1`;


// })

// function updatePercentage() {
//     tl.progress();
//     console.log(tl.progress());
// }

// document.querySelectorAll('.mockupSmall1_inner').forEach(item => {



// })


const scrollOffset = 100;
 
const scrollElement1 = document.querySelector(".mockupSmall1_inner");
const scrollElement3 = document.querySelector(".mockupSmall3_inner");
 
const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};
 
const displayScrollElement = () => {
  scrollElement1.classList.add('is-flipped');
  scrollElement1.classList.add('visible');
}
 
const hideScrollElement = () => {
  scrollElement1.classList.remove('is-flipped');
}
 
const handleScrollAnimation = () => {
  if (elementInView(scrollElement1, scrollOffset)) {
      displayScrollElement();
  } else {
    hideScrollElement();
  }
}
 
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})

$(window).on("scroll", function(){
    let winTop = $(this).scrollTop();
  
    $(".mockupSmall3_inner").removeClass("visible").each(function () {
      let section = $(this).offset().top;
      if(winTop >= section-1200) {
        $(".mockupSmall3").removeClass("visible");
        // $(".mockupSmall3").removeClass("is-flipped");
        $(this).addClass("visible");
        // $(this).addClass("is-flipped");
      }
    });
  });

$(window).on("scroll", function(){
    let winTop = $(this).scrollTop();
  
    $(".poster1").removeClass("visible").each(function () {
      let section = $(this).offset().top;
      if(winTop >= section-560) {
        $(".poster1").removeClass("visible");
        $(".poster1").removeClass("left");
        // $(".mockupSmall3").removeClass("is-flipped");
        $(this).addClass("visible");
        $(this).addClass("left");
        // $(this).addClass("is-flipped");
      }
    });
  });

$(window).on("scroll", function(){
    let winTop = $(this).scrollTop();
  
    $(".poster2").removeClass("visible").each(function () {
      let section = $(this).offset().top;
      if(winTop >= section-400) {
        $(".poster2").removeClass("visible");
        $(".poster2").removeClass("right");
        // $(".mockupSmall3").removeClass("is-flipped");
        $(this).addClass("visible");
        $(this).addClass("right");
        // $(this).addClass("is-flipped");
      }
    });
  });

$(window).on("scroll", function(){
    let winTop = $(this).scrollTop();
  
    $(".mockupSmall4").removeClass("visible").each(function () {
      let section = $(this).offset().top;
      if(winTop >= section-500) {
        $(".mockupSmall4").removeClass("visible");
        
        // $(".mockupSmall3").removeClass("is-flipped");
        $(this).addClass("visible");
        
        // $(this).addClass("is-flipped");
      }
    });
  });


$(window).on("scroll", function(){
    let winTop = $(this).scrollTop();
  
    $(".mockupSmall5").removeClass("visible").each(function () {
      let section = $(this).offset().top;
      if(winTop >= section-500) {
        $(".mockupSmall5").removeClass("visible");
        
        // $(".mockupSmall3").removeClass("is-flipped");
        $(this).addClass("visible");
        
        // $(this).addClass("is-flipped");
      }
    });
  });

// const scrollElement2 = document.querySelector(".mockupSmall3_inner");
 
// const elementInView = (el, offset = 0) => {
//   const elementTop = el.getBoundingClientRect().top;
 
//   return (
//     elementTop <= 
//     ((window.innerHeight || document.documentElement.clientHeight) - offset)
//   );
// };
 
// const displayScrollElement = () => {
//   scrollElement2.classList.add('is-flipped');
// }
 
// const hideScrollElement = () => {
//   scrollElement2.classList.remove('is-flipped');
// }
 
// const handleScrollAnimation = () => {
//   if (elementInView(scrollElement2, scrollOffset)) {
//       displayScrollElement();
//   } else {
//     hideScrollElement();
//   }
// }
 
// window.addEventListener('scroll', () => {
//   handleScrollAnimation();
// })
