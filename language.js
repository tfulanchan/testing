    // Create a function to change
    // the hash value of the page
    function changeLanguage(lang) {
      location.hash = lang;
      location.reload();
    }
  
    // Define the language reload anchors
    var language = {
      eng: {
        welcome: "Welcome to the GeeksforGeeks " +
        "Portal! You can choose any language " + 
        "using the buttons above!"
      },
      ar: {
        welcome: "يبدو أن لدي العديد من الشهادات ،" +
        "لكنني بالتأكيد معرفة وخبرة محدودة للغاية." +
        "ومع ذلك ، فقد زرت أكثر من 20 دولة في حياتي ." +
        "مرحباً! كيف يمكننا مساعدة بعضنا بعضاً؟"
      },
      zh: {
        welcome: "看來我有很多證書，但知識和經驗絕對非常有限。" +
        "我這輩子去過 20 多個國家/地區。 " + 
        "我們如何才能互惠互利？請多多指教！"
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
