package com.ecomarket.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
@Table(name = "userform")
public class UserForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "user")
    private int user;

    @Column(name = "sr")
    private String sr;

    @Column(name = "nif")
    private String nif;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "phone")
    private String phone;

    @Column(name = "empresa")
    private String empresa;

    @Column(name = "calle")
    private String calle;

    @Column(name = "numero")
    private String numero;

    @Column(name = "piso")
    private String piso;

     @Column(name = "puerta")
    private String puerta;

     @Column(name = "localidad")
    private String localidad;

     @Column(name = "provincia")
    private String provincia;

     @Column(name = "comunidad")
    private String comunidad;

     @Column(name = "cp")
    private String cp;

     @Column(name = "puntoderecogida")
    private String puntoderecogida;
}
