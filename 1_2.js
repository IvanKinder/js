"use strict";

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (t) {
    this.text = t;
}

function AttachedPost(uthor, text, date) {
    Post.call(this, uthor, text, date);
    this.highlighted = false;
}

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let my_post = new Post('Jack', 'first text', Date());
my_post.edit('smth txt');

console.log(my_post.author);
console.log(my_post.text);
console.log(my_post.date);

let new_post = new AttachedPost('John', 'new text', Date());

new_post.makeTextHighlighted();

console.log(new_post.author);
console.log(new_post.text);
console.log(new_post.date);
console.log(new_post.highlighted);

class Post1 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(t) {
        this.text = t;
    }
}

let my_post1 = new Post1('Jack', 'first text', Date());
my_post1.edit('smth txt');

console.log(my_post1.author);
console.log(my_post1.text);
console.log(my_post1.date);

class AttachedPost1 extends Post1 {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let new_post1 = new AttachedPost1('John', 'new text', Date());

new_post1.makeTextHighlighted();

console.log(new_post1.author);
console.log(new_post1.text);
console.log(new_post1.date);
console.log(new_post1.highlighted);