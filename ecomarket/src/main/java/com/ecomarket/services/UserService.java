package com.ecomarket.services;

import com.ecomarket.repository.UserRepository;
import com.ecomarket.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User agregarUser(String nombre, String email, String password) {
        User nuevoUser = new User();
        nuevoUser.setUsername(nombre);
        nuevoUser.setEmail(email);
        nuevoUser.setPassword(password);
        return userRepository.save(nuevoUser);
    }

    public User obtenerUsuarioPorId(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.orElse(null);
    }

    public User obtenerUsuarioPorEmailyPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

}
