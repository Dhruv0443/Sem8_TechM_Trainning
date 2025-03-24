document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById("form");
    let input = document.getElementById("input");
    let msg = document.getElementById("msg");
    let posts = document.getElementById("posts");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Button Clicked");
        formValidation();
    });
    let formValidation = () => {
        if (input.value === "") {
            msg.innerHTML = "Posts cannot be blank";
            console.log("Failure");
        } else {
            console.log("Success");
            msg.innerHTML = "";
            acceptData();
            createPost();
        }
    };
    let data = {};
    let acceptData = () => {
        data["text"] = input.value;
        console.log(data);
    };
    let createPost = () => {
        posts.innerHTML += `
            <div>
                <p>${data["text"]}</p> 
                <span class="options">
                    <i onclick="editPost(this)" class="fas fa-edit"></i>
                    <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
                </span>
            </div>`;
        input.value = "";
    };
    window.deletePost = (e) => {
        e.parentElement.parentElement.remove();
    };
    window.editPost = (e) => {
        input.value = e.parentElement.previousElementSibling.innerHTML;
        e.parentElement.parentElement.remove();
    };
});
