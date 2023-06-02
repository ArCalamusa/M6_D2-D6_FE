# M6_D2-D6_FE
Ho inserito una notifica toast per definire l’esito del login (https://react-hot-toast.com/) e mostrarlo lato Client
![Schermata 2023-06-02 alle 14 25 22](https://github.com/ArCalamusa/M6_D2-D6_FE/assets/117526559/52576059-3e42-4eba-9978-eca2e4ce8e78)
![Schermata 2023-06-02 alle 14 24 49](https://github.com/ArCalamusa/M6_D2-D6_FE/assets/117526559/cb78d6c6-a079-40ca-8d08-8cffdc688ad9)

La pagina home contiene all’interno di un elemento card di bootstrap i post caricati attraverso una  richiesta POST (lato backend) e una navbar (elemento bootstrap) ove è possibile navigare alla pagina degli utenti ed un bottone (bootstrap) per aggiungere un post che deve obbligatoriamente contenere titolo, autore, voto, descrizione e immagine (parametri definiti nello schema della backend, l’id lo genera in automatico MongoDB)

![Schermata 2023-06-02 alle 14 45 16](https://github.com/ArCalamusa/M6_D2-D6_FE/assets/117526559/dc8e865b-b09f-4a9b-8191-4dfb32a3aa1b)
![Schermata 2023-06-02 alle 14 45 28](https://github.com/ArCalamusa/M6_D2-D6_FE/assets/117526559/1dd38181-bb08-4f8c-80e5-8f54e68a279a)

La pagina users mostra gli utenti (inseriti sempre tramite una POST) in delle card bootstrap ove è visibile solo nickname e email; è presente una navbar (componente bootstrap) ove è possibile navigare alla home o eseguire il logout (redirect login)

![Schermata 2023-06-02 alle 14 48 17](https://github.com/ArCalamusa/M6_D2-D6_FE/assets/117526559/712f122a-642c-401c-a52a-13f9a31aafb5)

Ho inserito una pagination (libreria react-responsive-pagination) sia per la home dei post che per la pagina degli utenti, che mostra la pagina attuale e le successive bloccando il back e next rispettivamente al raggiungimento della prima e dell’ultima pagina.  
![Schermata 2023-06-02 alle 14 25 49](https://github.com/ArCalamusa/M6_D2-D6_FE/assets/117526559/fac18d4b-f870-4792-9cf3-dbf0dd2c0c5f)

Anteprima:

https://github.com/ArCalamusa/M6_D2-D6_FE/assets/117526559/9f5d1af5-d8d4-4eaf-9b13-8a491ec43a6a

