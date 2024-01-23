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
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user")
    private Long user;

     @Column(name = "product_id")
    private Long product;

    @Column(name = "name")
    private String name;

    @Column(name = "price")
    private String price;

    @Column(name = "kgprice")
    private String kgprice;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "imgsrc")
    private String imgsrc;

}
