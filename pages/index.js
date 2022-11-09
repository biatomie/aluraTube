import React from "react"; //cria os estados
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    // const mensagem = "Bem vindo ao AluraTube!"
    // const estilosDaHomePage = {backgroundColor:"red"}
    const [valorDoFiltro, setValorDoFiltro] = React.useState(""); //veio do index do menu
    //const valorDoFiltro = "Flutter";

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                {/* Prop Drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header />
                <Timeline searchValue = {valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
        </>
        // <div style={estilosDaHomePage}>
        //     <Menu />
        //     <Header />
        //     <Timeline playlists={config.playlists}/>
        // </div>
    );
  }
  
  export default HomePage

//   function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
//   }

  const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius:50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
  `;
  const StyledBanner = styled.div`
    background-image: url(${({ bg }) => bg});
    /* background-image: url(${config.bg}); */
    height: 230px;
    `;
  function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg}/>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
  }

  function Timeline({searchValue, ...props}) {
    // console.log("Dentro do componente", props);
    const playlistNames = Object.keys(props.playlists);
    //Statement
    //Retorno por expressão
    return (
        <StyledTimeline>
        <div>
            {playlistNames.map((playlistName)=>{
                const videos = props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                // return playlistNames;
                //key otimiza o map ao informar a key
                return (
                    <section key={playlistName}>
                            <h2>{playlistName}</h2>
                            <div>
                                {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)})
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}> 
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                            </div>

                    </section>
                )
            })}
        </div>

        </StyledTimeline>
    )
  }