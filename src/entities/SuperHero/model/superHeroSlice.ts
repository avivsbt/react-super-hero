
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ENameSlice } from "shared/types/type";
import { ISuperHero, ISuperHeroState } from "./type";
import { RootState } from "app/store/store";

const superHeroAdapter = createEntityAdapter<ISuperHero>({
  selectId: (hero) => hero.id,
  sortComparer: (a, b) => a.updatedAt - b.updatedAt
})

export const superHeroSlice = createSlice({
  name: ENameSlice.SUPER_HERO,
  initialState: superHeroAdapter.getInitialState() as ISuperHeroState,
  reducers: {
    superHerodAdded: superHeroAdapter.addOne,
    superHeroUpdated: superHeroAdapter.updateOne,
    superHeroRemove: superHeroAdapter.removeOne,
  }
});

export const { superHerodAdded, superHeroUpdated, superHeroRemove } = superHeroSlice.actions;

export const selectorSuperHero = superHeroAdapter.getSelectors<RootState>(
  (state) => state.superHero
)

export const { selectAll, selectById, selectTotal, selectEntities, selectIds } = selectorSuperHero

export default superHeroSlice;