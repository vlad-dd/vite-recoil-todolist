import { atom, selector, selectorFamily } from 'recoil';
import { fetchData, TODO_LIST } from './todo';

export const todoFilter = atom({
    key: "todo/filter",
    default: "Show All",
});

export const todoList = atom({
    key: "todo/list",
    default: TODO_LIST,
});

export const todoTitle = atom({
    key: "todo/title",
    default: "Todo",
});

export const todoSelector = selector({
    key: 'todo',
    get: ({ get }) => {
        const filter = get(todoFilter);
        const list = get(todoList);
        switch (filter) {
            case "Show All":
                return list;
            case "Completed":
                return list.filter(({ isCompleted }) => Boolean(isCompleted));
            case "Uncompleted":
                return list.filter(({ isCompleted }) => !Boolean(isCompleted));
        };
    }
});

export const todoTitleSelector = selector({
    key: 'todo/title/selector',
    get: async ({ get }) => {
        const title = await fetchData();
        const countOfItems = get(todoList);
        return `${title} with ${countOfItems.length} items.`;
    }
});

export const todoItemByID = selectorFamily({
    key: '/todo/item',
    get: (itemID) => ({ get }) => {
        const list = get(todoList);
        return list.filter(({ id }) => id === itemID);
    }
  });
