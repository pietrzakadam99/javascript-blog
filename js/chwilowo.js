///////////// GENERATE TAGS //////////////////

function generateTags(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
  
    /* START LOOP: for every article: */
      for(let article of articles){
    /* find tags wrapper */
        const articleTag = article.querySelector(optArticleTagsSelector);
  
    /* make html variable with empty string */
        let html = '';
  
    /* get tags from data-tags attribute */
        const articleTags = article.getAttribute('data-tags');
  
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
  
    /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
  
    /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log(linkHTML);
  
    /* add generated code to html variable */
      html = html + linkHTML;
  
    /* END LOOP: for each tag */
      };
  
    /* insert HTML of all the links into the tags wrapper */
    articleTag.innerHTML = html;
    
    /* END LOOP: for every article: */
      
    };
  };
  
  generateTags();
  
  /////////// TAG CLICK HANDLER///////////////
  
  function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
  
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
  
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
  
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
  
    /* find all tag links with class active */
    const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  
    /* START LOOP: for each active tag link */
    for (let activeTag of activeTags){
      /* remove class active */
      activeTag.classList.remove('active');
    /* END LOOP: for each active tag link */
    };
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  
    /* START LOOP: for each found tag link */
    for (let tagLink of tagLinks){
      /* add class active */
      tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  };
  
  function addClickListenersToTags(){
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    
    /* START LOOP: for each link */
    for (let tagLink of tagLinks){
      /* add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
    };
  };
  
  addClickListenersToTags();
  
  ////GENERATE AUTHORS //////
  
  function generateAuthors(){
    /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles){
      /* find author wrapper */
      const authorList = article.querySelectorAll(optArticleAuthorSelector);
      /* make html variable with empty string */
      let html = '';
      /* get tags from author-tags attribute */
      const articleAuthors = article.getAttribute('data-author');
      /* START LOOP: for each author */
      for (let author in articleAuthors){
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#author-' + author + '"<span>' + author + '</span></a></li>';
        /* add generated code to html variable */
        html = html +linkHTML;
      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
  authorList.innerHTML = html;
    /* END LOOP: for every article: */
    }
  }
  
  generateAuthors(); 
  
  
  ///// AUTHOR CLICK HANDLER /////
  
  function authorClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
    
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
  
    /* make a new constant "href" and read the attribute "href" of the clicked element */
   const href = clickedElement.getAttribute('href');
  
    /* make a new constant "tag" and extract tag from the "href" constant */
   const author = href;
  
    /* find all tag links with class active */
   const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
    
    /* START LOOP: for each active tag link */
    for (let activeAuthor of activeAuthors){
      /* remove class active */
      activeAuthor.classList.remove('active');
    /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const authorLinks = document.querySelectorAll('a[href^="#author-' + author + '"]');
  
    /* START LOOP: for each found tag link */
    for (let authorLink of authorLinks){
      /* add class active */
      authorLink.classList.add('active');
    /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags="' + author + '"]');
  }
  
  
  ///// ADD CLICK LISTENERS TO AUTHORS //////
  
  function addClickListenersToAuthors(){
    /* find all links to authors */
    const authorLinks = document.querySelectorAll('a[href^="#author-"]');
    
    /* START LOOP: for each link */
    for (let author of authorLinks){
      /* add tagClickHandler as event listener for that link */
      author.addEventListener('click', authorClickHandler);
    /* END LOOP: for each link */
    };
  };
  
  addClickListenersToAuthors();