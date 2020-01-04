let columns = [], tweets = [];

function callback() {
  tweets = Array.from(document.getElementsByClassName('js-tweet-text'));
  tweets.forEach(i => {
    if ((i.innerText.match(/\$/g) || []).length > 2) {
      i.closest('.js-stream-item').style.display = 'none'
    }
  })
}

function main() {
  callback(); //removes matched tweets on initial load
  columns = Array.from(document.getElementsByClassName('js-column-scroller'))
  columns.forEach(col => {
    col.onscroll = () => callback()
  })
}

setTimeout(function() {
  main();
}, 3000);
