todos = ['Clean Kitchen', 'Cook dinner'];
let input = prompt('What do you want to do?');
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('******************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('******************');
    }
    else if (input === 'new') {
        const newtodo = prompt('What do you want to add to the todo list?');
        todos.push(newtodo);
        console.log(`Added ${newtodo} to the list`);
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('What index do you want to delete'));
        if (!Number.isNaN(index)) {
            const deletedToDo = todos.splice(index, 1);
            console.log(`Deleted ${deletedToDo}`);
        }
        else {
            console.log('Unknown index');
        }
    }
    input = prompt('What do you want to do?');
}
console.log("OK. YOU QUIT THE APP");