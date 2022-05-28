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
const downSize = document.querySelector('.down-side-size')

const arial = document.querySelector('#arial');
const georgia = document.querySelector('#georgia');
const impact = document.querySelector('#impact');
const tahoma = document.querySelector('#tahoma');
const times = document.querySelector('#times');
const verdana = document.querySelector('#verdana');

const twelve = document.querySelector('#twelve');
const fourteen = document.querySelector('#fourteen');
const sixteen = document.querySelector('#sixteen');
const eighteen = document.querySelector('#eighteen');
const twenty = document.querySelector('#twenty');
const twentyTwo = document.querySelector('#twenty-two');
const twentyFive = document.querySelector('#twenty-five');
const thirty = document.querySelector('#thirty');





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


const removeFontStyleAct = () => {
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
      removeFontStyleAct();
      arial.classList.add('font-act')
   }
};
georgia.onclick = () => {
   if (area.style.fontFamily !== 'Georgia, "Times New Roman", Times, serif'){
      area.style.fontFamily = 'Georgia, "Times New Roman", Times, serif';
      removeFontStyleAct();
      georgia.classList.add('font-act')
   }
}
impact.onclick = () => {
   if (area.style.fontFamily !== 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'){
      area.style.fontFamily = 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif';
      removeFontStyleAct();
      impact.classList.add('font-act')
   }
}
tahoma.onclick = () => {
   if (area.style.fontFamily !== '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'){
      area.style.fontFamily = '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
      removeFontStyleAct();
      tahoma.classList.add('font-act')
   }
}
times.onclick = () => {
   if (area.style.fontFamily !== '"Times New Roman", Times, serif'){
      area.style.fontFamily = '"Times New Roman", Times, serif';
      removeFontStyleAct();
      times.classList.add('font-act')
   }
}
verdana.onclick = () => {
   if (area.style.fontFamily !== 'Verdana, Geneva, Tahoma, sans-serif'){
      area.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
      removeFontStyleAct();
      verdana.classList.add('font-act')
   }
}



textSize.onclick = () => {
   if (downSize.style.display !== 'flex'){
      textEditor.style.marginTop = '400px';
      downSize.style.display = 'flex';
      textSize.classList.add('editor-item-act');
   } else {
      textEditor.style.marginTop = '0';
      downSize.style.display = 'none';
      textSize.classList.remove('editor-item-act');
   }
}
const removeFontSizeAct = () => {
   twelve.classList.remove('font-act');
   fourteen.classList.remove('font-act');
   sixteen.classList.remove('font-act');
   eighteen.classList.remove('font-act');
   twenty.classList.remove('font-act');
   twentyTwo.classList.remove('font-act');
   twentyFive.classList.remove('font-act');
   thirty.classList.remove('font-act');
}
twelve.onclick = () => {
   if (area.style.fontSize !== '12px'){
      area.style.fontSize = '12px';
      removeFontSizeAct();
      twelve.classList.add('font-act')
   }
};
fourteen.onclick = () => {
   if (area.style.fontSize !== '14px'){
      area.style.fontSize = '14px';
      removeFontSizeAct();
      fourteen.classList.add('font-act')
   }
};
sixteen.onclick = () => {
   if (area.style.fontSize !== '16px'){
      area.style.fontSize = '16px';
      removeFontSizeAct();
      sixteen.classList.add('font-act')
   }
};
eighteen.onclick = () => {
   if (area.style.fontSize !== '18px'){
      area.style.fontSize = '18px';
      removeFontSizeAct();
      eighteen.classList.add('font-act')
   }
};
twenty.onclick = () => {
   if (area.style.fontSize !== '20px'){
      area.style.fontSize = '20px';
      removeFontSizeAct();
      twenty.classList.add('font-act')
   }
};
twentyTwo.onclick = () => {
   if (area.style.fontSize !== '22px'){
      area.style.fontSize = '22px';
      removeFontSizeAct();
      twentyTwo.classList.add('font-act')
   }
};
twentyFive.onclick = () => {
   if (area.style.fontSize !== '25px'){
      area.style.fontSize = '25px';
      removeFontSizeAct();
      twentyFive.classList.add('font-act')
   }
};
thirty.onclick = () => {
   if (area.style.fontSize !== '30px'){
      area.style.fontSize = '30px';
      removeFontSizeAct();
      thirty.classList.add('font-act')
   }
};
