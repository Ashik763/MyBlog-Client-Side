const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/"

window.onload = () => {
    const id = getPostIdParam();
    getPost(id);
 
}

const getPostIdParam = () => {
    const queryString = window.location.search;
   
    const urlParams = new URLSearchParams(queryString);
   
    return urlParams.get("id");
}

const getPost = (id) => {
    const postId = getPostIdParam();
    fetch(`http://localhost:3000/api/posts/${id}`,{
        method: "GET",
    }).then((response) => {
        return response.json();
    })
    .then(data => {
        buildPost(data);
    })

}

const buildPost = (data) => {
    const mainContainer =  document.querySelector(".main-container");
    const backgroundImage = document.querySelector(".background-image");
    const postImage = `${API_BASE_URL}${data.post_image}`;

   
    
    const postDate = new Date(parseInt(data.added_date)).toDateString();
   
    backgroundImage.src = postImage;

  
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = `  <div class="title">
                                      <h3> ${data.title}!</h3>
                                </div>
                                <div class="date">Published on  ${postDate}  </div>
                                <div class="description">
                                   ${data.content}
                                </div>`;

                                
   

}