(function () {
    /* Select the input where the keywords will be retrieved */
    var searchbox = document.getElementsByClassName('search')[0];

    /* To every key pressed and released */
    searchbox.onkeyup = function () {
      /**
       * This will fix a simple problem: When the search input is empty after
       * trying to find a keyword, it selects all the elements and highlight
       */
      
      /*
        ternary operator ?
        var name = (statement) ? (if statement is true) : (else);
      */
      
      /*new RegExp(searchbox.value.trim(), "gi");
        The g modifier is used to perform a global match (find all matches rather than stopping after the first match).
        The i modifier is used to perform case-insensitive matching.
        so gi is global case-insenitive search
      */
      
      
      var keywords = searchbox.value.trim().length > 0 ? new RegExp(searchbox.value.trim(), "gi") : '';
      
      /* Define the postTitles where the search will run */
      var postTitles = document.getElementsByClassName('post__title');

      console.log(postTitles)

      /* Map all the postTitles */
      for (var i = 0; i < postTitles.length; i++) {
        var title = postTitles[i]; /* Easier to read */

        if (title.innerHTML.match(keywords) && keywords !== '') {
          /* If the element don't have the highlight class, it will add one */
          if (!title.parentNode.className.match('highlight')) {
            title.parentNode.classList.add('highlight');
          }
        } else {
          /**
           * Remove all the highlight classes inside the parent node of the
           * title if it didn't match with the keywords searched.
           */
          title.parentNode.classList.remove('highlight');
        }
      }
    };
})();