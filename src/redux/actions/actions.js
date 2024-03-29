/** @format */

export const GET_PROFILES = "GET_PROFILES";
export const EDIT_PROFILES = "EDIT_PROFILES";

export const fetchProfilesAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNjMTZmYjRjYzU2YzAwMTU2ZjE5NmMiLCJpYXQiOjE2NjQ4ODI0MjcsImV4cCI6MTY2NjA5MjAyN30.2RDte3wVXvN0Cr-WCkw2llKFBIfW0ToegCCaQ9pNqyI",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        dispatch({
          type: GET_PROFILES,
          payload: data,
        });
      } else {
        console.log("ERROR !!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const Changed = (Exp) => ({
  type: "Changed",
  payload: Exp,
});

export const addToExp = (Exp, target) => ({
  type: "ADD_TO_EXP",
  payload: Exp,
  target: target,
});

export const editProfileAction = () => {
  return async (dispatch) => {
    try {
      const list = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        title: document.getElementById("title").value,
        area: document.getElementById("area").value,
        bio: document.getElementById("bio").value,
      };
      const response = await fetch(
        " https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          body: JSON.stringify(list),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNjMTZmYjRjYzU2YzAwMTU2ZjE5NmMiLCJpYXQiOjE2NjQ4ODI0MjcsImV4cCI6MTY2NjA5MjAyN30.2RDte3wVXvN0Cr-WCkw2llKFBIfW0ToegCCaQ9pNqyI",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        console.log(data);

        dispatch({
          type: EDIT_PROFILES,
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
