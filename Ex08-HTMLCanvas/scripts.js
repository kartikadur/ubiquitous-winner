(function(window, document, undefined){
  
  const widthControl = document.querySelector('#width-control');
  const colorControl = document.querySelector('#color-control');
  const canvas = document.querySelector('#draw');
  // get canvas 2d context
  const ctx = canvas.getContext('2d');
  // set canvas dimensions
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  // set context styles
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  // temp
  let colorVal = colorControl.value;
  let lnWidth = widthControl.value;
  
    
  
  function draw(e) {
    if(!isDrawing) return;

    ctx.strokeStyle = colorVal;
    ctx.lineWidth = lnWidth;
    
    console.log(widthControl.value, colorControl.value, colorVal,lnWidth);
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
    [lastX, lastY] = [e.offsetX, e.offsetY];
     
  }
  
  function updateLineStart(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
  
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', updateLineStart);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
  
  widthControl.addEventListener('change', (e) => {lnWidth = e.target.value});
  colorControl.addEventListener('change', (e) => {colorVal = e.target.value});  
})(window, document);