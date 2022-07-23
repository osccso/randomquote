import { colors,colorsPrimary, url } from "./data.js";

export const getQuote = async () => {
  // Clear up text and author //
  $("#text-quote").text("");
  $("#author-quote").text("");
  // fetching data //
  const response = await fetch(url)
  const data = await response.json()
  //adding classes for transition
  $("#text-quote").width()
  $("#author-quote").width()
  $("#text-quote").removeClass("fade-in")
  $("#author-quote").removeClass("fade-in")
  
  $("#text-quote").width()
  $("#author-quote").width()

  $("#text-quote").addClass("fade-in");
  $("#author-quote").addClass("fade-in")
  
  // adding data
  $("#text-quote").text(data.content);
  $("#author-quote").text(data.author);
    
  // Changing colors
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