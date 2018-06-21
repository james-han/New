

let date = new Date(); //current tiem
let cur = date.getTime(); //Convert to timestamp

//Time rendering function
function countdown(that, created_at) {
  let created = new Date(created_at);//created tiem
  let cre = created.getTime();//Convert to timestamp
  let total_second = (cur - cre)/1000;
  that.setData({
    date: dateformat(total_second)
  });
  return that.data.date
}

//Conversion time format function
function dateformat(second) {
  let year = Math.floor(second / (3600 * 24 * 365));
  let day = Math.floor((second - year * 3600 * 24 * 365) /(3600 * 24));
  let hr = Math.floor((second - day * 24 * 3600) / 3600);
  let min = Math.floor((second - hr * 3600 - day * 24 * 3600) / 60);
  let sec = (second - day * 24 * 3600 - hr * 3600 - min * 60);
  
  if (year != 0){
    if (day == 1) {
      return 1 + ' year ago'
    } else {
      return day + ' year ago'
    } 
  }
  else if (day != 0){
    if(day == 1){
      return 1 + ' day ago'
    }else{
      return day + ' days ago'
    } 
  }
  else if (hr != 0){
    if (hr == 1){
      return 1 + ' hour ago'
    }else{
      return hr + ' hours ago'
    }
    
  }
  else if (min != 0) {
    if (min == 1) {
      return 1 + ' minute ago'
    } else {
      return min + ' minutes ago'
    }
  }
  else {
    if (sec == 1) {
      return 1 + ' second ago'
    } else {
      return hr + ' seconds ago'
    }
  }
};

module.exports = {
  countdown: countdown,
  dateformat: dateformat
}