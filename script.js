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
const signIn = document.querySelector('.sign-in');
const code = document.querySelector('.html-editor-dis');
const area = document.querySelector('.area');
const downStyle = document.querySelector('.down-side-style');
const textEditor = document.querySelector('.text-editor');
const downSize = document.querySelector('.down-side-size')












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
      downSize.style.display = 'none';
      textStyle.classList.add('editor-item-act');
      textSize.classList.remove('editor-item-act');
   } else {
      textEditor.style.marginTop = '0';
      downStyle.style.display = 'none';
      textStyle.classList.remove('editor-item-act');
   }
}

const arial = document.querySelector('#arial');
const georgia = document.querySelector('#georgia');
const impact = document.querySelector('#impact');
const tahoma = document.querySelector('#tahoma');
const times = document.querySelector('#times');
const verdana = document.querySelector('#verdana');

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
      downStyle.style.display = 'none';
      downSize.style.display = 'flex';
      textSize.classList.add('editor-item-act');
      textStyle.classList.remove('editor-item-act');
   } else {
      textEditor.style.marginTop = '0';
      downSize.style.display = 'none';
      textSize.classList.remove('editor-item-act');
   }
}

const twelve = document.querySelector('#twelve');
const fourteen = document.querySelector('#fourteen');
const sixteen = document.querySelector('#sixteen');
const eighteen = document.querySelector('#eighteen');
const twenty = document.querySelector('#twenty');
const twentyTwo = document.querySelector('#twenty-two');
const twentyFive = document.querySelector('#twenty-five');
const thirty = document.querySelector('#thirty');


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




const bg = document.querySelector('.modal-background');
const textModal = document.querySelector('.text-color-modal');
const closeBtn = document.querySelector('.close-btn');
const colorItem = document.querySelectorAll('.color-item');


textColor.onclick = () => {
   if (textModal.style.display !== 'flex'){
      textModal.style.display = 'flex';
      bg.style.display = 'flex';
      textColor.classList.add('editor-item-act')
   }
}

closeBtn.onclick = () => {
   textModal.style.display = 'none';
      bg.style.display = 'none';
      textColor.classList.remove('editor-item-act');
}

document.onclick = (event) => {
   if(event.target.className === 'modal-background'){
      textModal.style.display = 'none';
      bg.style.display = 'none';
      textColor.classList.remove('editor-item-act');
   }
}

textModal.onclick = (event) => {
   if(event.target.className === 'color-item'){
     area.style.color = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
   event.target = event.target.parentNode
   }
}



const bg1 = document.querySelector('.modal-background1');
const backModal = document.querySelector('.back-color-modal');
const colorsBtn = document.querySelector('#colorsBtn');
const imagesBtn = document.querySelector('#imagesBtn');
const filesBtn = document.querySelector('#filesBtn');
const colorDown = document.querySelector('.back-color-down');
const imageDown = document.querySelector('.back-image-down');
const fileDown = document.querySelector('.back-file-down');
const closeBtn1 = document.querySelector('.close-btn1');
const colorItem1 = document.querySelectorAll('.color-item1');
const fileForm = document.querySelector('.file-form');
const file = document.querySelector('.file');
const fileBtn = document.querySelector('.file-btn')

background.onclick = () => {
   if (backModal.style.display !== 'flex'){
      backModal.style.display = 'flex';
      bg1.style.display = 'flex';
      background.classList.add('editor-item-act')
   }
}

closeBtn1.onclick = () => {
   backModal.style.display = 'none';
      bg1.style.display = 'none';
      background.classList.remove('editor-item-act');
}

document.onclick = (event) => {
   if(event.target.className === 'modal-background1'){
      backModal.style.display = 'none';
      bg1.style.display = 'none';
      background.classList.remove('editor-item-act')
   }
}
document.onclick = (event) => {
   if(event.target.className === 'modal-background'){
      textModal.style.display = 'none';
      bg.style.display = 'none';
      textColor.classList.remove('editor-item-act');
   }
}

backModal.onclick = (event) => {
   if(event.target.className === 'color-item1'){
     area.style.background = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
   event.target = event.target.parentNode
   }
}

