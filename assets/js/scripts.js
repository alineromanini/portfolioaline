// Selecionar a Seção About
const about = document.querySelector('#about');

//Selecionar formulario
const formulario = document.querySelector('#formulario');
 
//Expresão Regular para validar o email - apenas verifica se a pessoa digitou um email no formato correto
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// Função para trazer as infos do Github
//async utiliza o conceito de promise, por isso usa o try catch
//js nao tem método, é função
async function getApiGithub() {

    try {
        // PASSO 1: Fazer uma requisição GET para a API do Github
        const dadosPerfil = await fetch('https://api.github.com/users/alineromanini') //fetch funciona como o insomnia utilizando GET e é assincrono por natureza

        // PASSO 2: Converter a resposta da API para JSON
        const perfilJson = await dadosPerfil.json();

        //PASSO 3: Criar o HTML/CSS com os dados do Perfil

        //interpolacao

        let conteudo = `
        
        <!-- FOTO DO PERFIL -->
        <figure class="about_image">
                <img
                    src="${perfilJson.avatar_url}"
                    alt="Foto do perfil - ${perfilJson.name}."
                    >

            </figure>

            <article class="about_content">
                
            <!-- CONTEÚDO DO PERFIL -->
            <article class="about_content">

                <h2>Sobre mim</h2>
                <p>Sou formada em Engenharia de Telecomunicações pela UNICAMP e atualmente estou em transição de carreira para a área de tecnologia. Participo do Bootcamp de Desenvolvimento Fullstack Java da Generation Brasil onde venho desenvolvendo projetos utilizando Java, Spring, SQL, HTML, CSS, Javascript, React entre outras tecnologias.</p>
                <p>Sou curiosa, gosto de uma boa leitura e bons discos e amo meus gatos. Estou sempre aprendendo algo novo e acredito que a educação e a tecnologia tem o poder de transformar realidades e mudar pessoas.</p>
                <p>Meu objetivo é atuar como desenvolvedora full stack, aplicando soft e hard skills, boas práticas e metodologias ágeis para construir soluções eficientes, de qualidade e que gerem impacto.</p>
                <p>Para conhecer mais sobre os projetos que venho desenvolvendo, acesse meu Github!</p>
                
                           
                <div class="about_stats">
                    <a href="${perfilJson.html_url}" target="_blank" class="botao">Ver Github</a>
                    <div class="stats-wrapper">
                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.followers}</p>
                            <p class="stat-label">Seguidores</p>

                        </div>

                        <div class="stat-item">
                            <p class="stat-number">${perfilJson.public_repos}</p>
                            <p class="stat-label">Repositórios</p>

                        </div>
                    </div>
                </div>
            </article>
        
        
        
        
        `

        //PASSO 4: Adicionar o conteúdo na seção About

        about.innerHTML += conteudo;

    } catch (error) {
        console.error(error);
    }
}

    // Função de envio e validação do formulário
    formulario.addEventListener('submit', function(event){
      
   //Validação do campo nome
    event.preventDefault(); //impede o envio automatico do formulário
    const campoNome = document.querySelector('#nome'); //validação do campo nome
    const txtNome = document.querySelector('#txtNome');
   
    //Nome precisa ter pelo menos 3 caracteres
    if(campoNome.value.length < 3){
      txtNome.innerHTML = 'O nome deve ter pelo menos 3 caracteres.';
      campoNome.focus();
      return;
    }else{
      txtNome.innerHTML = '';
    }
 
   //Validação do campo email
    const campoEmail = document.querySelector('#email'); //validação do campo nome
    const txtEmail = document.querySelector('#txtEmail');
   
    //Verifica se o email é válido
    if(!campoEmail.value.match(emailRegex)){
      txtEmail.innerHTML = 'Digite um e-mail válido.';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }
 
    //Validação do campo assunto
    const campoAssunto = document.querySelector('#assunto'); //validação do campo assunto
    const txtAssunto = document.querySelector('#txtAssunto');
   
    //Assunto precisa ter pelo menos 5 caracteres
    if(campoAssunto.value.length < 5){
      txtAssunto.innerHTML = 'O assunto deve ter pelo menos 5 caracteres.';
      campoAssunto.focus();
      return;
    }else{
      txtAssunto.innerHTML = '';
    }
 
    //Se passou por todas as validações, envia o formulário
    formulario.submit();
 
})
//prevent default: não envia o formulario enquanto nao fizer a validação
//focus: coloca o cursor no campo que precisa ser preenchido

//Chamar a função getAPIGithub()
getApiGithub();