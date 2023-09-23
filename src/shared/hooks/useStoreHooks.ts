import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "app/store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppDispatch = (): ThunkDispatch<RootState, undefined, AnyAction> &
  Dispatch<AnyAction> => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
