import axios from 'axios';
// const API_URL="http://localhost:8800/api-v1";
const API_URL="https://talent-track-y2w4.onrender.com/api-v1";
export const API=axios.create({
    baseURL:API_URL,
    responseType:"json",


})
export const apiRequest=async({url,token,data,method})=>{
    try {
       const result=await API(url,{
        method:method || "GET",
        data:data,
        headers:{
            "Content-type":"application/json",
            Authorization:token?`Bearer ${token}`:"",

        }
       }) 
       return result.data;
    } catch (error) {
        const err=error.response.data;
        console.log(err);
        return {status:err.success,message:err.message};
    }
}
export const handleFileUpload=async(uploadFile)=>{
    const formData=new FormData();
    formData.append("file",uploadFile);
    formData.append("upload_preset","JobPortal");
    try {
        const response=await axios.post("https://api.cloudinary.com/v1_1/dmxbagafy/image/upload/",formData);

    } catch (error) {
        console.log(error);
    }
}
export const updateURL=({
    pageNum,
    query,
    cmpLoc,
    sort,
    navigate,
    location,
    jtype,
    exp,
})=>{
    const params=new URLSearchParams();
    if(pageNum && pageNum>1){
        params.set("page",pageNum);

    }
    if(query){
        params.set("search",query);
    }
    if(jtype){
        params.set("jtype",jtype);
    }
    if(cmpLoc){
        params.set("location",cmpLoc);
    }
    if(sort){
        params.set("sort",sort);
    }
    if(exp){
        params.set("exp",exp);
    }
    const newURL=`${location.pathname}?${params.toString()}`;
    navigate(newURL,{replace:true});
    return newURL;
}