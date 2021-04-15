import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import { Todo } from '~/models/Todo'
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

export const state = () => ({
    todos: [] as Todo[],
})

export type RootState = ReturnType<typeof state>

//addtodoの際の引数
interface Obj {
    task: string
    userId: string
}

//@Getter
export const getters = getterTree(state, {

    //タスクをIDで取得
    getTodoById(state, id: number): Todo {

        const searchTodo = state.todos.find(todos => todos.id == id);
        const returnTodo: Todo = {
            id: searchTodo?.id as number,
            text: searchTodo?.text as string,
            done: Number(searchTodo?.done),
            memo: searchTodo?.memo as string,
            registerDate: searchTodo?.registerDate as number,
            finishDate: searchTodo?.finishDate as number,
            userId: searchTodo?.userId as string
        }
        return returnTodo;
    },
})

//@Mutation
export const mutations = mutationTree(state, {
    //タスク追加
    addTodo(state, obj: Obj): void {
        console.log("mutation", obj);

        const todo: Todo = {
            // リストがない場合、id = 1
            // リストがある場合、id = リストの最終要素の id + 1
            id: state.todos.length === 0 ? 1 : state.todos[state.todos.length - 1].id + 1,
            text: obj.task as string,
            done: 0,
            memo: "",
            registerDate: Date.now(),
            finishDate: Date.now(),
            userId: obj.userId
        }
        // リストに Todo を追加

        state.todos.push(todo);
    },

    //完了フラグの変更
    changeDone(state, todo: Todo): void {
        const todo1 = state.todos.find(todos => todos.id == todo.id);
        if (todo1) {
            if (todo1.done == 0) {
                todo1.done = 1;
            } else if (todo1.done == 1) {
                todo1.done = 2;
            } else if (todo1.done == 2) {
                todo1.done = 0
            }
        }
    },
    updateTodo(state, todo: Todo): void {
        const updateTodo = state.todos.find(todos => todos.id == todo.id);
        if (updateTodo) {
            updateTodo.text = todo.text
            updateTodo.memo = todo.memo
            updateTodo.finishDate = todo.finishDate
        }
        console.log("store", updateTodo);

    },
    //削除
    delete(state, todo: Todo): void {
        state.todos = state.todos.filter(todos => todos.id !== todo.id);
    },
})

//@Action
export const actions = actionTree({ state, getters, mutations }, {
    setAddTodo({ commit }, obj: Obj) {
        commit('addTodo', obj);
    },
    changeTodoDoneFlag({ commit }, todo) {
        commit('changeDone', todo);
    },
    deleteTodo({ commit }, todo) {
        commit('delete', todo);
    },
    update({ commit }, todo) {
        commit('updateTodo', todo);
    }

})

