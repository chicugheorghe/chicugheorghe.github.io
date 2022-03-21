// function myFunction(event) {
//     let element1 = document.getElementById("myDIV");
//     let element2 = document.getElementById("myDIV2");
//     let element3 = document.getElementById("myDIV3");
//     let element4 = document.getElementById("myDIV4");
//     let element5 = document.getElementById("myDIV5");
//     let element6 = document.getElementById("myDIV6");
   
//     if (event.currentTarget.innerHTML === "I") {
//       element1.style.display = "block";
//       element2.style.display = "none";
      
//     } else {
//       x.style.display = "none";
//     }
//   }
//   myFunction();



    
var title = document.getElementsByClassName('accordion-title'),
cont = document.getElementsByClassName('accordion-cont');

for (var i = 0; i < title.length; i++) {
title[i].addEventListener('click', function() {
    if (!(this.classList.contains('active'))) {
        for(var i = 0; i < title.length; i++) {
            title[i].classList.remove('active');
        }
        this.classList.add('active');
    }
})
}
    


//   function myFunction2() {
//     let x = document.getElementById("myDIV2");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//       } else {
//         x.style.display = "none";
//       }
//     }

    // function myFunction3() {
    //     let x = document.getElementById("myDIV3");
    //     if (x.style.display === "none") {
    //         x.style.display = "block";
    //       } else {
    //         x.style.display = "none";
    //       }
    //     }

    //     function myFunction4() {
    //         let x = document.getElementById("myDIV4");
    //         if (x.style.display === "none") {
    //             x.style.display = "block";
    //           } else {
    //             x.style.display = "none";
    //           }
    //         }

    //         function myFunction5() {
    //             let x = document.getElementById("myDIV5");
    //             if (x.style.display === "none") {
    //                 x.style.display = "block";
    //               } else {
    //                 x.style.display = "none";
    //               }
    //             }

    //             function myFunction6() {
    //                 let x = document.getElementById("myDIV6");
    //                 if (x.style.display === "none") {
    //                     x.style.display = "block";
    //                   } else {
    //                     x.style.display = "none";
    //                   }
    //                 }

    ///BUTTON

    function infoButton() {
        let a = document.getElementById("info");
       if (a.style.display === "none") {
       a.style.display = "block";

    }else {
        a.style.display = "none";
    }
}


//trailer///////////////////////////////

function trailer () {
    const b = document.getElementById ("trailer");
    if (b.style.display === "none") {
        b.style.display = "block";
 
     }else {
         b.style.display = "none";
     }
}
