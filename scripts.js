let countdownTag = document.getElementById("countdown");
let countdown = parseInt(countdownTag.innerText);
setTimeout(() => {
  countdownTag.innerText = countdown -= 1;
  setTimeout(() => {
    countdownTag.innerText = countdown -= 1;
    setTimeout(() => {
      countdownTag.innerText = countdown -= 1;
      setTimeout(() => {
        countdownTag.innerText = countdown -= 1;
        setTimeout(() => {
          countdownTag.innerText = countdown -= 1;
          setTimeout(() => {
            countdownTag.innerText = countdown -= 1;
            setTimeout(() => {
              countdownTag.innerText = countdown -= 1;
              setTimeout(() => {
                countdownTag.innerText = countdown -= 1;
                setTimeout(() => {
                  countdownTag.innerText = countdown -= 1;
                  setTimeout(() => {
                    countdownTag.innerText = "TADA!!";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
