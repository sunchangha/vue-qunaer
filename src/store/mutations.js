export default {
  // 修改state的值
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {
    }
  }
}
