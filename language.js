    // Create a function to change
    // the hash value of the page
    function changeLanguage(lang) {
      location.hash = lang;
      location.reload();
    }
  
    // Define the language reload anchors
    var language = {
      eng: {
        welcome: "Welcome! It has been a while since" +
        "I finished secondary education. My knowledge " + 
        "and experience are very limited though." +
        "Let's see how things work out!"
      },
      ar: {
        welcome: " لقد مرت فترة منذ أن خرجت من المدرسة" +
        "ولكن معرفتي وخبرتي محدودة للغاية. " +
        "كيف نستفيد بعضنا البعض؟ وهل هناك ضرورة لذلك؟"
      },
      zh: {
        welcome: "我離開學校已經有一段時間了，" +
        "但我的知識和經驗非常有限。 " + 
        "請多多指教！"
      }
    };
  
    // Check if a hash value exists in the URL
    if (window.location.hash) {
  
      // Set the content of the webpage 
      // depending on the hash value
      if (window.location.hash == "#ar") {
        siteContent.textContent =
          language.ar.welcome;
      }
      else if (window.location.hash == "#zh") {
        siteContent.textContent =
          language.zh.welcome;
      }
    }

    if (/windows/i.test(navigator.userAgent)) {
      document.body.classList.add('win')
    }