// Selecionar a Seção About
const about = document.querySelector('#about');

// Função para trazer as infos do Github
//async utiliza o conceito de promise
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
                <h2>Sobre mim</h2>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Copo furadis é disculpa de bebadis, arcu quam euismod magna. Segunda-feiris nun dá, eu vô me pirulitá! Quem num gosta di mé, boa gentis num é. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>
                <p>Mussum Ipsum, cacilds vidis litro abertis.  Copo furadis é disculpa de bebadis, arcu quam euismod magna. Segunda-feiris nun dá, eu vô me pirulitá! Quem num gosta di mé, boa gentis num é. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.</p>

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

        //PASSO 4: Adicionar o HTML dentro da seção About

        about.innerHTML += conteudo;

    } catch (error) {
        console.error(error);
    }
}

//Chamar a função getAPIGithub()

getApiGithub();