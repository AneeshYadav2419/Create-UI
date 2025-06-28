// //controlled components
// import { Input } from "postcss"
import { Button } from "./Button"
import { CrossIcon } from "./CrossIcon"
export function CreateContentModal ({open , onClose}){
    return <div>
        {open && 
        <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 
        opacity-60 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <CrossIcon />
                    </div>
                    <div>
                        <Input placeholder={"Title"}/>
                         <Input placeholder={"Link"}/>
                          </div>
                          <div className="flex justify-center">
                            <Button variant="primary" text="Submit" />
                          </div>
                    
                </span>
                </div>
                 </div>  }
    </div>
}

function Input ({onChange , placeholder} : {onChange: () => void}){
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded m-2"
        onChange={onChange}></input>
    </div>
}