import { AxiosError, AxiosResponse } from "axios";
import { ISuperHeroReqDto, ISuperHeroResDto } from "../model/type";
import { api } from "shared/lib/apiClient";

const superHeroEndpoints = {
  getSuperHero: "/search/",
};

const superHeroApi = {
  getSuperHero: (payload: ISuperHeroReqDto): Promise<AxiosResponse<ISuperHeroResDto, AxiosError>> =>
    api.get(`${superHeroEndpoints.getSuperHero}${payload.name}`),
};

export default superHeroApi;
