console.log("I am Working");
const bookName = document.getElementById("bookName");
const chapterName = document.getElementById("chapterName");
const contents = document.getElementById("contents");
const ref = document.getElementById("ref");
const randombtn=document.getElementById("randombtn");

const apiUrl = "https://random-hadith-generator.vercel.app/bukhari/";
fetch(apiUrl)
  .then(response=>{
    if(!response.ok){
      console.log("Network response is not ok")
    }
      return response.json()
  }).then(responseData => {
    console.log(responseData);
    const data = responseData.data;

    // Check if expected properties exist in the data object
    if (data.book && data.chapterName && data.hadith_english && data.refno) {
      bookName.innerText = data.book;
      chapterName.innerText = data.chapterName;
      contents.innerText = data.hadith_english;
      ref.innerText = data.refno;
    } else {
      console.error("Data structure is not as expected");
    }
  }).catch(error => {
    console.error("Error: ", error)
  })
  randombtn.addEventListener("click", () => {
    document.location.reload()
  })
