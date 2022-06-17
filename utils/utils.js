import { colors,colorsPrimary } from "./data.js";
const url = 'https://zenquotes.io/api/random/0798b634182466f7e024f63744480f1aefc77180';
let classTimeout

export const getQuote = async () => {
  $("#text-quote").text("");
  $("#author-quote").text("");
  const response = await fetch(url)
  $("#text-quote").width();
  $("#author-quote").width();
  $("#text-quote").removeClass("fade-in")
  $("#author-quote").removeClass("fade-in")
  const [data] = await response.json()
  $("#text-quote").width();
  $("#author-quote").width();
  $("#text-quote").addClass("fade-in");
  $("#author-quote").addClass("fade-in");
  $("#text-quote").text(data.q);
  $("#author-quote").text(data.a);
  $(":root").css("--color", randomColor(colors));
  $(":root").css("--color2", randomColor(colorsPrimary));
  $(".icon-twitter").attr("href",`https://twitter.com/intent/tweet?text=${data.q} - ${data.author}`);
  return data
}

const randomColor = (colors) => {
  //random integer number from 0 to length
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}