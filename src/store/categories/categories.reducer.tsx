// @ts-ignore
import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types.tsx";
// @ts-ignore
import { CategoryAction, fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess} from "./categories.action.tsx";
import { AnyAction } from "redux";

export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}

export const CATEGORIES_INITIAL_STATE = {
    categories : [],
    isLoading: false,
    error: null,
}

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE, 
    action = {} as CategoryAction
    ):CategoriesState => {
    if(fetchCategoriesStart.match(action)) {
        return { ...state, isLoading: true};
    }

    if(fetchCategoriesSuccess.match(action)) {
        return { ...state, categories: action.payload, isLoading: false};
    }

    if(fetchCategoriesFailed.match(action)) {
        return { ...state, error: action.payload, isLoading: false};
    }

    return state;
}