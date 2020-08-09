

// // 1. As a user, i should see the timer increment every second once the page has loaded

// let counter = document.querySelector('#counter')
// let x = setInterval(incremenetSeconds, 1000)

// function incremenetSeconds() {
    
//         let x = parseInt(counter.innerText)
//         x += 1;
//         counter.innerText = x
//     }


// // 2. As a user, i can manually increment and decrement the counter as i like

// let minusButton = document.querySelector("[id='-']")
//     minusButton.addEventListener ("click", (evt) => {
//         let x = parseInt(counter.innerText)
//         x -= 1
//         counter.innerText = x
//     })

// let addButton = document.querySelector("[id='+']")
//     addButton.addEventListener("click", (evt) => {
//         incremenetSeconds()
//     })

// // 3. As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number

// let likeButton = document.querySelector("[id='<3']")
// const likeContainer = document.querySelector(".likes")
 

// let numLikes = {};

//     function likeAmount() {
//         let second = counter.innerText // use html inner string at moment to collect the second
//             numLikes[second] = numLikes[second] || 0 // assigns key to numLikes object
//             numLikes[second] += 1 // adds value to key and aggragates do it.
        
//     }

      
//         // have not been able to create uniq keys string updated with number of likes
//     likeButton.addEventListener ('click', (evt) => {
//         console.log(evt.target)
//         likeAmount()
//         let newLike = document.createElement('li')
//         for (let key in numLikes) {
//             newLike.innerText = `${key} has been liked ${numLikes[key]}`
//         }
//         likeContainer.append(newLike)  
//     })

//     // 4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'

// let pauseButton = document.querySelector('#pause')
// pauseButton.addEventListener("click", (evt) => {
//     console.log(evt.target)
//     if (pauseButton.innerText == 'pause'){
//         pauseButton.innerText = 'resume'
//         likeButton.disabled = true
//         addButton.disabled = true
//         minusButton.disabled = true
//         clearInterval(x)
//     }
//     else if (pauseButton.innerText == 'resume'){
//         pauseButton.innerText = 'pause'
//         likeButton.disabled = false
//         addButton.disabled = false
//         minusButton.disabled = false
//      //havnt figured out how to enable the interval
//     }
// })

// // 5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
// let coms = document.querySelector('#list')
// let form = document.querySelector('#comment-form')

// form.addEventListener('submit', (evt) => {
//     evt.preventDefault()
//     let newLi = document.createElement('li')
//     let newComment = evt.target.comment.value
//     newLi.innerText = (newComment)
//     coms.append(newLi)
// })