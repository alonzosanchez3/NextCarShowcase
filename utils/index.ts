import { CarProps } from "@/types"

export const fetchCars = async() => {
  console.log(process.env.CAR_NINJA_API, 'hey')
  const headers = {
      'X-RapidAPI-Key': process.env.CAR_NINJA_API!,
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

export const generateCarImageUrl = (car: CarProps, angle?: string) => {

}