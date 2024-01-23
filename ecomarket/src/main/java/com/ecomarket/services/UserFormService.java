package com.ecomarket.services;

import com.ecomarket.repository.UserFormRepository;
import com.ecomarket.entity.UserForm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserFormService {
    private final UserFormRepository userFormRepository;

    @Autowired
    public UserFormService(UserFormRepository userFormRepository) {
        this.userFormRepository = userFormRepository;
    }

    public UserForm agregarUserForm(UserForm userForm) {
        UserForm nuevoFormUser = new UserForm();
        nuevoFormUser.setUser(userForm.getUser());
        nuevoFormUser.setSr(userForm.getSr());
        nuevoFormUser.setNif(userForm.getNif());
        nuevoFormUser.setNombre(userForm.getNombre());
        nuevoFormUser.setPhone(userForm.getPhone());
        nuevoFormUser.setEmpresa(userForm.getEmpresa());
        nuevoFormUser.setCalle(userForm.getCalle());
        nuevoFormUser.setNumero(userForm.getNumero());
        nuevoFormUser.setPiso(userForm.getPiso());
        nuevoFormUser.setPuerta(userForm.getPuerta());
        nuevoFormUser.setLocalidad(userForm.getLocalidad());
        nuevoFormUser.setProvincia(userForm.getProvincia());
        nuevoFormUser.setComunidad(userForm.getComunidad());
        nuevoFormUser.setCp(userForm.getCp());
        nuevoFormUser.setPuntoderecogida(userForm.getPuntoderecogida());
        return userFormRepository.save(nuevoFormUser);
    }

    public UserForm obtenerUsuarioFormPorUserId(Long userId) {
        Optional<UserForm> optionalUser = userFormRepository.findByUser(userId);
        return optionalUser.orElse(null);
    }


}
