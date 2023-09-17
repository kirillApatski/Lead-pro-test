import {ResponseType} from "../../types/types.ts";

export async function getIpAddress() {
  try {
    const response = await fetch('https://ipinfo.io/json?token=d345cdefd68705');
    const data: ResponseType = await response.json();
    const userCountry = data.country
    return userCountry
  } catch (error) {
    console.log(error);
  }
}

