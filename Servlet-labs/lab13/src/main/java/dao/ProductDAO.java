package dao;

import model.Product;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductDAO {

    Map<Integer, Product> productDB = new HashMap<>();
    {
        productDB.put(1, new Product(1, "item-1.png", "Nike Free", 500));
        productDB.put(2, new Product(2, "item-2.png", "Adidas", 300));
        productDB.put(3, new Product(3, "item-3.png", "Brushed Scarf", 250));
    }

    public List<Product> getAllProducts() {
        return new ArrayList<>(productDB.values());
    }

    public Product getProductById(int productId) {
        return productDB.get(productId);
    }

    public int genId() {
        return productDB.size()+1;
    }
}
