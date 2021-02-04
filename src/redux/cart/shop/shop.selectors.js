import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const shopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
