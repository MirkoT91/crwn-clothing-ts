import { createSelector } from 'reselect';
import { RootState } from '../store';

// @ts-ignore
import { CategoriesState } from './categories.reducer.tsx';
// @ts-ignore
import { CategoryMap } from './categories.types/tsx';

const selectCategoryReducer = (state:RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);