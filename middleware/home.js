export default function ({ store, redirect }) {
    if (!store.state.auth.loggedIn) {
        return redirect('/login')
    }
    else{
      return redirect('/anime/list')
    }
}
  