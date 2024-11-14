async function getNames(){
    const userNames=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await userNames.json();
    if(users){
        return users;
    }
}
getNames();
let usersData=getNames();
usersData.then((data)=>{
    let allUsersName = document.getElementById("demo");
    
    for(let i=0;i<data.length;i++){
        let allUsers=data[i];

        let pForName=document.createElement("p");
        pForName.innerText=allUsers.name;
        allUsersName.appendChild(pForName)
    }
});

// ----------------------user-names---------------------------

async function getPosts(){
const userPosts=await fetch("https://jsonplaceholder.typicode.com/posts");
const post=await userPosts.json();
if(post){
    return post;
}
}
getPosts();
let userInfo=getPosts();
userInfo.then((data)=>{
    let info=document.getElementById("new-demo");
    for(j=0;j<data.length;j++){

        let allInfo=data[j];
 
        let pForPosts=document.createElement("p");
        pForPosts.innerText=allInfo.title,allInfo.body;
        info.appendChild(pForPosts)
    }
})


