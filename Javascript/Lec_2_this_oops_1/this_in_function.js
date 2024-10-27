// function Post(username){
//     console.log(`this.author ${this.author}`)
//     this.author = "Ram"
//     console.log(`this.author after initialisation ${this.author}`)
//     this.info = function(){
//         console.log(`${this.author} has written this post`)
//     }
//     console.log(`this inside Post ${this}`)
// }

// let post = new Post()
// console.log(post.author)

//After let post = new Post(), the post object will have the following structure:
/*
{
    author: "Ram",
    info: function() {
        console.log(`${this.author} has written this post`);
    }
}
********/ 
function Post1(){
    this.title = "My first post"
}
var post = new Post1()
/*if the function doesn’t returns anything then the new keyword will return this context 
and that’s why in the output we get an “instance”.
*********/ 

//// Output:
// Post { title: 'My first post' }
// console.log(`post is ${post}`)
// Post1.prototype.title = `My last post`
// console.log(Post1.prototype)//My last post
// console.log(post.__proto__)//My last post

// 🔴 When returning an object (not null)

// function AnObject() {
//     this.title = "The return is an object";
//     return { greeting: "Hello World" };
// }

// var greeting = new AnObject()
// console.log(`greeting is ${JSON.stringify(greeting)}`)


// 🔴 When returning an object (not null)
// function AnObject() {
//     this.description = "The return is an object";
//     return ["Hello", "World"];
//   }
  
// var greeting = new AnObject();
// console.log(greeting); // [ 'Hello', 'World' ]

// 🔴 When not returning an object

function NotAnObject() {
    this.description = "The return is an object";
    return "Hello World";
}
  
var greeting = new NotAnObject();
console.log(greeting); // NotAnObject { description: 'The return is an object' }