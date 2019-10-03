let time = new Date();
let pos_s = time.getSeconds();
let pos_m = time.getMinutes();
let pos_h = time.getHours();
let x = pos_s * 6;
let y = pos_m * 6;
let z = pos_h * 30 + pos_m * 0.5;
document.write(`
  <style>
      @keyframes j_s {
          from {transform: rotate(${x}deg);}
          to {transform: rotate(${x + 360}deg);}
      }
      @keyframes j_m {
          from {transform: rotate(${y}deg);}
          to {transform: rotate(${y + 360}deg);}
      }
      @keyframes j_h {
          from {transform: rotate(${z}deg);}
          to {transform: rotate(${z + 360}deg);}
      }
  </style>
`);
