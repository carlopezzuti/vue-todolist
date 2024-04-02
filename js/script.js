const { createApp } = Vue;

createApp({
    data(){
        return{
            userTask: "",
            todoTasks: [],
        }
    },
    methods: {
        addNewTask(){
            const newActivity = {};
            newActivity.task = this.userTask.trim();
            newActivity.done = false;
            this.todoTasks.push(newActivity);
            this.userTask = "";
        },
        isDone(index){
            this.todoTasks[index].done = true;
        },
        eliminateTask(index){
            this.todoTasks.splice(index, 1);
        }
    }
}).mount(app);