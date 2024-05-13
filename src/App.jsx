import { useEffect } from "react";



function App() {
//   useEffect(() => {
//     const scriptOne = document.createElement("script");
//     const scriptTwo = document.createElement("script");
//     const scriptThree = document.createElement("script");
    

//     scriptOne.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
//     scriptOne.async = true;
//     scriptTwo.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js";
//     scriptTwo.async = true;
//     const babyScriptThree = document.createTextNode(
//       let setVanta = ()=>{
//         if (window.VANTA) window.VANTA.FOG({
//           el: ".s-page-1 .s-section-1 .s-section",
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.00,
//           minWidth: 200.00,
//           highlightColor: "0x#ff8f56",
//           midtoneColor: "0x#fff1a8",
//           lowlightColor: "0x#964453",
//           baseColor: "0x#2d5c7f",
//           speed: 2.00,
//           zoom: 1.40
//         }
//       )
// }
// _strk.push(function() {
//   setVanta()
//   window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
// }))
    
//     scriptThree.appendChild(babyScriptThree);
//     scriptThree.async = true;

//     document.body.appendChild(scriptOne)
//     document.body.appendChild(scriptTwo)
//     document.body.appendChild(scriptThree)
    
//   },[])
  return (
    <>
      <h1>Hello World!</h1>

    </>
  );
}

export default App


{/* <script src="three.r134.min.js"></script>
<script src="vanta.fog.min.js"></script>
<script>
VANTA.FOG({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0x#ff8f56,
  midtoneColor: 0x#fff1a8,
  lowlightColor: 0x#964453,
  baseColor: 0x#2d5c7f,
  speed: 2.00,
  zoom: 1.40
})
</script> */}