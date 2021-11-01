const API_URL = "http://localhost:3000/api/posts/";

const submitNewPost = (event) => {
  
   const title =  document.getElementById("post-title").value;
  
   const content = document.getElementById("form-post-content").value;
   const input = document.getElementById("form-post-image");
  
   let data =new FormData();

   data.append("post-image",input.files[0]);
   data.append("title",title);
   data.append("content",content);


   fetch(API_URL,{
       method:"POST",
       body:data
   })
   .then(() => {
    
        
        window.location.href = "index.html";
   
      
   })

}