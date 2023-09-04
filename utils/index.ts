
export const fetchCars = async() => {
  const headers = {
      'X-RapidAPI-Key': '6867a3433amsh5df2f7b263326b1p1965a6jsn13331656facd',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
    headers
  })

  const result = await response.json()
  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05

  const milateRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  const rentalRatePerDay = basePricePerDay + milateRate + ageRate;

  return rentalRatePerDay.toFixed(0)
}