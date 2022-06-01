let threads = [
    {
        subject: "Thread 1",
        timestamp: "06/01/2022",
        comments: "0 comments"

    },
    {
        subject: "Thread 2",
        timestamp: "06/01/2022",
        comments: "0 comments"

    }
]

document.getElementById("forum").innerHTML =  
`
${threads.map(function(thread) {
  return `
  <li class=row>
    <a href="thread-1.html">
        <h4 class="subject">${thread.subject}</h4>
        <div class="bottom">
            <p class="timestamp">${thread.timestamp}</p>
            <p class="comment-count">${thread.comments}</p>
        </div>
    </a>
  </li>
  `
}).join('')} 
`
let addForum = `
<form id="add-thread" action="#">
<input id="subject" placeholder="Subject">
<textarea id="body" placeholder="type out your thoughts and questions..."></textarea>
<button>add thread</button>
</form>
`

function addThread() {
    threads.push(
        {
            subject:dfdfjdfkd,
            timestamp: getDate,
            comments: "0 comments"
        }
    )
}
