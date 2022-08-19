import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { updateDoc, doc } from 'firebase/firestore';
import { setUser } from '../userSlice';
import { db } from '../../../../firebase/firebaseConfig';
import { storage } from '../../../../firebase/firebaseConfig';
import { ref, uploadBytes, deleteObject, getDownloadURL } from 'firebase/storage';

type ImageThunkType = {
    image: string,
    file: File
}

export const uploadProfileImage = createAsyncThunk('user/uploadProfileImage', async ({ image, file }: ImageThunkType, { dispatch, getState }) => {

    const userState = (getState() as RootState).user.user

    const fileReff = ref(storage, image);

    console.log(image, file)

    if(userState.image) {
        await deleteObject(ref(storage, userState.image))
    }

    console.log(1)
    
    await uploadBytes(fileReff, file)

    const imageUrl = await getDownloadURL(ref(storage, image))
    console.log(imageUrl)

    await updateDoc(doc(db, "users", userState.uid), {
        image: imageUrl
    });

    dispatch(setUser({...userState, image: imageUrl}))
})