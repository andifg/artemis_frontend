import { BodyCreateMeatPortion, MeatPortion } from "./types";
import { API } from "./config";

class MeatPortionService {
  public static CreateMeatPortion(
    bodyCreateMeatPortion: BodyCreateMeatPortion,
    userID: string,
  ): Promise<MeatPortion> {
    const url = `${API.baseURL}/api/v1/user/${userID}/meat-portions`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(bodyCreateMeatPortion),
    };

    return fetch(url, options)
      .then((response) => {
        if (response.status !== 201) {
          throw new Error(
            `Failed to create meat portion with error: ${response.statusText}`,
          );
        }
        return response.json();
      })
      .then((data) => {
        return data;
      });
  }
}

export { MeatPortionService };
