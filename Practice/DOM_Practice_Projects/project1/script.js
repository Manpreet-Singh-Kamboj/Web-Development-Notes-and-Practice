const friends = [
  {
    name: "Robert Downey Jr.",
    imgUrl:
      "https://media.themoviedb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
    isFriend: false,
  },
  {
    name: "Tom Holland",
    imgUrl:
      "https://ew.com/thmb/guHFeR0xtDlfTpxHGnl7BmTwMEA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tom-holland-SPIDER-MAN-NO-WAY-HOME-040125-3d9d470cad3b4f9e95761a96c4517092.jpg",
    isFriend: false,
  },
  {
    name: "Chris Evans",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/1200px-ChrisEvans2023.jpg",
    isFriend: true,
  },
  {
    name: "Chris Hemsworth",
    imgUrl:
      "https://images.mubicdn.net/images/cast_member/24207/cache-62264-1615052248/image-w856.jpg",
    isFriend: false,
  },
  {
    name: "Robert Downey Jr.",
    imgUrl:
      "https://media.themoviedb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
    isFriend: false,
  },
  {
    name: "Tom Holland",
    imgUrl:
      "https://ew.com/thmb/guHFeR0xtDlfTpxHGnl7BmTwMEA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tom-holland-SPIDER-MAN-NO-WAY-HOME-040125-3d9d470cad3b4f9e95761a96c4517092.jpg",
    isFriend: false,
  },
  {
    name: "Chris Evans",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/1200px-ChrisEvans2023.jpg",
    isFriend: true,
  },
  {
    name: "Chris Hemsworth",
    imgUrl:
      "https://images.mubicdn.net/images/cast_member/24207/cache-62264-1615052248/image-w856.jpg",
    isFriend: false,
  },
  {
    name: "Robert Downey Jr.",
    imgUrl:
      "https://media.themoviedb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
    isFriend: false,
  },
  {
    name: "Tom Holland",
    imgUrl:
      "https://ew.com/thmb/guHFeR0xtDlfTpxHGnl7BmTwMEA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tom-holland-SPIDER-MAN-NO-WAY-HOME-040125-3d9d470cad3b4f9e95761a96c4517092.jpg",
    isFriend: false,
  },
  {
    name: "Chris Evans",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/1200px-ChrisEvans2023.jpg",
    isFriend: true,
  },
  {
    name: "Chris Hemsworth",
    imgUrl:
      "https://images.mubicdn.net/images/cast_member/24207/cache-62264-1615052248/image-w856.jpg",
    isFriend: false,
  },
  {
    name: "Robert Downey Jr.",
    imgUrl:
      "https://media.themoviedb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
    isFriend: false,
  },
  {
    name: "Tom Holland",
    imgUrl:
      "https://ew.com/thmb/guHFeR0xtDlfTpxHGnl7BmTwMEA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tom-holland-SPIDER-MAN-NO-WAY-HOME-040125-3d9d470cad3b4f9e95761a96c4517092.jpg",
    isFriend: false,
  },
  {
    name: "Chris Evans",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/1200px-ChrisEvans2023.jpg",
    isFriend: true,
  },
  {
    name: "Chris Hemsworth",
    imgUrl:
      "https://images.mubicdn.net/images/cast_member/24207/cache-62264-1615052248/image-w856.jpg",
    isFriend: false,
  },
  {
    name: "Robert Downey Jr.",
    imgUrl:
      "https://media.themoviedb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
    isFriend: false,
  },
  {
    name: "Tom Holland",
    imgUrl:
      "https://ew.com/thmb/guHFeR0xtDlfTpxHGnl7BmTwMEA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tom-holland-SPIDER-MAN-NO-WAY-HOME-040125-3d9d470cad3b4f9e95761a96c4517092.jpg",
    isFriend: false,
  },
  {
    name: "Chris Evans",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/1200px-ChrisEvans2023.jpg",
    isFriend: true,
  },
  {
    name: "Chris Hemsworth",
    imgUrl:
      "https://images.mubicdn.net/images/cast_member/24207/cache-62264-1615052248/image-w856.jpg",
    isFriend: false,
  },
];

const friendList = document.querySelector(".friend-list");

friends.forEach((friend) => {
  const friendDiv = document.createElement("div");
  friendDiv.classList.add("friend");
  const friendImg = document.createElement("img");
  friendImg.src = friend.imgUrl;
  const friendInfo = document.createElement("div");
  const friendName = document.createElement("h3");
  friendName.textContent = friend.name;
  const friendBtn = document.createElement("button");
  friendBtn.textContent = friend.isFriend ? "Remove Friend" : "Add Friend";
  friendBtn.style.backgroundColor = friend.isFriend ? "transparent" : "#0095f6";
  friendInfo.appendChild(friendName);
  friendInfo.appendChild(friendBtn);
  friendInfo.setAttribute("class", "friend-info");
  friendDiv.appendChild(friendImg);
  friendDiv.appendChild(friendInfo);
  friendList.appendChild(friendDiv);
  friendBtn.addEventListener("click", () => {
    friendBtn.innerHTML = friend.isFriend
      ? `Removing Friend <span>X</span>`
      : `Request Sent <span><i class="ri-check-double-fill"></i></span>`;
    friendBtn.style.backgroundColor = friend.isFriend ? "#E62020" : "#1FD655";
    friendBtn.style.borderColor = friend.isFriend ? "#E62020" : "#1FD655";
    const tm = setTimeout(() => {
      friend.isFriend = !friend.isFriend;
      friendBtn.textContent = friend.isFriend ? "Remove Friend" : "Add Friend";
      friendBtn.style.backgroundColor = friend.isFriend
        ? "transparent"
        : "#0095f6";
      friendBtn.style.borderColor = "#0095f6";
      clearTimeout(tm);
    }, 4000);
  });
});
