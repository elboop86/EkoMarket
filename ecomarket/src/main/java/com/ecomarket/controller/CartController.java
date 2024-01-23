package com.ecomarket.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecomarket.entity.Cart;
import com.ecomarket.services.CartService;

@RestController
@RequestMapping("/api/usuarios")
public class CartController {

    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping("/addtocart")
    public Cart addToCart(@RequestBody Cart cart) {
        return cartService.addToCart(cart.getUser(),
                                    cart.getProduct(),
                                    cart.getName(),
                                    cart.getPrice(),
                                    cart.getKgprice(),
                                    cart.getQuantity(),
                                    cart.getImgsrc());
                                }

    @GetMapping("/cart/{userId}")
    public ResponseEntity<List<Cart>> obtenerCarritosPorUsuario(@PathVariable Long userId) {
        List<Cart> carts = cartService.obtenerCartPorUserId(userId);
        if (!carts.isEmpty()) {
            return ResponseEntity.ok(carts);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}