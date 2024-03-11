// Date & time show
document.addEventListener('DOMContentLoaded',()=>{
  const showDate = document.querySelector('#date');
  const time = document.querySelector('#time');
  time.textContent = 'loading...';
    setInterval(() => {
      let curTime = new Date().toLocaleTimeString();
      time.textContent = curTime;
  }, 1000);
  curDate = new Date().toDateString();
  showDate.innerHTML = curDate;
});

// Today highlighter
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date();
  const date = today.getDate();
  const dayElements = document.querySelectorAll('table tbody tr td:nth-child(2)');
  const is2024Ramadan = new Date('2024-04-10') < today;
  if(is2024Ramadan){
    return 0
  }else{
    for (let i = 0; i < dayElements.length; i++) {
      const currentDate = parseInt(dayElements[i].textContent.split(" ")[0]);
        if (currentDate === date) {
          dayElements[i].parentElement.classList.add("active-ramadan");
        }
      }
    }
  }
);

/**
 * all code are writen by Soriful Chalehin. 
 * facebook: https://github.com/Soriful-Chalehin
 * thank you.
 */