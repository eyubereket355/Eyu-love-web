function startStory() {
  story.classList.remove('hidden');
  story.innerHTML = '<span style="color:violet">Do you know there are 3 ways to be beautiful? 💫</span>';
  setTimeout(() => { story.innerHTML = '<span style="color:lightblue">3... 💖</span>'; }, 3000);
  setTimeout(() => { story.innerHTML = '<span style="color:lightgreen">2... 💜</span>'; }, 5000);
  setTimeout(() => { story.innerHTML = '<span style="color:orange">1... 💗</span>'; }, 7000);
  setTimeout(() => { story.innerHTML = '<span style="color:yellow">Why are you waiting? 😄</span>'; }, 9000);
  setTimeout(() => { story.innerHTML = '<span style="color:deeppink">You are already beautiful 😍</span>'; }, 11000);
  setTimeout(() => { story.innerHTML = '<span style="color:hotpink">Very beautiful in fact… I love you so much ❤️❤️❤️</span>'; }, 13000);
}

    