function postedAt(postedDate) {
  const posted = new Date(postedDate);
  const year = posted.getFullYear();
  let month = posted.getMonth();
  const date = posted.getDate();

  switch(month) {
   case 0: month = "Jan"; break;
   case 1: month = "Feb"; break;
   case 2: month = "Mar"; break;
   case 3: month = "Apr"; break;
   case 4: month = "Mei"; break;
   case 5: month = "Jun"; break;
   case 6: month = "Jul"; break;
   case 7: month = "Agt"; break;
   case 8: month = "Sep"; break;
   case 9: month = "Okt"; break;
   case 10: month = "Nov"; break;
   case 11: month = "Des"; break;
   default: month = posted.getMonth();
  }
  
  return `${date} ${month} ${year}`;
}

function stripHtml(html) {
   const div = document.createElement("div");
   div.innerHTML = html;
   return div.textContent || div.innerText || "";
}


export { postedAt, stripHtml };
