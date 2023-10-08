const haxArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const URL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function makeClr() {
  let random = Math.floor(Math.random() * haxArr.length);
  return haxArr[random];
}

function getColor() {
  return `#${makeClr()}${makeClr()}${makeClr()}${makeClr()}${makeClr()}${makeClr()}`;
}

function setColor() {
  let color = getColor();
  $("body").css("background-color", color);
  $("#text").css("color", color);
  $("#author").css("color", color);
  $(".btn").css("color", color);
  $("a").css("color", color)
}

function getQuote() {
  $.get(URL, function (res) {
      let { quotes } = JSON.parse(res);
      let random = Math.floor(Math.random() * quotes.length);
      let quote = quotes[random];
      $(".quote").html(`
      <div id="text">
        <span><i class="fas fa-quote-left"></i></span>
        ${quote.quote}
      </div>
      <div id="author">
        -${quote.author}
      </div>
      `);
      $("#tweet").html(`
      <a id="tweet-quote" target="_blank" class="twitter-share-button" href='https://twitter.com/intent/tweet?text="${quote.quote}" -${quote.author}''>
        <i class="fab fa-twitter-square"></i>
      </a>
      `);
      setColor();
    });
};

getQuote();

$("#new-quote").on("click", getQuote)