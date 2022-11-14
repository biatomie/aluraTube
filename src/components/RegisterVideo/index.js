import React from "react";
import { StyledRegisterVideo } from "./styles";

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

export default function RegisterVideo() {
    const formCadastro = useForm({ 
        initialValues: {titulo: "Greeen House", url: "QOLeInFts2Y"}});//initial values
    const [formVisivel, setFormVisivel] = React.useState(true);

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
                                <img name = "thumb" value = {formCadastro.values.url}  onChange={formCadastro.handleChange} src={`https://img.youtube.com/vi/${formCadastro.values.url}/hqdefault.jpg`} />
                            </div>
                        </form>
            )} 
        </StyledRegisterVideo>
    )

}
