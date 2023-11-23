import { key, value } from "./slugapi";

export const getapislug = async(params: { slug: string; })=>{
    let data;
    try {
     data =  await fetch(`${value}/${params.slug}?key=${key}`);
     data = await data.json();

     return data;
    } catch (error) {
      console.log(error);
    }
    
}



export const getapihome = async()=>{
  let data;
  try {
    data = await fetch(`${process.env.URL_OF_PAGES}`);
    data = await data.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}