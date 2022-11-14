import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from '@supabase/supabase-js'

//custom hook
function useForm(propsDoForm){
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});//limpa o form
        }
    }
}
//https://app.supabase.com/project/
//https://www.npmjs.com/package/@supabase/supabase-js
const PROJECT_URL = "https://eokdsfsfvsfeomkxqiax.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVva2RzZnNmdnNmZW9ta3hxaWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTA0OTMsImV4cCI6MTk4Mzk2NjQ5M30.HibMK-W0diDft0RGB3CMlExOdYYF9AgdTC3xUzvQ9z0"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)
//console.log("🚀 ~ file: index.js ~ line 29 ~ supabase", supabase)
//get youtube video id - comando para o git
// function getVideoId(url) {
    //     const videoId = url.split("v=")[1];
    //     const ampersandPosition = videoId.indexOf("&");
    //     if (ampersandPosition !== -1) {
        //         return videoId.substring(0, ampersandPosition);
//     }
//     return videoId;
// }

function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {
    const formCadastro = useForm({ 
        initialValues: {titulo: "Greeen House", url: "https://www.youtube.com/watch?v=QOLeInFts2Y"}});//initial values
        
        
    const [formVisivel, setFormVisivel] = React.useState(false);
    
    //TODO:[x] Falta o botão
    //TODO:[x] Modal
    // -> TODO: [x]Precisamos controlar o state
    // -> TODO:[x]Formulário em si
    //TODO: o que precisamos para o form funcionar?
    // pegar os dados, que precisam vir do state
    // -precisamos ter um onSubmite do nosso form
    // - limpar o formulário após o submit

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() =>setFormVisivel(true) }>
                +
            </button>
            {/* poderia ser ternario{formVisivel ?():false} */}
            {/* operadores de circuitos true && "OI" = "oi" e false && "oi" = false */}
            {formVisivel &&(
                            <form onSubmit ={(evento) => {
                                evento.preventDefault();
                                console.log(formCadastro.values);

                                // Contrato entre o nosso Front e o BackEnd
                                supabase.from("video").insert({
                                    title: formCadastro.values.titulo,
                                    url: formCadastro.values.url,
                                    thumb: getThumbnail(formCadastro.values.url),
                                    playlist: "Arte Digital",
                                })
                                .then((oqueveio) => {
                                    console.log(oqueveio);
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                                setFormVisivel(false); //fecha o form depois de apertar o cadastrar
                                formCadastro.clearForm();//limpa o form depois de apertar cadastrar
                            }}>
                            <div>
                                <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                    X
                                </button>
                                <input 
                                    placeholder="Título do vídeo" 
                                    name="titulo"
                                    value={formCadastro.values.titulo} 
                                    onChange={formCadastro.handleChange} />
                                <input 
                                    placeholder="URL" 
                                    // onChange={(evento) => {
                                    //     const value = evento.target.value;
                                    //     console.log(value);
                                    //     setValues({
                                    //         ...values, //spread operator - espalha 
                                    //         url: value,    
                                    //     });
                                    // }} />   
                                    name="url"
                                    value={formCadastro.values.url}
                                    onChange={formCadastro.handleChange} />
                                <button type="submit">
                                    Cadastrar
                                </button>

                                    {/* <img src={`https://img.youtube.com/vi/QOLeInFts2Y/hqdefault.jpg`} /> */}
                                    

                            </div>
                        </form>
            )} 
        </StyledRegisterVideo>
    )

}
