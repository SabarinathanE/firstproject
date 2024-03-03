import {useParams, useSearchParams} from "react-router-dom"

export default function Blogs() {
   const {blogId = ""} = useParams();
   const params = useSearchParams();
    console.log(params[0].get("color"))
    return (
    <div>blog{blogId}</div>
    
    )
}