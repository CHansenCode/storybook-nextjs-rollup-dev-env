var t="Button-module_button__1cs1R";!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(".Button-module_button__1cs1R{background:transparent;color:currentColor;transition:.3s ease}.Button-module_button__1cs1R:hover{background:rgba(255,0,0,.2);cursor:pointer}");const e=({text:e,fontSize:n,padding:o,margin:r,onClick:i})=>{const c={height:"auto",width:"auto",margin:r,padding:o,fontSize:n,outline:"none",border:"thin solid currentColor"};return React.createElement("button",{onClick:i,className:t,style:c},e)};e.defaultProps={text:"text/child prop empty",fontSize:"16px",padding:"0.5rem 0.75rem",margin:"0"};const n=({children:t,center:e})=>{const n={display:"flex",alignItems:e&&"center",justifyContent:e&&"center",width:"100%"};return React.createElement("section",{style:n},t)};export{e as Button,n as Section};
