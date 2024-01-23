package com.ecomarket.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecomarket.entity.User;
import com.ecomarket.entity.UserForm;
import com.ecomarket.services.UserFormService;
import com.ecomarket.services.UserService;

@RestController
@RequestMapping("/api/usuarios")
public class UserController {

    private final UserService userService;
    private final UserFormService userFormService;

    @Autowired
    public UserController(UserService userService,
                          UserFormService userFormService) {
        this.userService = userService;
        this.userFormService = userFormService;
    }

    @PostMapping("/agregar")
    public User registrarUsuario(@RequestBody User user) {
        return userService.agregarUser(user.getUsername(), user.getEmail(), user.getPassword());
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        User userResult = userService.obtenerUsuarioPorEmailyPassword(user.getEmail(), user.getPassword());

        if (userResult != null) {
            String token = generateToken(userResult.getId()); // Genera el token como mejor convenga
            return "{\"token\": \"" + token + "\"}";
        } else {
            return "{\"token\": \"" + 0 + "\"}";
        }
    }

    private String generateToken(int id) {
        // Aquí podrías usar una librería para generar tokens JWT o cualquier otro mecanismo que prefieras
        // El token generado se devolverá al cliente
        return Integer.toString(id);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> obtenerUsuario(@PathVariable Long userId) {
        User user = userService.obtenerUsuarioPorId(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/agregarform")
    public UserForm registrarUsuarioForm(@RequestBody UserForm userForm) {
        return userFormService.agregarUserForm(userForm);
    }

    @GetMapping("/form/{user}")
    public ResponseEntity<UserForm> obtenerUsuarioForm(@PathVariable Long user) {
        UserForm userForm = userFormService.obtenerUsuarioFormPorUserId(user);
        if (userForm != null) {
            return ResponseEntity.ok(userForm);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
}