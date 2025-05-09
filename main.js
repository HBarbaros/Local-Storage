window.addEventListener("DOMContentLoaded", main);

const posts = [{
    id: 1,
    title: "A cute cat",
    imageUrl: "https://images.pexels.com/photos/5667033/pexels-photo-5667033.jpeg"
},
{
    id: 2,
    title: "A couple",
    imageUrl: "https://media.istockphoto.com/id/2171284183/sv/foto/a-couple-enjoys-a-joyful-moment-together-on-a-serene-autumn-day.jpg?s=1024x1024&w=is&k=20&c=G9co2jjmhpGCvVZ-t5yNUzwG4L55e5JsgSsBHxFNXu0="
},
{
    id: 3,
    title: "A nice car",
    imageUrl: "https://images.pexels.com/photos/3736135/pexels-photo-3736135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
}];

let likedPosts = [];

function main() {
    //What should the program do at the start?
    likedPosts = JSON.parse(localStorage.likedPosts ?? "[]");
    renderPosts();
}

function renderPosts() {
    const main = document.querySelector("main");
    main.innerHTML = null;

    for (const post of posts) {
        const article = document.createElement("article");
        article.className = "post-article";
        
        const heart = document.createElement("button");
        heart.textContent = likedPosts.includes(post.id) ? "❤️" : "🤍";
        heart.className = "like-button";
        heart.onclick = () => toggleLikedPost(post);

        const img = document.createElement("img");
        img.src = post.imageUrl;
        img.alt = post.title;
        img.className = "image";

        article.append(img);
        article.append(heart);
        main.append(article);
    }
}

function toggleLikedPost(post) {
    if (likedPosts.includes(post.id)) {
            likedPosts = likedPosts.filter((id) => id !== post.id);
    } else {
            likedPosts.push(post.id);
    }
    localStorage.likedPosts = JSON.stringify(likedPosts);
    renderPosts();
}
