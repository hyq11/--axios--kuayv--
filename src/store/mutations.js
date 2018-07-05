const mutations={
    add(state,news){
        state.dialog.push(news);
    },
    changToken(state,value){
        state.token=value;
        localStorage.setItem("token",state.token);
    }
}
export default mutations;