import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'react-ecom-f0b12.firebaseapp.com',
  databaseURL: 'https://react-ecom-f0b12.firebaseio.com',
  projectId: 'react-ecom-f0b12',
  storageBucket: 'react-ecom-f0b12.appspot.com',
  messagingSenderId: '886446082322',
  appId: '1:886446082322:web:9e06b8429070ea017a4bcb'
}

export const creatUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const userSnap = await userRef.get()

  if (!userSnap.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData
      })
    } catch (e) {
      console.log('Error creating user', e.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const {title, items } = doc.data()

    return {
      title,
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase
