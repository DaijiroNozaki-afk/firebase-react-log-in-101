import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function Home() {
    const [ user, loading, error ] = useAuthState(auth)
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }
  return (
    <div>
        {user ? (
            <>
                <UserInfo />
                <SignOutButton />
            </>
        ) : (
            <SignInButton />
        )}
    </div>
  )
}

export default Home

//グーグルボタンでサインイン
function SignInButton() {
    const signInWithGoogle = () => {
        //firebase を使ってグーグルでサインインする
        signInWithPopup( auth, provider )
    }
    return (
        <button onClick={signInWithGoogle}>
            <p>グーグルでサインイン</p>
        </button>
    )
}
//グーグルボタンでサインアウト
function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    )
}
function UserInfo() {
    
    return (
        <div className='userInfo'>
            <img src={auth.currentUser.photoURL} alt="" />
            <p>{auth.currentUser.displayName}</p>
        </div>
    )
}