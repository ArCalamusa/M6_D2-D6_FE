import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { getPosts } from '../../Reducers/postsSlice'
import { addNewPost } from '../../Reducers/addNewPostSlice'
import { Toast } from '../../utilities/notifications'

const AddPostForm = ({ close }) => {
    const toast = new Toast('Post salvato correttamente')
    const noFile = new Toast('File mancante')
    const [file, setFile] = useState(null)
    const [formData, setFormData] = useState({})


    const dispatch = useDispatch()

    const onChangeHandleFile = (e) => {
        //sempre uguale per upload singolo
        setFile(e.target.files[0])
    }

    console.log(formData)

    //handler
    const upLoadFile = async (file) => {
        const fileData = new FormData()
        fileData.append('img', file)

        try {
            const response = await fetch('http://localhost:5050/posts/uploadImg', {
                method: 'POST',
                body: fileData
            })
            return await response.json()
        } catch (error) {
            console.error('File upload error', error)
        }
    }

    const submitPost = async (e) => {
        e.preventDefault()

        if (file) {
            try {
                const uploadedFile = await upLoadFile(file)
                const postsFormData = {
                    ...formData,
                    img: uploadedFile.img
                    //è la stringa restituita dalla promise
                }
                dispatch(addNewPost(postsFormData))
                    .then(() => {
                        toast.success('salvato correttamente')
                        dispatch(getPosts({ page: 1, pageSize: 8 }))
                    })
            } catch (error) {
                toast.warning('Salvataggio fallito')
                console.error('Salvataggio fallito', error)
            }
        } else {
            console.error('selezionare un file')
            toast.missedFile('File mancante')
        }
    }

    return (
        <div className='p-4'>
            <form onSubmit={submitPost} encType='multipart/form-data'>
                {/* per far si che il form accetti input normali e file */}
                <div className='d-flex justify-center items-center flex-wrap gap-2'>
                    <input
                        type="text"
                        name="title"
                        placeholder="titolo"
                        className="text black w-full rounded mb-2 p-2"
                        onChange={(e) => setFormData({
                            ...formData,
                            title: e.target.value
                        })}
                    />
                    <input
                        type="text"
                        name="author"
                        placeholder="autore"
                        className="text black w-full rounded mb-2 p-2"
                        onChange={(e) => setFormData({
                            ...formData,
                            author: e.target.value
                        })}
                    />
                    <select
                        name="rate"
                        placeholder="voto"
                        className="text black w-full rounded mb-2 p-2"
                        onChange={(e) => setFormData({
                            ...formData,
                            rate: e.target.value
                        })}
                    >
                        <option>Dai un voto</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <textarea
                    placeholder="Testo del post..."
                    className="text-black rounded p-2 mb-1"
                    rows={8}
                    onChange={(e) => setFormData({
                        ...formData,
                        content: e.target.value
                    })}
                />
                <div>

                    <input
                        name="img"
                        type="file"
                        className="buttonInput text-black rounded"
                        onChange={onChangeHandleFile}
                    />
                </div>
                <div className="mt-2 d-flex justify-content-end">

                    <Button
                        type="submit"
                        variant="outline-success"
                    >
                        salva
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddPostForm