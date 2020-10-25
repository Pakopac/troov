export default function ({ vue, store, redirect }) {
    // Si l'utilisateur n'est pas authentifié
    if (!store.state.authenticated) {
      return redirect('/login')
    }
  }
  