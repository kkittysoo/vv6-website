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
const addForum = `
<form id="add-thread" action="#">
<input id="subject" placeholder="Subject">
<textarea id="body" placeholder="type out your thoughts and questions..."></textarea>
<button>add thread</button>
</form>
`

function getData(e) {
    const subject = document.getElementById("subject").value
    const body = document.getElementById("body").value
    let today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth() + 1;
    const dd = today.getDay();
    
    today = mm + '/' + dd + '/' + yyyy

    threads.push(
        {
            subject,
            today,
            comments: "0 comments"
        }
    )
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
}

const slideParent = document.querySelector('.text');
const slideChildren = slideParent.querySelectorAll('.slide');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = slideChildren[0].clientWidth;

slideParent.style.transform = 'translateX(' +  (-size * counter) + 'px)';

nextBtn.addEventListener('click', function() {
    slideParent.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    console.log(counter)
});