/* eslint-disable react/no-unescaped-entities */

import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { Prediction } from "./Prediction"

export const Body = ()=>{
    const [data, setData] = useState(null)
    const mutation = useMutation({
        mutationFn:(data)=>axios.post('https://fastapimodel.onrender.com/predict', data,{
            headers: {
              "Content-Type": "multipart/form-data",  // Assurez-vous que le type est 'multipart/form-data'
            }
        }).then(res=>res.data),
        onSuccess:(data)=>{
            setData(data)
        }
    })
    
    const handleChange = (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', e.target.files[0])
        mutation.mutate(formData)
    }
    return (
        <div className="relative h-5/6 w-full flex flex-col justify-center gap-10">
            <img src="/elipse-blue-blur.png" alt="" className="absolute left-1/2 w-[60rem] -translate-x-1/2" />
            <div className="text-center">
                <h2 className="relative text-xl sm:text-3xl md:text-4xl lg:text-6xl  font-poppins  uppercase font-bold text-white">
                     <span className="bg-gradient-to-t to-blue-900 bg-clip-text text-transparent from-blue-400">Classificateur</span> D'IMAGE <span className="bg-gradient-to-t to-blue-900 bg-clip-text text-transparent from-blue-400">Numero 1</span><br />
                     Chiens VS Chats 
                </h2>
            </div>
            {
                data?.prediction&&!mutation.isLoading && <Prediction text={data.prediction} />
            }
            <label className="w-5/6 relative text-white font-bold text-xl transition-all hover:bg-blue-700 bg-blue-600 mx-auto flex cursor-pointer justify-center py-5 rounded">
                {
                    mutation.isLoading?'Loading...':"Choisir une image"
                }
            <input onChange={handleChange} type="file" className="hidden" />
            </label>
        </div>
    )
}