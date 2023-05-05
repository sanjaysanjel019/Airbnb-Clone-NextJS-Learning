import {create} from "zustand"


interface IRegisterModalStore {
    isOpen: boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const useRegisterModal = create<IRegisterModalStore>((set)=>({
    isOpen:false,
    onOpen:()=> {
        console.log("Setting isOPen")
        set({isOpen:true})
    },
    onClose:()=> set({isOpen:false}),
}));

export default useRegisterModal;