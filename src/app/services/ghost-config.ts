// import GhostContentAPI from "@tryghost/content-api";


// const api = new GhostContentAPI({
//     url:"http://localhost:2370",
//     key:"257399b98e446036aafa98358b",
//     version:"v5.0"
// })


export async function getPosts(){

    let data = await fetch("http://localhost:2370/ghost/api/content/posts/?key=257399b98e446036aafa98358b&include=tags,authors");
    let value = await data.json();
    // console.log(value);
    return value.posts;
}