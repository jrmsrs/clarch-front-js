Layer responsável por tratar a infraestrutura da aplicação, ou seja, a implementação de bibliotecas externas

(lib) <- (lib)HttpClient -implements-> Http{GET|POST|PUT|DELETE}Client

Exemplo:
Axios <- AxiosHttpClient -implements-> Http{GET|POST|PUT|DELETE}Client
