$('button').on('click', () => {
    let newToDo = document.querySelector('input').value;
    $('ul').append('<li onclick= "lineThrough(this)">'+ newToDo +'</li>');
});

function lineThrough (li) {
    // console.log(li);
    li.style = 'text-decoration: line-through';
}

// 1. try
// $('button').on('click', () => {
//     let newToDo = document.querySelector('input').value;
//     $('ul').append('<li>' + newToDo + '</li>');
//     $('li').on('click', () => {
//         $('li').css('text-decoration', 'line-through');
//     });
// });

// $('li').on('click', () => {
//     $('li').css('text-decoration', 'line-through');
// });

// $(document).on('click', 'li', function () {
//     $('li').css('text-decoration', 'line-through')
// });

// 2. try
// $(document).ready(function () {
//     $('button').click(function () {
//         let newToDo = document.querySelector('input').value;
//         $('ul').append('<li>' + newToDo + '</li>');
//     });

//     $(document).on('click', 'li', function() {
//         this.css('text-decoration', 'line-through');
//     });
// });
