import { colors,colorsPrimary } from "./data.js";
const url = 'https://api.quotable.io/random';
let classTimeout

export const getQuote = async () => {
  $("#text-quote").text("");
  $("#author-quote").text("");
  const response = await fetch(url)
  $("#text-quote").width();
  $("#author-quote").width();
  $("#text-quote").removeClass("fade-in")
  $("#author-quote").removeClass("fade-in")
  const data = await response.json()
  $("#text-quote").width();
  $("#author-quote").width();
  $("#text-quote").addClass("fade-in");
  $("#author-quote").addClass("fade-in");
  $("#text-quote").text(data.content);
  $("#author-quote").text(data.author);
  $(":root").css("--color", randomColor(colors));
  $(":root").css("--color2", randomColor(colorsPrimary));
  $(".icon-twitter").attr("href",`https://twitter.com/intent/tweet?text=${data.content} - ${data.author}`);
  return data
}

const randomColor = (colors) => {
  //random integer number from 0 to length
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}