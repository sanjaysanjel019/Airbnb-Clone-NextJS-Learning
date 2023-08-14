"use client";

import { Toaster } from "react-hot-toast";

/** 
* Why did we do this ? For Next.js 13 , 
* it must have a parent (at lease one) as a client componenent. So, for workaround, we need to wrap outer NPM pacakges as Provider
*/
const ToasterProvider = () => {
    return (
        <Toaster/>
    );
}

export default ToasterProvider;