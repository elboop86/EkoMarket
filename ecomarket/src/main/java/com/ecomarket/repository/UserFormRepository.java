package com.ecomarket.repository;

import com.ecomarket.entity.UserForm;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserFormRepository extends JpaRepository<UserForm, Long> {
    Optional<UserForm> findByUser(Long userId);
}
