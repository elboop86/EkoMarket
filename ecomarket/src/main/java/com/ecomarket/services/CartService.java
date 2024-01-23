package com.ecomarket.services;

import com.ecomarket.repository.CartRepository;
import com.ecomarket.entity.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    private final CartRepository cartRepository;

    @Autowired
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public Cart addToCart(Long userId,
                         Long productId,
                         String name,
                         String price,
                         String kgprice,
                         int quantity,
                         String imgsrc) {
        Cart nuevoCart = new Cart();
        nuevoCart.setUser(userId);
        nuevoCart.setProduct(productId);
        nuevoCart.setName(name);
        nuevoCart.setPrice(price);
        nuevoCart.setKgprice(kgprice);
        nuevoCart.setQuantity(quantity);
        nuevoCart.setImgsrc(imgsrc);
        return cartRepository.save(nuevoCart);
    }

    public List<Cart> obtenerCartPorUserId(Long userId) {
        return cartRepository.findByUser(userId);
    }

}
