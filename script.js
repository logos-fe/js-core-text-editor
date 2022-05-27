const bold = document.querySelector('#bold');
const italic = document.querySelector('#italic');
const underline = document.querySelector('#underline');
const crossline = document.querySelector('#crossline');
const leftAlign = document.querySelector('#left-align');
const rightAlign = document.querySelector('#right-align');
const centerAlign = document.querySelector('#center-align');
const textStyle = document.querySelector('#text-style');
const textSize = document.querySelector('#text-size');
const textColor = document.querySelector('#text-color');
const background = document.querySelector('#background');
const signUp = document.querySelector('.sign-up');
const code = document.querySelector('.html-editor-dis');
const area = document.querySelector('.area');
const downStyle = document.querySelector('.down-side-style');
const textEditor = document.querySelector('.text-editor');

const arial = document.querySelector('#arial');
const georgia = document.querySelector('#georgia');
const impact = document.querySelector('#impact');
const tahoma = document.querySelector('#tahoma');
const times = document.querySelector('#times');
const verdana = document.querySelector('#verdana');




bold.onclick = () => {
   if (area.style.fontWeight !== 'bold'){
      area.style.fontWeight = 'bold'
      bold.classList.add('editor-item-act')
   } else {
      area.style.fontWeight = 'normal'
      bold.classList.remove('editor-item-act')
   }
}
italic.onclick = () => {
   if (area.style.fontStyle !== 'italic'){
      area.style.fontStyle = 'italic';
      italic.classList.add('editor-item-act')
   } else {
      area.style.fontStyle = 'normal'
      italic.classList.remove('editor-item-act')
   }
}

underline.onclick = () => {
   if (area.style.textDecoration !== 'underline'){
      area.style.textDecoration = 'underline';
      underline.classList.add('editor-item-act');
      crossline.classList.remove('editor-item-act')
   } else {
      area.style.textDecoration = 'none'
      underline.classList.remove('editor-item-act')
   }
}
crossline.onclick = () => {
   if (area.style.textDecoration !== 'line-through'){
      area.style.textDecoration = 'line-through';
      crossline.classList.add('editor-item-act')
      underline.classList.remove('editor-item-act')
   } else {
      area.style.textDecoration = 'none'
      crossline.classList.remove('editor-item-act');
   }
}


leftAlign.onclick = () => {
   if (area.style.textAlign !== 'start'){
      area.style.textAlign = 'start';
      leftAlign.classList.add('editor-item-act');
      centerAlign.classList.remove('editor-item-act');
      rightAlign.classList.remove('editor-item-act');
   } else {
      area.style.textAlign = 'start';
      leftAlign.classList.remove('editor-item-act');
   }
}
centerAlign.onclick = () => {
   if (area.style.textAlign !== 'center'){
      area.style.textAlign = 'center';
      centerAlign.classList.add('editor-item-act');
      leftAlign.classList.remove('editor-item-act');
      rightAlign.classList.remove('editor-item-act');
   } else {
      area.style.textAlign = 'start';
      centerAlign.classList.remove('editor-item-act');
   }
}
rightAlign.onclick = () => {
   if (area.style.textAlign !== 'end'){
      area.style.textAlign = 'end';
      rightAlign.classList.add('editor-item-act');
      centerAlign.classList.remove('editor-item-act');
      leftAlign.classList.remove('editor-item-act');
   } else {
      area.style.textAlign = 'start';
      rightAlign.classList.remove('editor-item-act');
   }
}



textStyle.onclick = () => {
   if (downStyle.style.display !== 'flex'){
      textEditor.style.marginTop = '300px';
      downStyle.style.display = 'flex';
      textStyle.classList.add('editor-item-act');
   } else {
      textEditor.style.marginTop = '0';
      downStyle.style.display = 'none';
      textStyle.classList.remove('editor-item-act');
   }
}


const removeFontAct = () => {
   arial.classList.remove('font-act');
   georgia.classList.remove('font-act');
   impact.classList.remove('font-act');
   tahoma.classList.remove('font-act');
   times.classList.remove('font-act');
   verdana.classList.remove('font-act');
}
arial.onclick = () => {
   if (area.style.fontFamily !== 'Arial, Helvetica, sans-serif'){
      area.style.fontFamily = 'Arial, Helvetica, sans-serif';
      removeFontAct();
      arial.classList.add('font-act')
   }
};
georgia.onclick = () => {
   if (area.style.fontFamily !== 'Georgia, "Times New Roman", Times, serif'){
      area.style.fontFamily = 'Georgia, "Times New Roman", Times, serif';
      removeFontAct();
      georgia.classList.add('font-act')
   }
}
impact.onclick = () => {
   if (area.style.fontFamily !== 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'){
      area.style.fontFamily = 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif';
      removeFontAct();
      impact.classList.add('font-act')
   }
}
tahoma.onclick = () => {
   if (area.style.fontFamily !== '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'){
      area.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
      removeFontAct();
      tahoma.classList.add('font-act')
   }
}
times.onclick = () => {
   if (area.style.fontFamily !== '"Times New Roman", Times, serif'){
      area.style.fontFamily = '"Times New Roman", Times, serif';
      removeFontAct();
      times.classList.add('font-act')
   }
}
verdana.onclick = () => {
   if (area.style.fontFamily !== 'Verdana, Geneva, Tahoma, sans-serif'){
      area.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
      removeFontAct();
      verdana.classList.add('font-act')
   }
}


