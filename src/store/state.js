let defaultCity = '西安'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {
}

export default {
  city: defaultCity
}
