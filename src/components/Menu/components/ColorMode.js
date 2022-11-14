import React from "react";

export const ColorModeContext = React.createContext({ //por padrão o contexto está limpo, deixar global
    mode: "",
    setMode: () => { alert("Você precisa me configurar primeiro!")  },
    toggleMode: () => { alert("Você precisa me configurar primeiro!")  },
});

export default function ColorModeProvider(props) {
    //Entender porque está sendo ignorado
    const [mode, setMode] = React.useState(props.initialMode); //state é comum para a plicação inteira

    function toggleMode() { 
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {props.children}
        </ColorModeContext.Provider>
    );
}