function showMore() {
  let news = document.querySelectorAll(".news1");
  let news2 = document.querySelector(".news2");
  let all_news = document.querySelector("#all_news");
  for (let i = 0; i < news.length; i++) {
    if (news[i].style.display === "none") {
      news[i].style.display = "block";
      all_news.textContent = "Show Less";
    } else {
      news[i].style.display = "none";
      all_news.textContent = "Show More";
    }
  }
  //   if (news2.style.display === "none") {
  //     news2.style.display = "block";
  //     all_news.textContent = "Show Less";
  //   } else {
  //     news2.style.display = "none";
  //     all_news.textContent = "Show More";
  //   }
}
