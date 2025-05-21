package com.stock.stock.services;

import java.util.List;
import com.stock.stock.entities.Client;

public interface ClientService {

    List<Client> getAllClients();

    Client getClientById(Long id);

    Client createClient(Client client);

    Client updateClient(Long id, Client client);

    void deleteClient(Long id);
}
