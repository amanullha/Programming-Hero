import { useRouter } from "next/router";

function Document() {

    const router = useRouter();
    const params = router.query.params;
    console.log(params);
    

    if(params?.length==1){
        return (
            <div>
                <h1>length is : {params?.length}</h1>
                <h1>path is : {params[0]}</h1>
            </div>
        )
    }
    if(params?.length==2){
        return (
            <div>
                <h1>length is : {params?.length}</h1>
                <h1>path is : {params[0]} and {params[1]}</h1>
            </div>
        )
    }

    return (
        <div>
            
            <h1>Document</h1>
        </div>
    )
}

export default Document;








