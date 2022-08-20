## Camadas
- rota: é a parte da url que começa na primeira barra (`https://www.exemplosite.com/ROTA1/ROTA2`)
- controller: pegar as info do usuário (username, password, confirm password);
- service: trabalha com as regras de negócio, acessar o banco de dados.

## exemplo
João, 18 anos -> maria

rota `/maria`

controller (maria, João)

service: 
João -> banco -> 12 anos -> erro <br/>
João -> banco -> 18 anos -> maria

