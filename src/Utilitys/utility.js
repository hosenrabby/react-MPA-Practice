import { toast } from "react-toastify";


const successNotify = () => toast.success('Item Added to your Lists',{theme:"colored"});
const errorNotify = () => toast.warning('Item allready exist to your Lists',{theme:"colored"});

const getItemsfromStored = (key)=>{
    const getstoreData = localStorage.getItem(key)
     if (getstoreData) {
        const getParsData = JSON.parse(getstoreData)
        return getParsData
     } else return [];
}


const addItemToStored = (key,data)=>{
    const storedData = getItemsfromStored(key)
    if (storedData.includes(data)) {
        errorNotify()
    } else {
        const updateData = [...storedData,data]
        const STRstoredData = JSON.stringify(updateData)
        
        localStorage.setItem(key,STRstoredData)
        successNotify()
    }
}

export {addItemToStored ,getItemsfromStored}