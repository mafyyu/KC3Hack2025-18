import { supabase } from "@/supabase/supabase.config";

export async function sentPost(
    filePath:string,
    title:string,
    text:string|null,
    judge:boolean,
    latitude:number,
    longitude:number
) {
    try{
        const { data: urlData } = await supabase
        .storage
        .from('PostImage')
        .getPublicUrl(filePath);

        const imageUrl = urlData?.publicUrl;

        const {data,error} = await supabase
        .from("Post")
        .insert({
            title:title,
            text:text,
            image:imageUrl,
            judge:judge,
            latitude:latitude,
            longitude:longitude
        })
        if(error){console.log(error)}
    }
    catch(error){
        console.log("insert error",error)
    }
}