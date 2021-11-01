const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = (event) => {


  getPosts(event);
};

const getPosts = () => {
  fetch(API_URL, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    
      buildPosts(data);
    });
};

const buildPosts = (blogPosts) => {
  let blogPostsContent = "";
 
  for (let i=0;i<blogPosts.length;i++) {
   
    const {id,added_date} = blogPosts[i];
   
    const date = new Date(parseInt(blogPosts[i].added_date));
   
    const postDate = date.toDateString();
   
 
    const postLink = `/post.html?id=${blogPosts[i].id}`;
   
    const postImage = `${API_BASE_URL}${blogPosts[i].post_image}`;
    blogPostsContent += `
    <a class="post-link" href = "${postLink}" > 
          <div class="post"> 
              <div class="post-image"   > 
                  <img src="${postImage}" alt=""/>   
            
              </div> 
              <div class="post-content">
                <div class="date" > ${postDate} </div>
                <div class="title "> ${blogPosts[i].title}  </div>
                <div class="short-description"> ${blogPosts[i].content}</div>
                <div> see more... </div>
              </div> 
  



          </div>
   </a> 
       
       `;
  }

  document.querySelector(".main-container").innerHTML = blogPostsContent;
};
