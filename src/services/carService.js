const baseUrl = "http://localhost:3030/data/cars";

export const getCars = async () => {
  const response = await fetch(baseUrl);
  const jsonData = await response.json();
  if (response.status === 200) {
    return jsonData;
  } else {
    console.log("cannot get cars");
  }
};

export const createCar = async (carData, accessToken) => {
  const response = await fetch(baseUrl, {
    headers: {
        "X-Authorization": accessToken
    },
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(carData)
  });
  const jsonData = await response.json();
  if (response.status === 200) {
    return jsonData;
  } else {
    console.log("cannot get cars");
  }
};

export const getCarById = async (carId) => {
    const response = await fetch(baseUrl + "/" + carId);
    const jsonData = await response.json();
    if (response.status === 200) {
      return jsonData;
    } else {
      return "Cannot get the searched car!";
    }  
};

export const deleteCar = async (carId, accessToken) => {
    const response = await fetch(baseUrl + "/" + carId, {
        method: "DELETE",
        "Content-Type": "application/json",
        headers: {
            "X-Authorization": accessToken
        }
      });
      const jsonData = await response.json();
      if (response.status === 200) {
        return jsonData;
      }
};