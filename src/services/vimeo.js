export const getAlbum = async (id) => {
  // console.log(id);
  let bodyRequest = {
    id: id,
  };
  // console.log(bodyRequest);
  try {
    // `${process.env.REACT_APP_API_URL}/api/vimeo/getAlbum`
    let response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/vimeo/getAlbum`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyRequest),
      }
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
};

export const getCiclo = async (_) => {
  try {
    let response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/vimeo/getCicloData`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return {
      responseCode: 2,
      error: error,
    };
  }
};
