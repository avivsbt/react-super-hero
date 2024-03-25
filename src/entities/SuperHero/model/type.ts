import { EntityState } from "@reduxjs/toolkit";
import { CancelTokenSource } from "axios";

export interface ISuperHeroState extends EntityState<ISuperHero> { }

export interface ISuperHero {
  id: string;
  name: string;
  powerstats: ISuperHeroPowerStats,
  biography: ISuperHeroBiography;
  appearance: ISuperHeroAppearance;
  work: ISuperHeroWork;
  connections: ISuperHeroConnections;
  image: ISuperHeroImage;
  updatedAt: number
}

export interface ISuperHeroImage {
  url: string;
}

export interface ISuperHeroPowerStats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface ISuperHeroAppearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  "eye-color": string;
  "hair-color": string;
}

export interface ISuperHeroBiography {
  "full-name": string;
  "alter-egos": string;
  aliases: string[];
  "place-of-birth": string;
  "first-appearance": string;
  publisher: string;
  alignment: string;
}

export interface ISuperHeroConnections {
  "group-affiliation": string;
  relatives: string;
}

export interface ISuperHeroWork {
  occupation: string;
  base: string;
}

export interface ISuperHeroReqDto {
  name: string;
  source: CancelTokenSource;
}

export interface ISuperHeroResDto {
  results: ISuperHero[];
}