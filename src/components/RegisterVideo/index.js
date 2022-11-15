import { StyledRegisterVideo } from "./styles";
import React from "react";

/*
## Desafios
- 1º Desafio: No momento de cadastrar, pegar o ID do vídeo separadamente da URL com uma função e ter a URL da imagem de Thumbnail do Youtube, você pode procurar no:
  - NPM
  - Google
  - Tentar você mesmo
- 2º Desafio: Adicionar o preview dessa imagem do desafio anterior na tela.
- 3º Desafio: Adicionar validações de formulário
  - Campo está required?
  - Campo tem ao menos X caracteres?
  - Exibir mensagem com o erro que aconteceu.
- 4º Desafio: Se inspirar na API do Formik para adicionar validações ao nosso Custom Hook.
*/

/*
### 1º Desafio
Em quanto cadastra:
  - pegar o ID do vídeo pela URL,
  - e se o vídeo for do youtube gerar a thump por: https://img.youtube.com/vi/${id}/hqdefault.jpg
*/

function useForm({ initialValue }) {
  const [values, setValues] = React.useState(initialValue);

  function generateThumbnail(id) {
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  }

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;

      if (name === "url") {
        const url = value;
        const id = url.slice(url.indexOf("v=") + 2, url.indexOf("&"));
        const thumbnail = generateThumbnail(id);

        setValues({
          thumbnail: thumbnail
        })
      } else {
        setValues({
          ...values,
          [name]: value,
        })
      }
    },
    clearForm() {
      setValues({})
    }
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValue: { title: "Frost punk", url: "https://youtube...", thumbnail: "" }
  });
  const [visibleForm, setVisibleForm] = React.useState(true);
  /*
  ##O que precisamos para o form funcionar?
  - pegar os dados
    - título
    - url do vídeo
  - precisamos ter um onSubmit do nosso form
  - limpar o formulário após o submit e fechar o modal
  */

  // [x] Falta o botão para adicionar
  // [x] Modal
  // -> [x]  Precisamos controlar o state
  // -> [ ] Formulário em si
  // console.log("teste");
  return (
    <StyledRegisterVideo>
      <button type="button" className="add-video" onClick={() => setVisibleForm(true)}>
        +
      </button>
      { /* Ternário e Operadores de Curto-Circuito */}
      {visibleForm
        ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            setVisibleForm(false);
            formCadastro.clearForm()
          }}>
            <div>
              <button className="close-modal" onClick={() => setVisibleForm(false)}>
                X
              </button>
              <input
                placeholder="Título do Vídeo"
                name="title"
                value={formCadastro.values.title}
                onChange={formCadastro.handleChange} />
              <input
                placeholder="URL"
                name="url"
                value={formCadastro.values.url}
                onChange={formCadastro.handleChange} />
              <button type="submit">
                Cadastrar
              </button>
              <img src={formCadastro.values.thumbnail} />
            </div>
          </form>
        )
        : null
      }
    </StyledRegisterVideo >
  )
}
