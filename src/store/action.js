export default{
  changeCity (ctx, city) {
    // commit去调用mutations修改state的值
    ctx.commit('changeMutations', city)
  }
}