colorsBtn.onclick = () => {
   if (colorDown.style.display !== 'flex'){
      colorDown.style.display = 'flex';
      imageDown.style.display = 'none';
      fileDown.style.display = 'none';
      colorsBtn.classList.add('back-color-item-act');
      imagesBtn.classList.remove('back-color-item-act');
      filesBtn.classList.remove('back-color-item-act');
   }
}
imagesBtn.onclick = () => {
   if (imageDown.style.display !== 'flex'){
      imageDown.style.display = 'flex';
      fileDown.style.display = 'none';
      colorDown.style.display = 'none';
      imagesBtn.classList.add('back-color-item-act');
      colorsBtn.classList.remove('back-color-item-act');
      filesBtn.classList.remove('back-color-item-act');
   }
}
filesBtn.onclick = () => {
   if (fileDown.style.display !== 'flex'){
      fileDown.style.display = 'flex';
      colorDown.style.display = 'none';
      imageDown.style.display = 'none';
      filesBtn.classList.add('back-color-item-act');
      imagesBtn.classList.remove('back-color-item-act');
      colorsBtn.classList.remove('back-color-item-act');
   }
}

imageDown.onclick = (event) => {
   if (event.target.className === 'img-back'){
      area.style.background = `url(.${event.target.src.slice(55)})`
   }
}

file.onchange = function() {
   let url = URL.createObjectURL(this.files[0]);
   area.style.background = "url(" + url + ")";
 }




const bg2 = document.querySelector('.modal-background2');
const signInModal = document.querySelector('.sign-in-modal');
const signInForm = document.querySelector('.sign-in-form');
const login = document.querySelector('#login');
const password = document.querySelector('#password');
const signInText = document.querySelector('.sign-in-text');
const signInBtn = document.querySelector('.sign-in-btn');
const lockImg = document.querySelector('#lock-logo')


signIn.onclick = () => {
   if (signInModal.style.display !== 'flex'){
      bg2.style.display = 'flex';
      signInModal.style.display = 'flex';
      signIn.classList.add('editor-item-act');
   }
}

document.onclick = (event) => {
   if(event.target.className === 'modal-background2'){
      signInModal.style.display = 'none';
      bg2.style.display = 'none';
      signInModal.style.display = 'none';
      signIn.classList.remove('editor-item-act');
   }
}

signInBtn.onclick = () => {
   if (login.value === ''){
      login.style.border = '1px solid red';
      signInText.textContent = 'Value is empty';
   } else {
      login.style.border = '1px solid grey';
      signInText.textContent = '';
   }
}
signInBtn.onclick = () => {
   if (password.value === ' '){
      password.style.border = '1px solid red';
      signInText.textContent = 'Value is empty';
   } else {
      password.style.border = '1px solid grey';
      signInText.textContent = '';
   }
}

const htmlEditor = document.querySelector('.html-editor-dis');
const htmlWindow = document.querySelector('.html-editor-window');

   signInBtn.onclick = () => {
   if (login.value !== 'admin' || password.value !== 'admin'){
      login.style.border = '1px solid red';
      password.style.border = '1px solid red';
      signInText.textContent = 'Please check your login or password';
   } else {
      login.style.border = '1px solid green';
      password.style.border = '1px solid green';
      signInText.textContent = '';
      signInModal.style.display = 'none';
      bg2.style.display = 'none';
      signInModal.style.display = 'none';
      signIn.classList.remove('editor-item-act');
      lockImg.src = './images/lock_open_FILL0_wght400_GRAD0_opsz48.svg';
      htmlEditor.classList.add('html-editor');
      htmlEditor.classList.remove('html-editor-dis')
   }
}



const areaHTML = document.querySelector('.area-html');
const areaTextHTML = document.querySelector('.area-html-text');
const save = document.querySelector('#save');
areaTextHTML.textContent = area.innerHTML;


code.onclick = () => {
   if (code.className === 'html-editor'){
      htmlWindow.style.display = 'flex';
   }
}
save.onclick = () => {
   area.innerHTML = areaTextHTML.value;
   console.log(area.innerHTML);
   htmlWindow.style.display = 'none';
}