import appConfig from '../config.json';

function GlobalStyle(){
    return(
        <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */ 
    `}</style>
    );
}

function TittleNBiltin(props){
    console.log(props);
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag}{
                    color: ${appConfig.theme.colors.primary['500']};
                    font-size:50px;
                    font-weight: 700;
                }
            `}</style>
        </>
    );
}
//React Component
function HomePage() {
    /*  JSX
    *   props.children --> child class being passed as argument -->  content that will render - 
    */
    return (
        <div>
            <GlobalStyle/>
        <TittleNBiltin tag ="h1">Welcome back, Little Padawan!</TittleNBiltin>
        <h2>Discord - tests again</h2>

        </div>
    );
    }export default HomePage